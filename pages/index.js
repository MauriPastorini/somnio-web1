import React from "react";
import { Container } from "../components/Layout/Container";
import HomeHeaderSection from "../sections/home/HomeHeaderSection";
import HomeServicesSection from "../sections/home/HomeServicesSection";
import HomeWhyFlutterSection from "../sections/home/HomeWhyFlutterSection";
import HomeModalitiesSection from "../sections/home/HomeModalitiesSection";
import HomePortfolioSection from "../sections/home/HomePortfolioSection";
import HomeWhatClientSaySection from "../sections/home/HomeWhatClientSaySection";
import HomeOurBlogSection from "../sections/home/HomeOurBlogSection";
import HomeAboutUsSection from "../sections/home/HomeAboutUsSection";
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
