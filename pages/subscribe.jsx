import { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) return;

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbwux8AC400eLL5mGh34rXVimP5uIRpp_2t4IaLuWbRtoNy6HnDH_oOQHmHxB77g8_K2/exec', { // Replace with your Web App URL
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email })
      });
      const data = await res.json();

      if (data.result === 'success') {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('Failed to submit email. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="subscribe-page">
      <Head>
        <title>Subscribe for Updates</title>
      </Head>

      {/* Hero Section */}
      <div className="hero position-relative">
        <Image
          src="/img/coming-soon-hero.webp"
          alt="Subscribe"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>
        <div className="hero-content text-center">
          <h1>Get Notified</h1>
          <p>Sign up to receive updates when the Vessel Tracker launches.</p>
        </div>
      </div>

      {/* Signup Form */}
      <div className="form-section container text-center my-5">
        {submitted && <Alert variant="success">Thank you! We'll keep you updated.</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className="d-flex justify-content-center gap-2 flex-wrap">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ maxWidth: '300px' }}
          />
          <Button type="submit" style={{ backgroundColor: '#0D314C' }}>Subscribe</Button>
        </Form>
      </div>

      <style jsx>{`
        .subscribe-page { width: 100%; overflow-x: hidden; font-family: sans-serif; }
        .hero { position: relative; height: 50vh; display: flex; align-items: center; justify-content: center; color: #fff; }
        .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(13, 49, 76, 0.6); z-index: 1; }
        .hero-content { position: relative; z-index: 2; max-width: 700px; }
        .hero-content h1 { font-size: 2.5rem; margin-bottom: 1rem; color: #fff; }
        .hero-content p { font-size: 1.2rem; margin-bottom: 1rem; color: #f0f0f0; }
        .form-section { padding: 50px 15px; }
        @media (max-width: 768px) {
          .hero { height: 40vh; }
          .hero-content h1 { font-size: 1.8rem; }
          .hero-content p { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default SubscribePage;

