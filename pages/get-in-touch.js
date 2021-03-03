import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";
import GetInTouchHeaderSection from "../components/get-in-touch/GetInTouchHeaderSection";


const GetInTouch = () => (
  <Container>
    <Head>
      <title>Get in touch.</title>
      <meta
        name="description"
        content=""
      />
    </Head>
    
    <GetInTouchHeaderSection/>
  </Container>
);

export default GetInTouch;
