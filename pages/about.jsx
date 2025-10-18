// pages/about.js
import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import AboutPage from '../src/Pages/AboutPage'; // 👈 your AboutPage component file

const About = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>About Us – DeepSeas Shipping</title>
        <meta name="description" content="Learn more about DeepSeas Shipping" />
        <link rel="canonical" href="https://www.freightedge.com/about" />
      </Head>

      <main className="content-wrapper overflow-x-hidden">
        <AboutPage />
      </main>
    </Fragment>
  );
};

export default About;
