import React from "react";
import { Container } from "../components/Layout/Container";
import ContactSection from "../components/Sections/ContactSection";
import ServicesMobileHeaderSection from "../sections/services-mobile/ServicesMobileHeaderSection";
import ServicesMobileInfoSection from "../sections/services-mobile/ServicesMobileInfoSection";
import ServicesMobileCoveredSection from "../sections/services-mobile/ServicesMobileCoveredSection";
import ServicesMobileFlutterChangeGameSection from "../sections/services-mobile/ServicesMobileFlutterChangeGameSection";
import ServicesMobiletechnologiesSection from "../sections/services-mobile/ServicesMobiletechnologiesSection";
import ServicesMobileOurKnowledgeSection from "../sections/services-mobile/ServicesMobileOurKnowledgeSection";
import ServicesMobileSomeAppsSection from "../sections/services-mobile/ServicesMobileSomeAppsSection";

const MobileDevelopment = () => (
  <Container>
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



