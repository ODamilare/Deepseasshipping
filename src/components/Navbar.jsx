import { Fragment, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';
import { services } from '../data.js';
import Link from 'next/link';

const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  navOtherClass = 'navbar-other d-flex d-lg-none',
  fancy = false,
  stickyBox = true,
}) => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sticky = useSticky(3);
  const navbarRef = useRef(null);
  const router = useRouter();

  const baseNavClass = 'navbar navbar-expand-lg center-nav';
  const fixedClassName =
    'navbar navbar-expand-lg center-nav navbar-clone fixed bg-white nav-darkblue';

  const handleServices = () => router.push('#');

  const headerContent = (
    <Fragment>
      {/* Brand Logo */}
      <div className="navbar-brand w-100 d-flex align-items-center">
         <NextLink
    href="/"
    className="d-flex align-items-center text-decoration-none"
    title={
      <>
        <Image
          alt="Logo | Company"
          src="/img/logo.webp"
          width={100}
          height={100}
        />
         <div
          className={`ms-2 fw-bold ${atTop ? 'text-white' : 'text-dark'}`}
          style={{ fontSize: '1.5rem', lineHeight: '1.2' }}
        >
          <div>Deepseas</div>
          <div>Shipping</div>
        </div>
      </>
    }
  />
      </div>

      {/* Offcanvas navigation for mobile */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcanvas-bg">
          <NextLink
            href="/"
            title={
              <Image alt="Logo | Company" src="/img/logo.webp" width={100} height={100} />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link m-0" />
            </li>
           <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
  <a
    className="nav-link dropdown-toggle m-0"
    href="#"
    id="aboutDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    About Us
  </a>

  <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
    <li>
      <Link href="/about" className="dropdown-item">
        Company Overview
      </Link>
    </li>
    <li>
      <Link href="/ourteam" className="dropdown-item">
        Our Team
      </Link>
    </li>
    <li>
      <Link href="/MissionVision" className="dropdown-item">
        Mission & Vision
      </Link>
    </li>
  </ul>
</li>

           <li className="nav-item dropdown" data-bs-dismiss="offcanvas">
  <a
    className="nav-link dropdown-toggle m-0"
    href="#"
    id="servicesDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Services
  </a>

  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
    <li>
      <Link href="/shipping" className="dropdown-item">
        Shipping
      </Link>
    </li>
    <li>
      <Link href="/construction" className="dropdown-item">
        Construction
      </Link>
    </li>
    <li>
      <Link href="/sales-purchase" className="dropdown-item">
        Sales & Purchase of Ships
      </Link>
    </li>
    <li>
      <Link href="/oil-gas" className="dropdown-item">
        Oil and Gas
      </Link>
    </li>
  </ul>
</li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link href="/vessel-tracker" className="nav-link m-0" >
              Vessel Tracker
                </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link href="/contactus" className="nav-link m-0" >
             Contact Us
                </Link>
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@freightedge.com"
                className="link-inverse m-0"
                href="mailto:info@freightedge.com"
              />
              <br />
              <NextLink href="tel:+919999999999" title="+91 99999 99999" className="m-0" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hamburger menu button */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && (
        <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />
      )}
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
