"use client";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/" className="text-primary font-semibold">AI Resume</Link>
      </li>
      <li>
        <Link href="/">AI Coverletter</Link>
      </li>
      <li>
        <Link href="/">Pricing</Link>
      </li>
      <li>
        <Link href="/">Career</Link>
      </li>
      <li>
        <Link href="/">Organization</Link>
      </li>
      <li>
        <Link href="/">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#F9FBFF]">
      <div className="drawer">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        
          <Container className="flex items-center justify-between py-3">
     
            <div className="flex items-center gap-2">
           
              <label
                htmlFor="nav-drawer"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

       
              <div className="text-2xl font-bold">
                <span className="text-primary">Job</span>
                mantic
              </div>
            </div>

       
            <div className="hidden lg:block">
              <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
            </div>

    
            <div className="flex items-center gap-3">
              <button className="font-bold">Login</button>
              <button className="btn btn-secondary rounded-full text-white">
                Sign up
              </button>
            </div>
          </Container>
        </div>

   
        <div className="drawer-side">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-100">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
