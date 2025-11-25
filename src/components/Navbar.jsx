'use client'
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import React from 'react'
import { toast } from 'react-toastify';

export default function Navbar() {
  const {user, logOut} = useAuth()
    const links = (
      <>
        <Link className="px-5" href={"/"}>
          <li>Home</li>
        </Link>
        <Link className="px-5" href={"/add-course"}>
          <li>Create A Course</li>
        </Link>
        <Link className="px-5" href={"/courses"}>
          <li>All Course</li>
        </Link>
        {user && (
          <Link className="px-5" href={"/manage-courses"}>
            <li>Manage Course</li>
          </Link>
        )}
      </>
    );
  const handleLogout = () => {
    try {
      logOut()
      toast.success('logged out successfully')
    } catch {
      toast.error('Something went wrong')
    }
  }
  return (
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl">CourseHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <button onClick={handleLogout} className="btn btn-primary">LogOut</button> : <Link href={'/login'} className="btn">Login</Link>
          
        }
      </div>
    </div>
  );
}
