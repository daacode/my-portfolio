// pages/index.js

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import Contact from '@/components/Contact'
 
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>David Adeneye Portfolio</title>
        <meta name="description" content="David Adeneye Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Works />
		<Contact />
      </div>
    </>
  );
};

export default Home;