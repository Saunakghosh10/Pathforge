import { AuthOptions } from 'next-auth';

declare module "next-auth" {
  interface User {
    isAdmin?: boolean;
  }
  interface Session {
    user?: User;
  }
}

export const authOptions: AuthOptions = {
  providers: [],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.isAdmin = token.isAdmin as boolean;
      }
      return session;
    },
    async jwt({ token }) {
      // For now, we'll make everyone an admin for testing
      token.isAdmin = true;
      return token;
    },
  },
};

// Basic auth middleware
export async function isAuthenticated(request: Request) {
  // For now, return true as we haven't implemented authentication yet
  return true;
}

export async function isAdmin(request: Request) {
  // For now, return true as we haven't implemented admin authentication yet
  return true;
}
