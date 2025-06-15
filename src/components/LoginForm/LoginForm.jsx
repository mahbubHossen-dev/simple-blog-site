import { doSocialLogin } from '@/app/actions'
import React from 'react'

export default function LoginForm() {
  return (
    <form
      action={doSocialLogin}
      className="flex flex-col sm:flex-row gap-3 justify-center items-center"
    >
      <button
        type="submit"
        name="action"
        value="google"
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.35 11.1H12v2.9h5.35C16.75 16.2 14.6 17.5 12 17.5c-3.04 0-5.5-2.46-5.5-5.5s2.46-5.5 5.5-5.5c1.4 0 2.67.52 3.65 1.35l2.2-2.2C16.76 4.06 14.47 3 12 3 6.48 3 2 7.48 2 13s4.48 10 10 10c5.26 0 9.64-4.13 9.99-9.35.02-.22.01-.43.01-.65z" />
        </svg>
        Google
      </button>

      <button
        type="submit"
        name="action"
        value="facebook"
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.47H15.6c-1.25 0-1.64.78-1.64 1.57v1.89h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
        </svg>
        Facebook
      </button>
    </form>
  )
}
