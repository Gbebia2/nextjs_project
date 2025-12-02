import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname.startsWith('/login');

      if (isOnLoginPage) {
        if (isLoggedIn) {
          // Redirect logged-in users away from the login page
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true; // Allow logged-out users to view the login page
      }
      // Block all other pages if the user is not logged in
      return isLoggedIn;
    },
  },
  providers: [],
} satisfies NextAuthConfig;