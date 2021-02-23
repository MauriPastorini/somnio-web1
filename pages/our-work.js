import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";

import ContactSection from "../components/common/ContactSection";
import OurWorkHeaderSection from "../components/our-work/OurWorkHeaderSection";
import { OurWorkContentSection } from "../components/our-work/OurWorkContentSection";

const OurWork = () => (
  <Container>
    <Head>
      <title>About us | Somnio Software</title>
      <meta
        name="description"
        content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
      />
    </Head>

    <OurWorkHeaderSection />
    <OurWorkContentSection />

    <ContactSection />
  </Container>
);

export default OurWork;
