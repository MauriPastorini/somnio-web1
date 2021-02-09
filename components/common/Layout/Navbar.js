import React, { useEffect, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";
import { useRouter } from "next/router";
import styles from '../../../styles/modules/common/layout/Navbar.module.scss'

const CustomLink = ({ href, children, scrolled }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} nav-link-active`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

const CustomDropdownLink = ({ href, children, scrolled }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (
    router.pathname === "/services-modalities" ||
    router.pathname === "/mobile-app-development" ||
    router.pathname === "/web-development" ||
    router.pathname === "/ux-ui"
  ) {
    className = `${className} nav-link-active`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

const Navbar = ({ t }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const logo = `./assets/images/common/${scrolled ? "logo-2" : "logo"}.png`;
  const NavStyle = `${scrolled ? "nav-scrolled" : ""} navbar navbar-expand-lg`;
  const NavLinkStyle = `${scrolled ? "nav-link-scrolled" : "nav-link-unscrolled"} nav-link`;
  const NavLinkDropDownStyle = `${scrolled ? "nav-link-scrolled" : "nav-link-unscrolled"} nav-link dropdown-toggle`;
  const SubMenuStyle = { backgroundColor: `${scrolled ? "#29218c" : "#fff"}` };
  const SubMenuItemStyle = { color: `${scrolled ? "#fff" : "#29218c"}` };
  const ButtonStyle = `${scrolled ? "btn-outline-navbar-scrolled" : "btn-outline-navbar"} btn`;

  return (
    <nav className={NavStyle}>
      <div className="container custom-container">
        <Link className="navbar-brand" href="/">
          <img className="somnio-logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink scrolled={scrolled} href="/about-us">
                <a className={NavLinkStyle}>{t("common.navbar.about_us")}</a>
              </CustomLink>
            </li>
            <li className="nav-item nav-item-dropable">
              <CustomDropdownLink scrolled={scrolled} href="/services-modalities">
                <a className={NavLinkDropDownStyle}>{t("common.navbar.services")}</a>
              </CustomDropdownLink>
              <ul className="nav__submenu" style={SubMenuStyle}>
                <li className={`nav__submenu-item triangle ${scrolled ? 'triangle-scrolled' : ''}`}>
                  <Link href="/mobile-app-development">
                    <a className="nav__submenu-link" style={SubMenuItemStyle}>
                      {t("common.navbar.services_mobile")}
                    </a>
                  </Link>
                </li>
                <li className="nav__submenu-item">
                  <Link href="/web-development">
                    <a className="nav__submenu-link" style={SubMenuItemStyle}>
                      {t("common.navbar.services_web")}
                    </a>
                  </Link>
                </li>
                <li className="nav__submenu-item">
                  <Link href="/ux-ui">
                    <a className="nav__submenu-link" style={SubMenuItemStyle}>
                      {t("common.navbar.services_uxui")}
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <CustomLink scrolled={scrolled} href="/why-flutter">
                <a className={NavLinkStyle}>{t("common.navbar.why_flutter")}</a>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink scrolled={scrolled} href="/our-work">
                <a className={NavLinkStyle}>{t("common.navbar.our_work")}</a>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink scrolled={scrolled} href="/faq">
                <a className={NavLinkStyle}>{t("common.navbar.faq")}</a>
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink scrolled={scrolled} href="/blog">
                <a className={NavLinkStyle}>{t("common.navbar.blog")}</a>
              </CustomLink>
            </li>
          </ul>
        </div>
        <Link href="/get-in-touch">
          <a type="button" className={ButtonStyle}>
            {t("common.navbar.button")}
          </a>
          {/* <button className={ButtonStyle}>{t("common.navbar.button")}</button> */}
        </Link>
      </div>
    </nav>
  );
};

Navbar.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Navbar);
