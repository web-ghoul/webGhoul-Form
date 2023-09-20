import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_NEXT_AUTH_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_NEXT_AUTH_GITHUB_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)