// Core Imports
import { Fragment } from 'react';


// Custom Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import Facts from 'components/Facts';
import Services from 'components/Services';
import ValuesSection from 'components/ValuesSection';

const HomePage = () => {
  return (
    <Fragment>
    
      {/* Main Page Content */}
      <main className="content-wrapper overflow-x-hidden">

        {/* Hero Banner */}
        <Hero />

        {/* About Section */}
        <section className="wrapper bg-light">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Deepseas Shipping"
              para="‘DEEPSEAS SHIPPING AND
OIL SERVICES/CONSTRUCTION LTD.’"
              para2="Deepseas Shipping is a full-spectrum partner to the global maritime, oil, and gas industries. We provide safe and efficient transport of petroleum products, LNG and offshore cargo, backed by expert ship management, technical consultancy and end-to-end logistics."
              para3="Through rigorous safety standards, environmental stewardship and innovative solutions, we help clients reduce risk, optimise costs and build long-term operational resilience across international supply chains."
              imgPosition="right"
              src="/img/about.webp"
              btnTitle="Read More"
              btnUrl="#"
            />
          </div>
          <Services />
          <ValuesSection />
        </section>

        {/* Facts / Metrics Section */}
        <Facts />
      </main>
    </Fragment>
  );
};

export default HomePage;
