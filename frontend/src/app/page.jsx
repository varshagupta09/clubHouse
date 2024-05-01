import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Navbar from '@/components/navbar'
import React from 'react'


const Home = () => {
  return (
    <>
      <Navbar />
      <>


      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
              Welcome to ReactUIHub
            </h1>
            <p className="pt-3 divider divider-neutral">Discover, Customize, and Create with Ease</p>
            <p className="py-3">
              Ready to elevate your React projects? Browse our collection of
              templates, dive into our resources, and embark on your journey to
              creating exceptional web applications with ReactUIHub.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>

    </>
  )
}

export default Home