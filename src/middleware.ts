import { withAuth } from "next-auth/middleware"
import type { NextRequestWithAuth } from "next-auth/middleware"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req:NextRequestWithAuth ) {

        console.log(req.nextUrl.pathname)
      console.log(req.nextauth.token)
    },
    {
      callbacks: {
        authorized: ({ token }) => !!token,
      },
    }
  )
  
  export const config = { matcher: ["/:path*"] }