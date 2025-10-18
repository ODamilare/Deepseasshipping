import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap'; // remove if you style your own button

const slides = [
  {
    image: '/img/hero-bg.webp',
    title: 'Shipping & Chartering',
    subtitle: 'Our shipping and chartering division specializes in providing comprehensive maritime logistics solutions. We manage the full scope of vessel chartering, from arranging short- and long-term charters to overseeing ship-to-ship (STS) operations for cargo transfers. In addition, we handle vessel management and operational support to ensure that every voyage is carried out efficiently, safely, and in full compliance with international maritime standards.', // 👈 new text
    button: 'Get Started'
  },
  {
    image: '/img/hero-bg2.webp',
    title: 'Oil Services',
    subtitle: 'We deliver a complete suite of oil-related services designed to streamline the movement and trading of crude oil. Our team coordinates crude oil handling and storage, offshore logistics support for rigs and platforms, and end-to-end facilitation of oil trading activities. By integrating compliance, safety, and efficiency into every stage, we help our clients optimize their operations and maintain seamless supply chains in the energy sector.',
    button: 'Learn More'
  },
  {
    image: '/img/hero-bg3.webp',
    title: 'Construction',
    subtitle: 'Our construction arm focuses on building and maintaining critical infrastructure for the marine and civil sectors. We design and execute marine infrastructure projects such as ports, jetties, and coastal structures, while also handling large-scale civil construction works and complex structural engineering projects. With a commitment to quality and innovation, we deliver durable, cost-effective solutions tailored to the unique challenges of each project.',
    button: 'Contact Us'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          className={`hero-slide ${index === current ? 'active' : ''}`}
          key={index}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={index === current}
          />
          {/* 🔹 Blue tint overlay */}
          <div className="overlay"></div>

          <div className="content container">
            <h2 className="mb-3">{slide.title}</h2>
            {/* 👇 new subtitle text */}
            <p className="subtitle mb-4">{slide.subtitle}</p>

           <Button 
  style={{ backgroundColor: '#0D314C' }}
  className="text-white px-3 py-1"
>
  {slide.button} <i className="uil uil-arrow-right ms-2" />
</Button>
          </div>
        </div>
      ))}

      <style jsx>{`
        .hero-slider {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }
        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .hero-slide.active {
          opacity: 1;
          z-index: 1;
        }
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(13, 49, 76, 0.55);
          z-index: 1;
        }
        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
          max-width: 800px;
        }
        h2 {
          font-size: 3rem;
          color: #fff;
        }
        .subtitle {
          font-size: 0.65rem;
          color: #f0f0f0;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
