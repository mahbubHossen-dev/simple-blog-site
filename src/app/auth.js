import NextAuth  from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { getUserByEmail } from "@/data/users";

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    
    providers: [
        Credentials({
            async authorize(credentials){
                console.log(credentials)
                if(credentials === null) return null

                try {
                    const user = getUserByEmail(credentials?.email)
                    if(user){
                        const isMatch = user?.password === credentials?.password;
                        if(isMatch){
                            return user
                        }else{
                            throw new Error("Email or Password is not correct");
                        }
                    }else{
                         throw new Error("User not found");
                    }
                } catch (error) {
                     throw new Error(error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ]
})

