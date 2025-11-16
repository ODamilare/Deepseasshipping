import Image from 'next/image';
import { Button } from 'react-bootstrap';

const OilGasPage = () => {
  return (
    <div className="service-page">

      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/img/threesongs.jpg" // Replace with your hero image
          alt="Oil & Gas Services"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1>Oil & Gas Services</h1>
          <p>
            We provide end-to-end solutions in upstream, midstream, and downstream
            oil & gas operations, ensuring safety, efficiency, and operational excellence.
          </p>
          <Button href='/contactus' style={{ backgroundColor: '#0D314C' }} className="text-white px-3 py-1">
            Learn More <i className="uil uil-arrow-right ms-2" />
          </Button>
        </div>
      </div>

      {/* Details Section */}
      <section className="details container">
        <div className="row">

          {/* Text Column */}
          <div className="col-md-6 text-section">
            <h2>Our Expertise in Oil & Gas</h2>
            <p>
              From offshore exploration and drilling to pipeline management and refining,
              our team handles complex projects with industry-leading safety and compliance standards.
            </p>
            <p>
              We support upstream, midstream, and downstream operations, providing solutions
              that optimize production, transportation, and distribution.
            </p>
          </div>

          {/* Image Column */}
          <div className="col-md-6 image-section">
            <Image
              src="/img/70andalone.jpg" // Replace with your inner image
              alt="Oil & Gas Operations"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-image"
            />
          </div>

        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        .service-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          position: relative;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(13, 49, 76, 0.5);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        /* Details Section */
        .details {
          padding: 80px 15px;
        }

        .text-section h2 {
          font-size: 2rem;
          color: #0D314C;
          margin-bottom: 1rem;
        }

        .text-section p {
          font-size: 1rem;
          color: #333;
          line-height: 1.6;
        }

        /* Image Section */
        .image-section {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
        }

        .rounded-image {
          border-radius: 16px;
          width: 100%;
          height: auto;
        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .image-section {
            margin-top: 40px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 50vh;
            padding-top: 150px;
          }

          .hero-content {
            margin-top: 20px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 170px;
          }

          .rounded-image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default OilGasPage;
