'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useSession } from 'next-auth/react'
import Logout from './LoginForm/Logout';


export default function Navbar() {

    const { data: session, status } = useSession();
    // console.log(session)
    // console.log(status)
    const pathname = usePathname()
    const isDashboard = pathname.startsWith('/dashboard')
    return (
        <div>
            {
                !isDashboard && <div className='flex justify-between items-center w-full px-5 lg:px-8 xl:px-[8%] md:px-8 bg-red-300 py-3'>
                    <div>
                        <h1>Blog</h1>
                    </div>
                    {/* <NavigationMenu>
                        <NavigationMenuList className='flex gap-3'>
                            <NavigationMenuItem>
                                <Link href="/blog">Blog</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about">About Me</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact">Contact Me</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/purchase">Purchase</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/dashboard">Dashboard</Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu> */}

                    {
                        session?.user ? <>
                            <Logout />
                        </> : <div className='flex gap-2'>
                            <Link href={'/signIn'}>SignIn</Link>
                            <Link href={'/register'}>SignUp</Link>
                        </div>
                    }

                </div>
            }

        </div>
    );
}
