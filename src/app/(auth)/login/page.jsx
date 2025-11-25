'use client'
import GoogleLogin from '@/components/GoogleLogin';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function login() {
  const { login } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const handleLogin = async e => {
     e.preventDefault()
    try {
      await login(email, password)
      router.push('/')
      toast.success('Log in successful')
    } catch {
      toast.error('Something Went Wrong, Please Try Again.')
    }
   }
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto py-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button onClick={handleLogin} className="btn btn-neutral mt-4">
            Login
          </button>
          <p className="text-center text-sm">
            {" "}
            Don't Have an account?{" "}
            <Link href={"/register"} className="link">
              Register now
            </Link>{" "}
          </p>
        </form>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
}
