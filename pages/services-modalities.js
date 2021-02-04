import React from "react";
import { Container } from "../components/Layout/Container";
import ServiceHeaderSection from "../sections/services/ServiceHeaderSection";
import ServicesAgencySaySection from "../sections/services/ServicesAgencySaySection";
import ServicesProcessSection from "../sections/services/ServicesProcessSection";
import ServiceWorkingToolsSection from "../sections/services/ServiceWorkingToolsSection";
import ContactSection from "../components/Sections/ContactSection";

const AboutUs = () => (
  <Container>
    <ServiceHeaderSection />
    <ServicesAgencySaySection />
    <ServicesProcessSection />
    <ServiceWorkingToolsSection />
    <ContactSection />
  </Container>
);

export default AboutUs;



