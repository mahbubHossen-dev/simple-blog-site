'use client'
import React from 'react'
import SocialLogin from '../LoginForm/SocialLogin'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { useAddUserMutation } from '@/features/user'

export default function RegisterForm() {
    const [addUser] = useAddUserMutation()

    const handleRegister =async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')

        const userData = {
            name,
            email,
            password
        }

        // const result = await fetch('http://localhost:3000/api/register', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userData)
        // })

        // console.log(await result.json())

        const result = await addUser(userData)
        console.log(result)

    } 

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

                <form onSubmit={handleRegister} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" name="email" placeholder="Enter your email" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" name="password" placeholder="Enter your password" />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
                    >
                        Register
                    </button>
                </form>

                {/* Optional: Divider */}
                <div className="my-6 border-t border-gray-200" />

                {/* Optional: Other login methods */}
                <SocialLogin />

                <p className='my-4'>Already have an account? <Link href={'/signIn'}>SignIn</Link></p>
            </div>
        </div>
    )
}
