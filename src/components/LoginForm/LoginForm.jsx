'use client'

import { useRouter } from 'next/navigation'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import SocialLogin from './SocialLogin'
import { doCredentialLogin } from '@/app/actions'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState(null);
  const { update } = useSession(); // update ফাংশন পাওয়া
  // console.log(status)
  // console.log(update)

  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      console.log(response)
      if (response && !response.error) {
        await update(); 
        router.push('/');
      } else {
        console.error('login Failed', response?.error );
        setError(response?.error || 'login Failed');
      }
    } catch (e) {
      setError(e.message || 'login Failed');
      console.error('login Failed:', e.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

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
        <SocialLogin />

        <p className='my-4'>Don't have an account? <Link href={'/register'}>Register</Link></p>
      </div>
    </div>
  )
}
