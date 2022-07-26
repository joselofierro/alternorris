import { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const {signIn} = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault() 

    // @TODO: add login logic
    const email = emailRef.current.value
    const password = passwordRef.current.value
    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
      history.push('/')
    }
  }

  return (
    <>
      
      <div class="sigin max-w-sm m-auto">
                
        <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="block w-full text-center text-grey-darkest mb-6">Login</h1>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor='input-email'>Email</label>
                <input id='input-email' type='email' ref={emailRef} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="input-password">Password</label>
                <input id="input-password" type="password" ref={passwordRef} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  />
            </div>
            <br />
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign up
                </button>

            </div>


        </form>
        <p class="inline-block align-baseline font-bold text-sm text-black-500 hover:text-blue-800">
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
    </div>
    </>
  )
}