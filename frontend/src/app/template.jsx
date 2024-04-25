'use client';
import { AppProvider } from '@/context/AppContext'
import React from 'react'
import Navbar from './(main)/navbar';
import Footer from '@/components/footer';

const Template = ({ children }) => {
    return (
        <AppProvider>
          <Navbar/>
          {children}
          <Footer/>
          </AppProvider>
    )
}

export default Template
