
"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navLinks = <>
    <ul className='lg:flex items-center gap-4'>
        <Link href={'/'}><p className='text-primary font-semibold'>AI Resume</p></Link>
        <Link href={'/'}>AI Coverletter</Link>
        <Link href={'/'}>Pricing</Link>
        <Link href={'/'}>Career</Link>
        <Link href={'/'}>Organization</Link>
        <Link href={'/'}>Blog</Link>
    </ul>
    </>
    return (
        <div className="navbar bg-[#F9FBFF] lg:px-24 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        navLinks
       }
      </ul>
    </div>
    <div className='flex items-center text-3xl font-bold'>
        <span className='text-primary '>Job</span><h1 >mantic</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {
        navLinks
       }
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-3">
   <button className='font-bold'>login</button>
   <button className='btn btn-secondary rounded-full text-white'>sign up</button>
  </div>
</div>
    );
};

export default Navbar;