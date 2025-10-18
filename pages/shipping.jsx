import Image from 'next/image';
import { Button } from 'react-bootstrap';

const ShippingPage = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/img/shipping-hero.webp" // 👈 change to your hero image
          alt="Shipping Services"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1>Shipping Services</h1>
          <p>
            We provide full-scale maritime logistics solutions, from vessel chartering
            to ship-to-ship cargo transfers and complete vessel management.
          </p>
          <Button style={{ backgroundColor: '#0D314C' }} className="text-white px-3 py-1">
            Get Started <i className="uil uil-arrow-right ms-2" />
          </Button>
        </div>
      </div>

      {/* Details Section */}
      <section className="details container">
        <div className="row">
          <div className="col-md-6 text-section">
            <h2>Our Shipping Expertise</h2>
            <p>
              Our team manages all aspects of maritime logistics, ensuring cargo is handled
              safely and efficiently. We specialize in short- and long-term charters,
              ship-to-ship transfers, and complete operational support for vessels.
            </p>
            <p>
              By combining compliance, safety, and industry experience, we deliver
              seamless shipping solutions for clients around the globe.
            </p>
          </div>
          <div className="col-md-6 image-section">
            <Image
              src="/img/shipping-inner.webp" // 👈 inner image
              alt="Shipping Operations"
              width={600}
              height={400}
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-page {
          width: 100%;
          overflow-x: hidden;
        }

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

        @media (max-width: 768px) {
          .hero {
            height: 50vh;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
          .details {
            padding: 40px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ShippingPage;
