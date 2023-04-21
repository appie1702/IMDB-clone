import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    pages: {
      signIn: '/'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
  }
  
  
  export default NextAuth(authOptions);