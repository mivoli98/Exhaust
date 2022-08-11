import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function MyApp({ Component, pageProps }) {
    return (
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps }/>
        </Layout>
       </StateContext>
    
    )
}

export default MyApp