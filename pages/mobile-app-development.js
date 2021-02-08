import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";
import ContactSection from "../components/common/ContactSection";
import ServicesMobileHeaderSection from "../components/services-mobile/ServicesMobileHeaderSection";
import ServicesMobileInfoSection from "../components/services-mobile/ServicesMobileInfoSection";
import ServicesMobileCoveredSection from "../components/services-mobile/ServicesMobileCoveredSection";
import ServicesMobileFlutterChangeGameSection from "../components/services-mobile/ServicesMobileFlutterChangeGameSection";
import ServicesMobiletechnologiesSection from "../components/services-mobile/ServicesMobiletechnologiesSection";
import ServicesMobileOurKnowledgeSection from "../components/services-mobile/ServicesMobileOurKnowledgeSection";
import ServicesMobileSomeAppsSection from "../components/services-mobile/ServicesMobileSomeAppsSection";

const MobileDevelopment = () => (
  <Container>
        <Head>
      <title>Working Modalities</title>
      <meta
        name="description"
        content="We work with agile methodologies and human-centered approaches to successfully meet our client's needs."
      />
    </Head>

    <ServicesMobileHeaderSection />
    <ServicesMobileInfoSection />
    <ServicesMobileCoveredSection />
    <ServicesMobileFlutterChangeGameSection />
    <ServicesMobiletechnologiesSection />
    <ServicesMobileOurKnowledgeSection />
    <ServicesMobileSomeAppsSection />
    <ContactSection />
  </Container>
);

export default MobileDevelopment;



