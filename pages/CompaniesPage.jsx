import Image from 'next/image';
import { Button } from 'react-bootstrap';

const CompaniesPage = () => {
  // Example company data
  const companies = [
    {
      name: "SCOPEGATE LTD",
      logo: "/img/Scopegate.png",
      description: "Is an oil and gas company.has been in operations since 2013. Scopegate ltd was appointed Dangote Petroleum refinery and Petrochemicals company FZE Distributor in 2024.",
    },
    {
      name: "GANDSE",
      logo: "/img/gandse.jpg",
      description: "Experts in Oil and gas distribution and supply chain solutions.",
    },
    {
      name: "BIN-ZEL SERVICES LTD",
      logo: "/img/binzel.png",
      description: "Bin-Zel Services Limited is a wholly owned Nigerian company founded in 2013, with the purpose of providing expert services to our Indigenous and International Oil and Gas clientele, based on International standards and benchmarks.",
    },
    {
      name: "GANOJIN",
      logo: "/img/ganojin.jpg",
      description: "Ganojin International Limited is a limited liability company registered under the Companies and Allied Matters Act (CAMA), with Registration Number RC: 957848. Established as a small interrelation indigenous shipping company in seaborne transportation services and logistics based in Nigeria, West Africa continent. Officially commenced corporate operations and logistics services in Lagos State, Nigeria.",
    },
  ];

  return (
    <div className="companies-page">
      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/img/partner.jpg" // 👈 hero image
          alt="Our Partners"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1>Companies We've Worked With</h1>
          <p>
            Our extensive partnerships reflect our commitment to reliable, efficient, 
            and innovative maritime logistics solutions.
          </p>
          <Button href="/contactus" style={{ backgroundColor: '#0D314C' }} className="text-white px-3 py-1">
            Join Our Network <i className="uil uil-arrow-right ms-2" />
          </Button>
        </div>
      </div>

      {/* Companies Grid */}
      <section className="companies container">
        <div className="row">
          {companies.map((company, idx) => (
            <div key={idx} className="col-md-6 col-lg-3 company-card">
              <div className="logo-container">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={170}
                  height={120}
                  className="company-logo"
                />
              </div>
              <h3>{company.name}</h3>
              <p>{company.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .companies-page {
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
          background: rgba(13, 49, 76, 0.6);
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
          margin-top:150px;
        }

        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .companies {
          padding: 80px 15px;
        }

        .company-card {
          background: #f8f9fa;
          padding: 20px;
          margin-bottom: 30px;
          border-radius: 16px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .company-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .logo-container {
          margin-bottom: 15px;
        }

        .company-logo {
          border-radius: 50%;
          padding: 10px;
          background: #fff;
          transition: transform 0.3s;
        }

        .company-card:hover .company-logo {
          transform: scale(1.1);
        }

        .company-card h3 {
          font-size: 1.25rem;
          color: #0D314C;
          margin-bottom: 0.5rem;
        }

        .company-card p {
          font-size: 0.95rem;
          color: #333;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          .hero-content p {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            height: 50vh;
          }
        }
      `}</style>
    </div>
  );
};

export default CompaniesPage;
