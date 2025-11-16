// Core Imports
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

// Layout and Theme
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Global CSS Imports
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Dynamically import Bootstrap on the client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  // Re-initialize scrollCue animations when route changes
  useEffect(() => {
    const initScrollCue = async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400, // delay between items
        duration: 700,  // animation duration
        percentage: 0.8 // when to trigger animation
      });
      scrollCue.update();
    };
    initScrollCue();
  }, [pathname]);

  // Stop loading screen after initial mount
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {/* Global Meta Tags */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deepseas Shipping and Construction Limited</title>
        <meta name="description" content="Deepseas Shipping and Construction Limited" />

        {/* Standard Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/img/favicon/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png" />
        <link rel="shortcut icon" href="/img/favicon/favicon.ico" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />

        {/* Android / Chrome PWA Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/img/favicon/android-chrome-512x512.png" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/img/favicon/site.webmanifest" />

        {/* Optional: Safari pinned tab */}
        <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#0D314C" />

        {/* Meta for theme colors */}
        <meta name="msapplication-TileColor" content="#0D314C" />
        <meta name="theme-color" content="#0D314C" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DeepSeas Shipping and Construction Limited" />
        <meta property="og:description" content="Modern Next.js & React website template for logistics, cargo, and freight forwarding services." />
        <meta property="og:url" content="https://themixly.com/themes/freight-forwarding-react-nextjs-template/" />
        <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/07/image-3-1-scaled.jpg" />
        <meta property="og:image:secure_url" content="https://themixly.com/wp-content/uploads/2025/07/image-3-1-scaled.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FreightEdge – Next.js Template for Freight Forwarding & Logistics Companies" />
        <meta name="twitter:description" content="Modern Next.js & React website template for logistics, cargo, and freight forwarding services." />
        <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/07/image-3-1-scaled.jpg" />
      </Head>

      {/* App Layout with ThemeProvider */}
      <Layout>
        <ThemeProvider>
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
