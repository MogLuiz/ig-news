import NextAuth from "next-auth"
import Providers from "next-auth/providers"

// FaunaDB
import { fauna } from "../../../services/fauna"
import { query } from "faunadb"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user"
    }),
  ],
  jwt: {
    signingKey: process.env.SIGNIN_KEY,
  },
  callbacks: {
    async signIn(user, account, profile) {

      const { email } = user

      try {
        await fauna.query(
          query.Create(
            query.Collection("users"),
            { data: { email } }
          )
        )

        return true

      } catch {

        return false

      }
    },
  }
})