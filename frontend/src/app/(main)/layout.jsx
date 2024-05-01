import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    )
}

export default MainLayout;