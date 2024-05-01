'use client';
import { AppProvider } from '@/context/AppContext'
import React from 'react'
import Footer from '@/components/footer';

const Template = ({ children }) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}

export default Template
