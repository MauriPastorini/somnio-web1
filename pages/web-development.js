import React from "react";
import { Container } from "../components/Layout/Container";
import ContactSection from "../components/Sections/ContactSection";
import ServicesWebHeaderSection from "../sections/services-web/ServicesWebHeaderSection";
import ServicesWebInfoSection from "../sections/services-web/ServicesWebInfoSection";
import ServicesWebCoveredSection from "../sections/services-web/ServicesWebCoveredSection";
import ServicesWebTechnologiesSection from "../sections/services-web/ServicesWebTechnologiesSection";
import ServicesWebOurKnowledgeSection from "../sections/services-web/ServicesWebOurKnowledgeSection";
import ServicesWebSomeAppsSection from "../sections/services-web/ServicesWebSomeAppsSection";

const WebDevelopment = () => (
  <Container>
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



