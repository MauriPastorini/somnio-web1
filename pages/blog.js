import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";

import ContactSection from "../components/common/ContactSection";
import { BlogHeaderSection } from "../components/blog/BlogHeaderSection";
import { BlogContentSection } from "../components/blog/BlogContentSection";
import { getPosts } from "../services/blog";

const Blog = ({ posts }) => (
  <Container>
    <Head>
      <title>Blog | Somnio Software</title>
      <meta
        name="description"
        content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
      />
    </Head>
    <BlogHeaderSection />
    <BlogContentSection posts={posts} />
    <ContactSection />
  </Container>
);

export const getInitialProps = async () => ({ namespacesRequired: ["common"] });

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

export default Blog;
