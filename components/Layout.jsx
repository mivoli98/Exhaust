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
        {/* <Navbar /> */}
      </header>
      <main>
        {children}
      </main>
      {/* <FooterBanner /> */}
      
      <footer>
      {/* <div className="waves">
        <div className="waves" id="wave1"></div>
        <div className="waves" id="wave2"></div>
        <div className="waves" id="wave2"></div>
        <div className="waves" id="wave4"></div>
    </div> */}
        <Footer />
      </footer>
      <div class="copyrightText">
        <p>Copyright @2022 WE Exhaust. All Rights Reserve.</p>
      </div>
    </div>
  )
}

export default Layout