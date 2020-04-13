import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';


const Index: React.FC = () => {
    return (
      <div>
        <Head>
          <title>Fleuriland - Commandes en ligne</title>
        </Head>
        <Home />
      </div>
    );
  }

  export default Index;