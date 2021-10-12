import NextAuth from "next-auth"
import Providers from "next-auth/providers"

// FaunaDB
import { fauna } from "../../../services/fauna"
import { query } from "faunadb"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user"
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {

      const { email } = user

      await fauna.query(
        query.Create(
          query.Collection("users"),
          { data: { email: user.email } }
        )
      )

      return true
    },
  }
})