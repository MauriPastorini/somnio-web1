import React from "react";
import { Container } from "../components/Layout/Container";
import ServicesUxUiHeaderSection from "../sections/services-uxui/ServicesUxUiHeaderSection";
import ServicesUxUiInfoSection from "../sections/services-uxui/ServicesUxUiInfoSection";
import ServicesUxUiWhySection from "../sections/services-uxui/ServicesUxUiWhySection";
import ServicesUxUiServicesSection from "../sections/services-uxui/ServicesUxUiServicesSection";
import ServicesUxUiVitalSection from "../sections/services-uxui/ServicesUxUiVitalSection";
import ContactSection from "../components/Sections/ContactSection";

const UxUi = () => (
  <Container>
    <ServicesUxUiHeaderSection />
    <ServicesUxUiInfoSection />
    <ServicesUxUiWhySection />
    <ServicesUxUiServicesSection />
    <ServicesUxUiVitalSection />
    <ContactSection/>
  </Container>
);

export default UxUi;



