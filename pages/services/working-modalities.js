import React from "react";
import Head from "next/head";
import { Container } from "../../components/common/Layout/Container";
import ServiceHeaderSection from "../../components/services/ServiceHeaderSection";
import ServicesAgencySaySection from "../../components/services/ServicesAgencySaySection";
import ServicesProcessSection from "../../components/services/ServicesProcessSection";
import ServiceWorkingToolsSection from "../../components/services/ServiceWorkingToolsSection";
import ContactSection from "../../components/common/ContactSection";

const AboutUs = () => (
  <Container>
    <Head>
      <title>Working Modalities | This is how we achieve top results in Somnio Software</title>
      <meta
        name="description"
        content="We work with agile methodologies and human-centered approaches to successfully meet our client's needs."
      />
    </Head>

    <ServiceHeaderSection />
    <ServicesAgencySaySection />
    <ServicesProcessSection />
    <ServiceWorkingToolsSection />
    <ContactSection />
  </Container>
);

export default AboutUs;
