import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";

import ContactSection from "../components/common/ContactSection";
import FaqHeaderSection from "../components/faq/FaqHeaderSection";
import FaqContentSection from "../components/faq/FaqContentSection";

const AboutUs = () => (
  <Container>
    <Head>
      <title>About us | Somnio Software</title>
      <meta
        name="description"
        content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
      />
    </Head>
    <div className="FaqPage">
      <FaqHeaderSection />
      <FaqContentSection />
      <ContactSection />
    </div>

    <style jsx>{`
      .FaqPage {
        background-color: #3D2EA2;
        position: relative;
      }
    `}</style>
  </Container>
);

export default AboutUs;
