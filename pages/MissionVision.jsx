import Image from 'next/image';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <div className="mv-page">
      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/img/hero-bg.webp"
          alt="Mission & Vision"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>

        <motion.div
          className="hero-content container text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Mission & Vision</h1>
          <p>
            Discover what drives Deep Sea Shipping and our aspirations for the future.
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <section className="mv-section container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <motion.div
              className="box shadow-sm p-4 h-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-center mb-3">Our Mission</h2>
              <p>
                To provide world-class shipping and logistics solutions with efficiency,
                transparency, and dedication — ensuring our clients’ goods are transported
                safely, on time, and at competitive rates.
              </p>
            </motion.div>
          </div>
          <div className="col-md-6 mb-4">
            <motion.div
              className="box vision-box shadow-sm p-4 h-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-center mb-3">Our Vision</h2>
              <p>
                To become Africa’s most trusted maritime and logistics partner — pioneering
                innovative solutions, expanding global reach, and empowering our team to
                redefine excellence in shipping services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section container my-5">
        <h2
          className="text-center mb-4"
          style={{ color: '#0D314C' }}
        >
          Our Core Values
        </h2>
        <div className="row text-center">
          {[
            { icon: 'uil-shield-check', title: 'Integrity', text: 'We act with honesty and transparency in every transaction.' },
            { icon: 'uil-truck', title: 'Reliability', text: 'Clients can count on us for consistent and dependable service.' },
            { icon: 'uil-lightbulb-alt', title: 'Innovation', text: 'We embrace new technologies to improve efficiency and safety.' },
            { icon: 'uil-users-alt', title: 'Teamwork', text: 'We work together to achieve excellence and exceed expectations.' }
          ].map((val, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <motion.div
                className="value-card p-3 shadow-sm h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <i
                  className={`uil ${val.icon} fs-1 mb-3`}
                  style={{ color: '#0D314C' }}
                />
                <h5>{val.title}</h5>
                <p>{val.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .mv-page {
          width: 100%;
          overflow-x: hidden;
          font-family: sans-serif;
        }
        .hero {
          position: relative;
          height: 50vh;
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
        .box h2 {
          color: #0D314C;
        }
        .box p {
          color: #333;
          font-size: 1rem;
        }
        .vision-box {
          background: rgba(13, 49, 76, 0.05); /* subtle background for vision box */
          border-left: 4px solid #0D314C;
        }
        .values-section .value-card h5 {
          color: #0D314C;
          margin-top: 0.5rem;
        }
        .values-section .value-card p {
          color: #333;
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .hero {
            height: 35vh;
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

export default MissionVision;
