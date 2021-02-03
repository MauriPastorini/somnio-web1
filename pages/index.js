import React from "react";
import { Container } from "../components/Layout/Container";
import HomeHeaderSection from "../sections/HomeHeaderSection";
import HomeServicesSection from "../sections/HomeServicesSection";
import HomeWhyFlutterSection from "../sections/HomeWhyFlutterSection";
import HomeModalitiesSection from "../sections/HomeModalitiesSection";
import HomePortfolioSection from "../sections/HomePortfolioSection";
import HomeWhatClientSaySection from "../sections/HomeWhatClientSaySection";
import HomeOurBlogSection from "../sections/HomeOurBlogSection";
import HomeAboutUsSection from "../sections/HomeAboutUsSection";
import ContactSection from "../components/Sections/ContactSection";


const Home = () => (
  <Container>
    <HomeHeaderSection/>
     <HomeServicesSection />
    <HomeWhyFlutterSection />
    <HomeModalitiesSection />
    <HomePortfolioSection />
    <HomeWhatClientSaySection />
    <HomeOurBlogSection />
    <HomeAboutUsSection />
    <ContactSection />
  </Container>
);

export default Home;
