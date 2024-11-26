import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/models/Admin";

interface Credentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
            throw new Error("Credentials not provided");
        }
    
        await dbConnect();
    
        try {
            const admin = await AdminModel.findOne({
                email: credentials.email,
            });
    
            if (!admin) {
                throw new Error("No admin found with this email.");
            }
    
            const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                admin.password
            );
    
            if (isPasswordCorrect) {
                return admin; 
            } else {
                throw new Error("Incorrect password");
            }
        } catch (error) {
            console.error("Error during authentication:", error);
            throw new Error((error as Error).message);
        }
    }
    
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Use 'id' instead of '_id'
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.admin = {
          id: token.id, // Use 'id' instead of '_id'
          email: token.email,
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
};
