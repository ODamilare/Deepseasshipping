// Core Imports
import { Fragment } from 'react';
import Head from 'next/head';

// Custom Components
import PageProgress from 'components/PageProgress';

import HomePage from '../src/Pages/HomePage';

const Home = () => {
  return (
    <Fragment>
      {/* Scroll Progress Bar */}
      <PageProgress />

      {/* SEO Meta Tags */}
      <Head>
        <title>DeepSeas Shipping</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://www.freightedge.com/" />
      </Head>

      {/* Main Page Content */}
      <main className="content-wrapper overflow-x-hidden">

    <HomePage />
      </main>
    </Fragment>
  );
};

export default Home;
