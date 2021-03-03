import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";

import ContactSection from "../components/common/ContactSection";
import OurWorkHeaderSection from "../components/our-work/OurWorkHeaderSection";
import { OurWorkContentSection } from "../components/our-work/OurWorkContentSection";

const OurWork = () => (
  <Container>
    <Head>
      <title>Our work | Somnio Software</title>
      <meta
        name="description"
        content=""
      />
    </Head>
    
    <OurWorkHeaderSection />
    <OurWorkContentSection />
    <ContactSection />
  </Container>
);

export default OurWork;
