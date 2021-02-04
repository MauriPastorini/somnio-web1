import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";
import ServicesUxUiHeaderSection from "../components/services-uxui/ServicesUxUiHeaderSection";
import ServicesUxUiInfoSection from "../components/services-uxui/ServicesUxUiInfoSection";
import ServicesUxUiWhySection from "../components/services-uxui/ServicesUxUiWhySection";
import ServicesUxUiServicesSection from "../components/services-uxui/ServicesUxUiServicesSection";
import ServicesUxUiVitalSection from "../components/services-uxui/ServicesUxUiVitalSection";
import ContactSection from "../components/common/ContactSection";

const UxUi = () => (
  <Container>
    <Head>
      <title>UI/UX Design</title>
      <meta
        name="description"
        content="We create human-centered designs for mobile and web apps that users love to use."
      />
    </Head>

    <ServicesUxUiHeaderSection />
    <ServicesUxUiInfoSection />
    <ServicesUxUiWhySection />
    <ServicesUxUiServicesSection />
    <ServicesUxUiVitalSection />
    <ContactSection />
  </Container>
);

export default UxUi;
