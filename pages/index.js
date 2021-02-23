import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";
import HomeHeaderSection from "../components/home/HomeHeaderSection";
import HomeServicesSection from "../components/home/HomeServicesSection";
import HomeWhyFlutterSection from "../components/home/HomeWhyFlutterSection";
import HomeModalitiesSection from "../components/home/HomeModalitiesSection";
import HomePortfolioSection from "../components/home/HomePortfolioSection";
import HomeWhatClientSaySection from "../components/home/HomeWhatClientSaySection";
import HomeOurBlogSection from "../components/home/HomeOurBlogSection";
import HomeAboutUsSection from "../components/home/HomeAboutUsSection";
import ContactSection from "../components/common/ContactSection";

const Home = () => (
  <Container>
    <Head>
      <title>Somnio Software |​ UX/UI, Mobile & Web Development Company</title>
      <meta
        name="description"
        content="We provide consulting, design, and development services for both Mobile & Web Applications. Flutter is our top technology to build high-quality products in record time."
      />
    </Head>

    <HomeHeaderSection />
    <HomeServicesSection />
    <HomeWhyFlutterSection />
    <HomeModalitiesSection />
    <HomePortfolioSection />
    <HomeWhatClientSaySection />
    <HomeAboutUsSection />
    <HomeOurBlogSection />
    <ContactSection /> 
  </Container>
);

export default Home;
