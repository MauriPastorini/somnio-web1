import React from "react";
import { Container } from "../components/Layout/Container";
import ContactSection from "../components/Sections/ContactSection";
import WhyFlutterHeaderSection from "../sections/why-flutter/WhyFlutterHeaderSection";
import WhyFlutterWhatIsFlutterSection from "../sections/why-flutter/WhyFlutterWhatIsFlutterSection";
import WhyFlutterWhySection from "../sections/why-flutter/WhyFlutterWhySection";
import WhyFlutterBrandsTrutsFlutterSection from "../sections/why-flutter/WhyFlutterBrandsTrutsFlutterSection";
import WhyFlutterSomeOurProjectsSection from "../sections/why-flutter/WhyFlutterSomeOurProjectsSection";

const WhyFlutter = () => (
  <Container>
    <WhyFlutterHeaderSection />
    <WhyFlutterWhatIsFlutterSection />
    <WhyFlutterWhySection />
    <WhyFlutterBrandsTrutsFlutterSection />
    <WhyFlutterSomeOurProjectsSection />
    <ContactSection />
  </Container>
);

export default WhyFlutter;
