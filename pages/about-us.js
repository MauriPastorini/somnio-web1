import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";
import AboutUsHeaderSection from "../components/aboutus/AboutUsHeaderSection";
import AboutUsInfoSection from "../components/aboutus/AboutUsInfoSection";
import AboutUsHowWeWorkSection from "../components/aboutus/AboutUsHowWeWorkSection";
import AboutUsOurValuesSection from "../components/aboutus/AboutUsOurValuesSection";
import AboutUsWhyUsSection from "../components/aboutus/AboutUsWhyUsSection";
import AboutUsTeamSection from "../components/aboutus/AboutUsTeamSection";
import ContactSection from "../components/common/ContactSection";

const AboutUs = () => (
  <Container>
    <Head>
      <title>About us | Somnio Software</title>
      <meta
        name="description"
        content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
      />
    </Head>

    <AboutUsHeaderSection />
    <AboutUsInfoSection />
    <AboutUsHowWeWorkSection />
    <AboutUsOurValuesSection />
    <AboutUsWhyUsSection />
    <AboutUsTeamSection />
    <ContactSection />
  </Container>
);

AboutUs.getInitialProps = () => ({ namespacesRequired: ["common"] });

export default AboutUs;
