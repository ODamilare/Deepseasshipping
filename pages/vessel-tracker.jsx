import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const VesselTrackerComingSoon = () => {
    const router = useRouter();
  return (
    <div className="coming-soon-page">
      {/* Background Hero */}
      <div className="hero">
        <Image
          src="/img/coming-soon-hero.webp" // your background image
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
          <h1>Vessel Tracker</h1>
          <p>Our vessel tracking feature is coming soon. Stay tuned!</p>
          <Button onClick={() => router.push('/subscribe')} style={{ backgroundColor: '#0D314C' }} className="text-white px-3 py-2 mt-3">
            Notify Me <i className="uil uil-envelope-alt ms-2" />
          </Button>
        </div>
      </div>

      {/* Info Section */}
      <section className="details text-center my-5">
        <h2>Why Track Vessels?</h2>
        <p>
          Quickly check vessel locations, voyage details, and ETA updates. Our
          advanced tracking system will help you manage logistics efficiently.
        </p>
      </section>

      <style jsx>{`
        .coming-soon-page { width: 100%; overflow-x: hidden; font-family: sans-serif; }
        .hero { position: relative; height: 70vh; display: flex; align-items: center; justify-content: center; color: #fff; }
        .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(13, 49, 76, 0.6); z-index: 1; }

        .hero-content { position: relative; z-index: 2; max-width: 700px; }
        .hero-content h1 { font-size: 3rem; margin-bottom: 1rem; color: #fff; }
        .hero-content p { font-size: 1.2rem; margin-bottom: 1.5rem; color: #f0f0f0; }

        /* Animated ships */
        .ships { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 1; pointer-events: none; }
        .ship { position: absolute; font-size: 2rem; }
        .ship1 { top: 20%; left: -10%; animation: sail 15s linear infinite; }
        .ship2 { top: 50%; left: -15%; animation: sail 20s linear infinite; }
        .ship3 { top: 70%; left: -20%; animation: sail 25s linear infinite; }

        @keyframes sail {
          0% { transform: translateX(0); }
          100% { transform: translateX(120vw); }
        }

        /* Info Section */
        .details h2 { font-size: 2rem; color: #0D314C; margin-bottom: 1rem; }
        .details p { font-size: 1rem; color: #333; max-width: 600px; margin: 0 auto; }

        @media (max-width: 768px) {
          .hero { height: 50vh; }
          .hero-content h1 { font-size: 2rem; }
          .hero-content p { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default VesselTrackerComingSoon;
