import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const VesselTrackerComingSoon = () => {

  const [shipName, setShipName] = useState("");
  const [imo, setImo] = useState("");
  const [trackerUrl, setTrackerUrl] = useState("");

  const trackShip = () => {
    if(!shipName || !imo){
      alert("Please enter vessel name and IMO number");
      return;
    }

    const formattedName = shipName.toUpperCase().replaceAll(" ", "-");
    const url = `https://www.vesselfinder.com/vessels/${formattedName}-IMO-${imo}`;
    setTrackerUrl(url);
  };

  return (
    <div className="coming-soon-page">

      {/* Background Hero */}
      <div className="hero">
        <Image
          src="/img/coming-soon-hero.webp"
          alt="Coming Soon"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        <div className="overlay"></div>

        {/* Animated Ships */}
        <div className="ships">
          <div className="ship ship1">⛴️</div>
          <div className="ship ship2">🚢</div>
          <div className="ship ship3">🛳️</div>
        </div>

        <div className="hero-content container text-center">
          <h1>Track a Vessel</h1>
          <p>Enter vessel name and IMO number to view its location.</p>

          <div className="search-box">

            <Form.Control
              placeholder="Vessel Name"
              className="mb-2"
              value={shipName}
              onChange={(e)=>setShipName(e.target.value)}
            />

            <Form.Control
              placeholder="IMO Number"
              className="mb-3"
              value={imo}
              onChange={(e)=>setImo(e.target.value)}
            />

            <Button
              onClick={trackShip}
              style={{ backgroundColor: '#0D314C' }}
              className="text-white px-3 py-2"
            >
              Track Vessel
            </Button>

          </div>
        </div>
      </div>

      {/* Vessel Map */}
      {trackerUrl && (
        <div className="tracker container my-5">
          <iframe
            src={trackerUrl}
            width="100%"
            height="600"
            
            style={{ border: "none", borderRadius: "10px" }}
          ></iframe>
        </div>
      )}

      <style jsx>{`
        .coming-soon-page { 
          width: 100%; 
          overflow-x: hidden; 
          font-family: sans-serif; 
        }

        /* Hero section */
        .hero {
          position: relative;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          padding-top: 80px; /* space for navbar */
          margin-bottom: 100px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(13,49,76,0.6);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 500px;
        }

        .hero-content h1 {
         
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: 1.0rem;
        }

        .search-box {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          backdrop-filter: blur(5px);
          margin-top:-1px;
        }

        /* Ships animation */
        .ships {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
        }

        .ship { position: absolute; font-size: 2rem; }

        .ship1 { top:20%; left:-10%; animation:sail 15s linear infinite; }
        .ship2 { top:50%; left:-15%; animation:sail 20s linear infinite; }
        .ship3 { top:70%; left:-20%; animation:sail 25s linear infinite; }

        @keyframes sail {
          0% { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }

        /* Responsive adjustments */
        @media (max-width: 992px){
          .hero-content h1 { font-size: 2.5rem; }
          .hero-content p { font-size: 1rem; }
          .search-box { padding: 15px; }
        }

        @media (max-width: 768px){
          .hero {
            height: 60vh;
            padding-top: 150px; /* more space for mobile navbar */
          }
          .hero-content h1 { font-size: 2rem; }
          .hero-content p { font-size: 0.9rem; }
          .search-box { padding: 10px; }
        }

        @media (max-width: 480px){
          .hero {
            height: 50vh;
            padding-top: 120px; 
          }
          .hero-content h1 { font-size: 1.6rem; }
          .hero-content p { font-size: 0.8rem; }
          .search-box { padding: 8px; }
          .search-box input { font-size: 0.9rem; }
          .search-box button { font-size: 0.9rem; padding: 6px 12px; }
        }
      `}</style>
    </div>
  );
};

export default VesselTrackerComingSoon;