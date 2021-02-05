import React, { useEffect, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";
import { useRouter } from "next/router";

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
                <li className="nav__submenu-item">
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

      <style jsx>
        {`
          .navbar {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
            height: 130px;
            -webkit-transition: height 0.5s linear, background-color 0.5s linear;
            -moz-transition: height 0.5s linear, background-color 0.5s linear;
            -o-transition: height 0.5s linear, background-color 0.5s linear;
            transition: height 0.5s linear, background-color 0.5s linear;
          }

          .somnio-logo {
            max-width: 217px;
            height: auto;
            cursor: pointer;
          }

          .btn-outline-navbar {
            border: 2px solid #ffffff;
            border-radius: 43px;
            min-width: 200px;
            font-size: 20px;
            color: #ffffff;

            &:hover {
              background-color: #ffffff !important;
              color: #003ba8;
            }
          }

          .nav-item {
            margin-left: 15px;
            margin-right: 15px;
          }

          .nav-link {
            font-size: 24px;
            color: #ffffff;
          }

          .transition-nav {
            transition: all 1s ease-in;
          }

          .nav-link-active {
            font-weight: bold;
            position: relative;
          }

          .nav-link-active::before {
            display: block;
            content: "";
            width: 46px;
            height: 2px;
            background: #fff;
            position: absolute;
            bottom: 0;
            left: calc(50% - 23px);
          }

          .nav-item-dropable {
            display: inline-block;
            position: relative;

            &:hover {
              .nav__submenu {
                display: block;
              }
            }
          }

          .nav-scrolled {
            background: white;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            opacity: 0.85;
            z-index: 3;
            padding-top: 30px;
            padding-bottom: 30px;
            height: 100px !important;
            -webkit-transition: height 0.5s linear, background-color 0.5s linear;
            -moz-transition: height 0.5s linear, background-color 0.5s linear;
            -o-transition: height 0.5s linear, background-color 0.5s linear;
            transition: height 0.5s linear, background-color 0.5s linear;
          }

          .nav-link-scrolled {
            color: #003ba8;
            &:hover {
              color: #003ba891 !important;
              -webkit-transition: color 0.35s ease-in;
              -moz-transition: color 0.35s ease-in;
              -o-transition: color 0.35s ease-in;
              transition: color 0.35s ease-in;
            }
          }

          .nav-link-unscrolled {
            color: #ffffff;
            &:hover {
              color: #ffffffad !important;
              -webkit-transition: color 0.35s ease-in;
              -moz-transition: color 0.35s ease-in;
              -o-transition: color 0.35s ease-in;
              transition: color 0.35s ease-in;
            }
          }

          .btn-outline-navbar-scrolled {
            border: 2px solid #003ba8;
            border-radius: 43px;
            min-width: 200px;
            font-size: 20px;
            color: #003ba8;

            &:hover {
              background-color: #003ba8 !important;
              color: #fff;
            }
          }

          .nav__submenu {
            font-weight: 300;
            text-transform: none;
            display: none;
            position: absolute;
            width: 300px;
            padding: 0;
            border-radius: 5px;
          }

          .nav__submenu-item {
            list-style: none;
            margin: 0;
            padding: 10px 20px;

            &:hover {
              font-weight: 700;
            }

            &:nth-child(1) {
              border-bottom: 1px solid #d8d8d877;
            }

            &:nth-child(2) {
              border-bottom: 1px solid #d8d8d877;
            }
          }

          .nav__submenu-link {
            text-decoration: none;
          }
        `}
      </style>
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
