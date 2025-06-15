'use client'
import LoginForm from '@/components/LoginForm/LoginForm'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { doCredentialLogin } from '../actions'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()
  const [error, setError] = useState('')

  console.log(error)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData(e.currentTarget)
      const response = await doCredentialLogin(formData)

      if(!!response.error){
        setError('Credentials Invalid')
      }else{
        router.push('/')
      }

    } catch (error) {
      router
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>
          <p>{error}</p>
        <form onSubmit={handleFormSubmit} className="grid gap-4">
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
            Submit
          </button>
        </form>

        {/* Optional: Divider */}
        <div className="my-6 border-t border-gray-200" />

        {/* Optional: Other login methods */}
        <LoginForm />
      </div>
    </div>
  )
}
