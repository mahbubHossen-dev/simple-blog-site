
import { doSocialLogin } from '@/app/actions'
import React from 'react'

export default function LoginForm() {
  return (
    <form action={doSocialLogin} className='space-x-2 flex justify-center items-center mt-16'>
        <button className='p-4 bg-amber-200' type='submit' name='action' value='google'>Sign In With Google</button>
        <button className='p-4 bg-amber-200' type='submit' name='action' value='facebook'>Sign In With Facebook</button>
    </form>
  )
}
