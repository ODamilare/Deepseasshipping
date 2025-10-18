import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { services, usefulLinks } from '../data.js';

/**
 * Renders a widget with a list of links.
 * @param {Array} list - Array of link objects { id, url, title }.
 * @param {string} title - Widget title.
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h3 className="widget-title fs-20 mb-3 fw-bold text-main text-uppercase">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ url, title, id }) => (
        <li key={id} className='d-flex'>
          <i className="uil uil-angle-right text-main" aria-hidden="true"></i>{' '}
          <NextLink href={url ? url : "#"} title={title} className='m-0'/>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-top overflow-hidden"
      style={{ backgroundImage: 'url(/img/footer-bg.png)' }}
      aria-label="Site footer"
    >
      <div className="container pt-10 pt-md-12 pb-2">
        <div className="row gx-10 justify-content-between">
          {/* Logo and About Section */}
         <div className="col-lg-4">
  <div className="widget d-flex flex-column align-items-start">
    {/* Logo and company name side by side */}
    <div className="d-flex align-items-center mb-3">
      <div className="logo-placeholder me-2">
        <Image
          src="/img/logo.webp"
          alt="Company Logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <span className="fs-24 fw-bold" style={{color: '#0D314C'}}>Deepseas Shipping</span>
    </div>

    <p className="lead mb-2 text-justify fs-18">
      Deepseas Shipping Company is a leading force in Nigeria’s maritime and energy logistics sector, recognized for its dedication to safety, excellence, and reliability. Through strategic collaborations with prominent freight, oil, and gas partners, we offer a comprehensive range of shipping and transportation solutions, including bulk and containerized freight, petroleum product movements, ship-to-ship transfers, and equipment deployment.
    </p>

    <div className="d-flex flex-column align-items-start">
      <h3 className="fs-24 mb-2">Follow Us On</h3>
      <SocialLinks className="nav social text-md-end" />
    </div>
  </div>
</div>

          {/* Useful Links Widget */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-5 mt-lg-0 d-flex justify-content-md-center">
            <Widget list={usefulLinks} title="Useful Links" />
          </div>

          {/* Services Widget */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-5 mt-lg-0 d-flex justify-content-md-center">
            <Widget list={services} title="Services" />
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4 col-lg-3 mt-5 mt-lg-0 d-flex justify-content-md-center">
            <div className="widget">
              <h3 className="widget-title fs-20 mb-3 fw-bolder text-uppercase text-main">Contact Us</h3>
              
              <div className="d-flex align-items-start mb-3">
                <i className="uil uil-location-pin-alt fs-30" aria-label="Location icon" />
                <address className="ms-2 m-0 mt-1">
                 44, Ogunlana drive Surulere Lagos, Nigeria.
                </address>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="uil uil-envelope fs-26" aria-label="Email icon" />
                <a href="mailto:info@freightedge.com" className="link-body ms-2" aria-label="Send an email">
                 deepseasshipping11@gmail.com
                info@deepseasshipping.com
                </a>
              </div>

        <div className="d-flex align-items-center">
  <i className="uil uil-phone-volume fs-26" aria-label="Phone icon" />
  <p className="mt-1 ms-2 fs-18 mb-0">
    <a
      href="https://wa.me/2348131121297" // <-- WhatsApp link
      target="_blank" // open in new tab
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      +234 813 112 1297
    </a>
    ,
    <a
      href="https://wa.me/2348052544144"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="ms-1"
    >
      +234 805 254 4144
    </a>
  </p>
</div>

            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-3" />

        {/* Footer Bottom Section */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-center text-muted">
            © {currentYear} Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
