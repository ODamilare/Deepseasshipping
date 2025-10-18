import Image from 'next/image';
import { Button } from 'react-bootstrap'; // optional

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero section */}
      <div className="hero">
        <Image
          src="/img/about-hero.webp" // 👈 change to your image
          alt="About our company"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1>About Our Company</h1>
          <p>
            We deliver innovative maritime, oil and construction solutions
            that keep global trade moving safely and efficiently.
          </p>
          <Button style={{ backgroundColor: '#0D314C' }} className="text-white px-3 py-1">
            Contact Us <i className="uil uil-arrow-right ms-2" />
          </Button>
        </div>
      </div>

      {/* About details section */}
      <section className="details container">
        <div className="row">
          <div className="col-md-6 text-section">
            <h2>Who We Are</h2>
            <p>
              We are a diversified maritime and logistics firm with decades
              of combined experience. We specialize in vessel management,
              offshore support, marine infrastructure construction, and
              integrated trading operations.
            </p>
            <p>
              Our focus on compliance, safety and sustainability enables us to
              deliver reliable services to clients worldwide.
            </p>
          </div>
          <div className="col-md-6 image-section">
            <Image
              src="/img/about-inner.webp" // 👈 change to your image
              alt=""
              width={600}
              height={400}
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero section */
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

        /* Details section */
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

export default AboutPage;
