import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";
import ContactSection from "../components/common/ContactSection";
import WhyFlutterHeaderSection from "../components/why-flutter/WhyFlutterHeaderSection";
import WhyFlutterWhatIsFlutterSection from "../components/why-flutter/WhyFlutterWhatIsFlutterSection";
import WhyFlutterWhySection from "../components/why-flutter/WhyFlutterWhySection";
import WhyFlutterBrandsTrutsFlutterSection from "../components/why-flutter/WhyFlutterBrandsTrutsFlutterSection";
import WhyFlutterSomeOurProjectsSection from "../components/why-flutter/WhyFlutterSomeOurProjectsSection";

const WhyFlutter = () => (
  <Container>
    <Head>
      <title>Why Flutter</title>
      <meta
        name="description"
        content="Flutter, Google's software development kit, has changed the future of software development."
      />
    </Head>

    <WhyFlutterHeaderSection />
    <WhyFlutterWhatIsFlutterSection />
    <WhyFlutterWhySection />
    <WhyFlutterBrandsTrutsFlutterSection />
    <WhyFlutterSomeOurProjectsSection />
    <ContactSection />
  </Container>
);

export default WhyFlutter;
