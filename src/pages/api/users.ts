import { NextApiRequest, NextApiResponse } from "next"

export default function users(request: NextApiRequest, response: NextApiResponse) {
    const users = [
        { id: 1, name: "Luiz" },
        { id: 2, name: "Samin" },
        { id: 3, name: "Bruna" },
    ]

    return response.json(users)
}