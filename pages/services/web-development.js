import React from "react";
import Head from "next/head";
import { Container } from "../../components/common/Layout/Container";
import ContactSection from "../../components/common/ContactSection";
import ServicesWebHeaderSection from "../../components/services-web/ServicesWebHeaderSection";
import ServicesWebInfoSection from "../../components/services-web/ServicesWebInfoSection";
import ServicesWebCoveredSection from "../../components/services-web/ServicesWebCoveredSection";
import ServicesWebTechnologiesSection from "../../components/services-web/ServicesWebTechnologiesSection";
import ServicesWebOurKnowledgeSection from "../../components/services-web/ServicesWebOurKnowledgeSection";
import ServicesWebSomeAppsSection from "../../components/services-web/ServicesWebSomeAppsSection";

const WebDevelopment = () => (
  <Container>
    <Head>
      <title>Web Development</title>
      <meta name="description" content="Successful Web Apps created in record time and with modern technologies." />
    </Head>

    <ServicesWebHeaderSection />
    <ServicesWebInfoSection />
    <ServicesWebCoveredSection />
    <ServicesWebTechnologiesSection />
    <ServicesWebOurKnowledgeSection />
    <ServicesWebSomeAppsSection />
    <ContactSection />
  </Container>
);

export default WebDevelopment;
