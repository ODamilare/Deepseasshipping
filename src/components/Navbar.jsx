import { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import NextLink from "components/NextLink";
import SocialLinks from "components/SocialLinks";
import Link from "next/link";

const Navbar = ({
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light",
  navOtherClass = "navbar-other d-flex d-lg-none",
}) => {
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Detect scroll for navbar and text color
  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track offcanvas open/close for hamburger animation
  useEffect(() => {
    const offcanvas = document.getElementById("offcanvas-nav");
    const handleShow = () => setMenuOpen(true);
    const handleHide = () => setMenuOpen(false);

    offcanvas?.addEventListener("show.bs.offcanvas", handleShow);
    offcanvas?.addEventListener("hide.bs.offcanvas", handleHide);

    return () => {
      offcanvas?.removeEventListener("show.bs.offcanvas", handleShow);
      offcanvas?.removeEventListener("hide.bs.offcanvas", handleHide);
    };
  }, []);

  const headerContent = (
    <Fragment>
      {/* Brand Logo */}
      <div className="navbar-brand w-100 d-flex align-items-center">
        <NextLink
          href="/"
          className="d-flex align-items-center text-decoration-none"
          title={
            <>
              <Image alt="Logo | Company" src="/img/logo.webp" width={100} height={100} />
              <div
                className="ms-2 fw-bold"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "1.2",
                  color: atTop ? "white" : "#0D314C",
                }}
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

        <div className="ms-lg-auto d-flex flex-column h-100">
          {/* Offcanvas links */}
          <ul className="navbar-nav align-items-lg-center offcanvas-nav-links d-lg-none">
            <li className="nav-item">
              <NextLink href="/" title="Home" className="nav-link m-0" data-bs-dismiss="offcanvas" />
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle m-0 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li data-bs-dismiss="offcanvas">
                  <Link href="/about" className="dropdown-item">Company Overview</Link>
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link href="/ourteam" className="dropdown-item">Our Team</Link>
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link href="/MissionVision" className="dropdown-item">Mission & Vision</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle m-0 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li data-bs-dismiss="offcanvas">
                  <Link href="/shipping" className="dropdown-item">Shipping</Link>
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link href="/construction" className="dropdown-item">Construction</Link>
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link href="/sales-purchase" className="dropdown-item">Sales & Purchase of Ships</Link>
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link href="/oil-gas" className="dropdown-item">Oil and Gas</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
               <NextLink href="/vessel-tracker" title="Vessel Tracker" className="nav-link m-0" data-bs-dismiss="offcanvas" />
            </li>
            <li className="nav-item">
               <NextLink href="/contactus" title="Contact Us" className="nav-link m-0" data-bs-dismiss="offcanvas" />
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@deepseasshipping.com" className="link-inverse m-0" href="mailto:info@deepseasshipping.com"/>
              <br />
              <NextLink href="tel:+919999999999" title=" +234 805 254 4144" className="m-0"/>
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Button */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          aria-label="Toggle navigation"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            width: "30px",
            height: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                height: "3px",
                width: "100%",
                backgroundColor: menuOpen || !atTop ? "#0D314C" : "white",
                borderRadius: "2px",
              }}
            />
          ))}
        </button>
      </div>

      {/* Desktop links */}
      <ul className="navbar-nav align-items-lg-center desktop-nav d-none d-lg-flex ms-auto">
        <li className="nav-item">
          <NextLink
            href="/"
            title="Home"
            className={`nav-link m-0 ${atTop ? "text-white" : "text-dark"}`}
          />
        </li>
        <li className="nav-item dropdown">
          <a
            className={`nav-link dropdown-toggle m-0 ${atTop ? "text-white" : "text-dark"}`}
            href="#"
            data-bs-toggle="dropdown"
          >
            About Us
          </a>
          <ul className="dropdown-menu">
            <li>
              <NextLink href="/about" title="Company Overview" className="dropdown-item" />
            </li>
            <li>
              <NextLink href="/ourteam" title="Our Team" className="dropdown-item" />
            </li>
            <li>
              <NextLink href="/MissionVision" title="Mission & Vision" className="dropdown-item" />
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className={`nav-link dropdown-toggle m-0 ${atTop ? "text-white" : "text-dark"}`}
            href="#"
            data-bs-toggle="dropdown"
          >
            Services
          </a>
          <ul className="dropdown-menu">
            <li>
              <NextLink href="/shipping" title="Shipping" className="dropdown-item" />
            </li>
            <li>
              <NextLink href="/construction" title="Construction" className="dropdown-item" />
            </li>
            <li>
              <NextLink href="/sales-purchase" title="Sales & Purchase of Ships" className="dropdown-item" />
            </li>
            <li>
              <NextLink href="/oil-gas" title="Oil and Gas" className="dropdown-item" />
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NextLink href="/vessel-tracker" title="Vessel Tracker" className={`nav-link m-0 ${atTop ? "text-white" : "text-dark"}`} />
        </li>
        <li className="nav-item">
          <NextLink href="/contactus" title="Contact Us" className={`nav-link m-0 ${atTop ? "text-white" : "text-dark"}`} />
        </li>
      </ul>
    </Fragment>
  );

  return (
    <Fragment>
      <nav
        ref={navbarRef}
        className={navClassName}
        style={{
          position: "fixed", // overlay hero
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          transition: "background-color 0.3s ease, color 0.3s ease",
          backgroundColor: atTop ? "transparent" : "#fff",
        }}
      >
        <div className="container flex-lg-row flex-nowrap align-items-center">
          {headerContent}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
