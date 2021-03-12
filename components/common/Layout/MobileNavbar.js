import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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

const MobileNavbar = ({ t }) => {
  const navRef = useRef();

  const handleClose = (e) => {
    e.preventDefault();
    navRef.current.style.height = "0%";
  };

  const handleOpen = (e) => {
    e.preventDefault();
    navRef.current.style.height = "100%";
  };

  return (
    <>
      <nav className="navbar">
        <div className="center-content">
          <Link className="navbar-brand" href="/">
            <img className="somnio-logo" src="/assets/images/common/logo.png" alt="" />
          </Link>
          <a className="btn-mobile" onClick={handleOpen}>
            <img src="/assets/images/common/bg_menu_mobile.svg" />
          </a>
        </div>
      </nav>

      <div ref={navRef} className="overlay">
        <a className="closebtn" onClick={handleClose}>
          &times;
        </a>

        <div className="overlay-content">
          <CustomLink href="/">
            <a>Home</a>
          </CustomLink>

          <CustomLink href="/about-us">
            <a>{t("common.navbar.about_us")}</a>
          </CustomLink>

          <CustomLink href="/services/working-modalities">
            <a>Working Modalities</a>
          </CustomLink>

          <CustomLink href="/services/mobile-app-development">
            <a>{t("common.navbar.services_mobile")}</a>
          </CustomLink>

          <CustomLink href="/services/web-development">
            <a>{t("common.navbar.services_web")}</a>
          </CustomLink>

          <CustomLink href="/services/ux-ui">
            <a>{t("common.navbar.services_uxui")}</a>
          </CustomLink>

          <CustomLink href="/why-flutter">
            <a>{t("common.navbar.why_flutter")}</a>
          </CustomLink>

          <CustomLink href="/our-work">
            <a>{t("common.navbar.our_work")}</a>
          </CustomLink>

          <CustomLink href="/faq">
            <a>{t("common.navbar.faq")}</a>
          </CustomLink>

          <CustomLink href="/blog">
            <a>{t("common.navbar.blog")}</a>
          </CustomLink>

          <CustomLink href="/get-in-touch">
            <a type="button" className="btn btn-outline-navbar">
              {t("common.navbar.button")}
            </a>
          </CustomLink>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
          height: 140px;
          padding: 0;
        }

        .somnio-logo {
          max-width: 139px;
          height: auto;
          cursor: pointer;
        }

        .center-content {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: 37px;
          margin-right: 37px;
          position: relative;
        }

        .btn-mobile {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          position: absolute;
          right: 0;
          background: rgba(73,58,175,0.5);
          font-size: 0;
          border-radius: 25px;
          cursor: pointer;
        }

        .closed {
          display: none !important;
        }

        .nav-link-active {
          font-weight: bold;
        }

        .overlay {
          height: 0%;
          width: 100%;
          position: fixed;
          z-index: 10;
          left: 0;
          top: 0;
          background: transparent linear-gradient(119deg, #1e6ac5 0%, #29218c 100%) 0% 0% no-repeat padding-box;
          overflow-x: hidden;
          transition: 0.5s;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .overlay-content {
          position: relative;
          // top: 10%;
          width: 100%;
          text-align: center;
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .overlay a {
          padding: 8px;
          text-decoration: none;
          font-size: 20px;
          color: #fff;
          display: block;
          transition: 0.3s;
        }

        .overlay a:hover,
        .overlay a:focus {
          color: #f1f1f1;
        }

        .overlay .closebtn {
          position: absolute;
          top: 20px;
          right: 35px;
          font-size: 60px;
          cursor: pointer;
        }

        .overlay .btn-outline-navbar {
          border: 2px solid #ffffff;
          border-radius: 43px;
          width: 219px;
          font-size: 20px;
          color: #ffffff;
          padding: 15px 43px;
          font-weight: 500;
          margin-top: 10px;
          
          &:hover {
            background-color: #ffffff !important;
            color: #003ba8;
          }
        }
      `}</style>
    </>
  );
};

MobileNavbar.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

MobileNavbar.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(MobileNavbar);
