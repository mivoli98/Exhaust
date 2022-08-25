import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import FooterBanner from './FooterBanner';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>WE Exhaust</title>
      </Head> 
      <header>
      </header>
      <main>
        {children}
      </main>    
      <footer>
        <Footer />
      </footer>
      <div className="copyrightText">
        <p>Copyright @2022 WE Exhaust. All Rights Reserve.</p>
      </div>
    </div>
  )
}

export default Layout