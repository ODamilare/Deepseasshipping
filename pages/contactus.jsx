import { useState } from 'react';
import Image from 'next/image';
import { Button, Form, Alert } from 'react-bootstrap';

const ContactUs = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbzIGboIrMpK9RF6zuvqBw7kt9Nrh3yIx-ngM6SY9VzUweUPIUU5HUaNRj4AHnL6fYUR/exec', // 🔹 your Web App URL
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('⚠️ Something went wrong.');
      }
    } catch (err) {
      setStatus('⚠️ Network error.');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/img/hero-bg.webp"
          alt="Contact Us"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>

        <div className="hero-content container text-center">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you. Reach out for support, partnerships, or general inquiries.
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="contact-section container my-5">
        <div className="row">
          {/* Lagos Office */}
          <div className="col-md-5 mb-4">
            <h2>Head Office – Lagos</h2>
            <p>
              <i className="uil uil-map-marker me-2" /> 44, Ogunlana Drive, Surulere, Lagos, Nigeria
            </p>
            <p>
              <i className="uil uil-envelope me-2" /> deepseasshipping11@gmail.com
            </p>
            <p>
              <i className="uil uil-envelope me-2" /> info@deepseasshipping.com
            </p>
            <p>
              <i className="uil uil-phone-volume me-2" /> +234 813 112 1297
            </p>
            <p>
              <i className="uil uil-phone-volume me-2" /> +234 805 254 4144
            </p>

            {/* WhatsApp buttons */}
            <Button
              href="https://wa.me/2348131121297"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#0D314C' }}
              className="text-white px-3 py-2 mt-3 me-2"
            >
              Chat on WhatsApp (813) <i className="uil uil-whatsapp ms-2" />
            </Button>

            <Button
              href="https://wa.me/2348052544144"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#0D314C' }}
              className="text-white px-3 py-2 mt-3"
            >
              Chat on WhatsApp (805) <i className="uil uil-whatsapp ms-2" />
            </Button>

            {/* Abuja Branch */}
            <div className="mt-5">
              <h2>Branch Office – Abuja</h2>
              <p>
                <i className="uil uil-map-marker me-2" /> Suite 003, Ground Floor, Swift Plaza, Wuye
                District, FCT, Abuja
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <h2>Send Us a Message</h2>

            {status && <Alert variant="info" className="mt-2">{status}</Alert>}

            <Form className="mt-3" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ backgroundColor: '#0D314C' }}
                className="text-white px-4 py-2"
              >
                Send Message <i className="uil uil-message ms-2" />
              </Button>
            </Form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          width: 100%;
          overflow-x: hidden;
          font-family: sans-serif;
        }
        .hero {
          position: relative;
          height: 60vh;
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
          max-width: 700px;
        }
        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #fff;
        }
        .hero-content p {
          font-size: 1.2rem;
          color: #f0f0f0;
        }
        .contact-section h2 {
          color: #0D314C;
          margin-bottom: 1rem;
        }
        .contact-section p {
          font-size: 1rem;
          color: #333;
        }
        @media (max-width: 768px) {
          .hero {
            height: 40vh;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;


