import { doLogout } from '@/app/actions'
import React from 'react'

export default function Logout() {
  return (
    <form action={doLogout}>
        <button type='submit'>Logout</button>
    </form>
  )
}
