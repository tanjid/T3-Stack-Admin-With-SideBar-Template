import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { prisma } from "@/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;

      // ...other properties
      role?: string;
      businessId: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name?: string | null;
    email: string;
    role?: string | null;
    businessId: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
// export const authOptions: NextAuthOptions = {
//   callbacks: {
//     session: ({ session, user }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: user.id,
//       },
//     }),
//   },
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     DiscordProvider({
//       clientId: env.DISCORD_CLIENT_ID,
//       clientSecret: env.DISCORD_CLIENT_SECRET,
//     }),
//     /**
//      * ...add more providers here.
//      *
//      * Most other providers require a bit more work than the Discord provider. For example, the
//      * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
//      * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
//      *
//      * @see https://next-auth.js.org/providers/github
//      */
//   ],
// };

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      if (user) token.businessId = user.businessId;
      return token;
    },
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        session.user.role = token.role as string;
        session.user.businessId = token.businessId as string;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials,) {
        // Add logic here to look up the user from the credentials supplied

        if (!credentials) {
          return null;
        }
        const loggedUser = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        });

        if (!loggedUser) {
          return null;
        }

        if (loggedUser) {
          if (loggedUser.password === credentials.password) {
            return {
              id: loggedUser.id,
              name: loggedUser.name,
              email: loggedUser.email,
              role: "ADMIN",
              businessId: loggedUser.businessId,
            };
          }
        }

        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return null;

        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return { id: "1", name: "J Smith", email: "jsmith@example.com" }
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
