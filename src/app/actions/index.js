
'use server'

import { signIn, signOut } from "../api/auth/[...nextauth]/route";




export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData){
  try{
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })
    return response
  }catch(error){
    console.log(error)
    throw new Error(error)
  }
}