import Image from 'next/image';
import { Button } from 'react-bootstrap';

const SalesPurchasePage = () => {
  return (
    <div className="service-page">
      <div className="hero">
        <Image
          src="/img/sales-hero.webp"
          alt="Sales & Purchase of Ships"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1>Sales & Purchase of Ships</h1>
          <p>
            We facilitate smooth buying and selling of vessels, offering expert guidance
            at every stage of the transaction.
          </p>
          <Button style={{ backgroundColor: '#0D314C' }} className="text-white px-3 py-1">
            Learn More <i className="uil uil-arrow-right ms-2" />
          </Button>
        </div>
      </div>

      <section className="details container">
        <div className="row">
          <div className="col-md-6 text-section">
            <h2>Our Ship Sales Expertise</h2>
            <p>
              From valuation and inspection to negotiation and ownership transfer, we
              provide end-to-end support for buying or selling ships. Our expertise
              ensures transparent, efficient transactions.
            </p>
            <p>
              We work with private owners, companies, and brokers to maximize value and
              minimize risks.
            </p>
          </div>
          <div className="col-md-6 image-section">
            <Image
              src="/img/sales-inner.webp"
              alt="Ship Sales Operations"
              width={600}
              height={400}
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-page { width: 100%; overflow-x: hidden; }
        .hero { position: relative; height: 70vh; display: flex; align-items: center; justify-content: center; color: #fff; }
        .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(13, 49, 76, 0.5); z-index: 1; }
        .hero-content { position: relative; z-index: 2; text-align: center; max-width: 800px; }
        .hero-content h1 { font-size: 3rem; margin-bottom: 1rem; color: #fff; }
        .hero-content p { font-size: 1.1rem; margin-bottom: 1.5rem; }
        .details { padding: 80px 15px; }
        .text-section h2 { font-size: 2rem; color: #0D314C; margin-bottom: 1rem; }
        .text-section p { font-size: 1rem; color: #333; line-height: 1.6; }
        .image-section { display: flex; align-items: center; justify-content: center; margin-top: 30px; }
        .rounded-image { border-radius: 16px; width: 100%; height: auto; }
        @media (max-width: 768px) {
          .hero { height: 50vh; }
          .hero-content h1 { font-size: 2rem; }
          .details { padding: 40px 15px; }
        }
      `}</style>
    </div>
  );
};

export default SalesPurchasePage;
