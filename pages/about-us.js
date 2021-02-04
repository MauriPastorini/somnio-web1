import React from "react";
import { Container } from "../components/Layout/Container";
import AboutUsHeaderSection from "../sections/aboutus/AboutUsHeaderSection";
import AboutUsInfoSection from "../sections/aboutus/AboutUsInfoSection";
import AboutUsHowWeWorkSection from "../sections/aboutus/AboutUsHowWeWorkSection";
import AboutUsOurValuesSection from "../sections/aboutus/AboutUsOurValuesSection";
import AboutUsWhyUsSection from "../sections/aboutus/AboutUsWhyUsSection";
import AboutUsTeamSection from "../sections/aboutus/AboutUsTeamSection";
import ContactSection from "../components/Sections/ContactSection";


const AboutUs = () => (
  <Container>
    <AboutUsHeaderSection />
    <AboutUsInfoSection />
    <AboutUsHowWeWorkSection />
    <AboutUsOurValuesSection />
    <AboutUsWhyUsSection />
    <AboutUsTeamSection />
    <ContactSection />
  </Container>
);

export default AboutUs;
