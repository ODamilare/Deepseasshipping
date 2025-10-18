import { useState } from 'react';
import Image from 'next/image';
import { Card, Modal, Button } from 'react-bootstrap';

const teamMembers = [
  {
    name: 'Olabode J. Oluwashanu',
    role: 'Managing Director',
    photo: '/img/team/john.jpg',
    bio: 'Over 15 years of experience in maritime logistics, shipping operations, and fleet management.',
    more: `Olabode oversees strategic direction, partnerships, and operations, ensuring Deep Sea Shipping maintains industry-leading standards in Africa.`,
  },
  {
    name: 'Adetola Oluwashanu',
    role: 'Operations Manager',
    photo: '/img/Adetola.jpg',
    bio: 'Expert in cargo handling, customer relationships, and port coordination.',
    more: `Adetola manages day-to-day port operations and leads initiatives that improve efficiency and customer satisfaction.`,
  },
  {
    name: 'Michael Lee',
    role: 'Finance & Compliance',
    photo: '/img/team/michael.jpg',
    bio: 'Handles financial oversight, compliance, and ensures smooth day-to-day operations.',
    more: `Michael is responsible for financial planning, risk assessment, and regulatory compliance across all company operations.`,
  },
  // add more team members here
];

const OurTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShow = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <div className="team-page">
      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/img/hero-bg.webp"
          alt="Our Team"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="overlay"></div>

        <div className="hero-content container text-center">
          <h1>Our Team</h1>
          <p>
            Meet the professionals behind DeepSeas Shipping. Our team combines experience,
            dedication, and innovation to deliver excellent service.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <section className="team-section container my-5">
        <div className="row">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <Card
                className="h-100 shadow-sm text-center team-card"
                onClick={() => handleShow(member)}
              >
                <div className="team-photo">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={150}
                    height={170}
                    className="rounded-circle"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="mb-1" style={{ color: '#0D314C' }}>
                    {member.name}
                  </Card.Title>
                  <Card.Subtitle className="text-muted mb-3">{member.role}</Card.Subtitle>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        {selectedMember && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMember.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <Image
                src={selectedMember.photo}
                alt={selectedMember.name}
                width={120}
                height={130}
                className="rounded-circle mb-3"
              />
              <h5 style={{ color: '#0D314C' }}>{selectedMember.role}</h5>
              <p className="mt-3">{selectedMember.more || selectedMember.bio}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{ backgroundColor: '#0D314C' }}
              >
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <style jsx>{`
        .team-page {
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
          padding-top: 5rem;
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
        .team-photo {
          padding-top: 1.5rem;
        }
        .team-card {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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

export default OurTeam;

