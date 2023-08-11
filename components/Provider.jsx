"use client";
import {SessionProvider} from "next-auth/react";

const Feed = ({children,session}) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
export default Feed  