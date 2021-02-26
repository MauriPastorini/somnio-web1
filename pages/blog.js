import React from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";

import ContactSection from "../components/common/ContactSection";
import { BlogHeaderSection } from "../components/blog/BlogHeaderSection";
import { BlogContentSection } from "../components/blog/BlogContentSection";
import { getPosts, getTags } from "../services/blog";

const Blog = ({ posts, tags }) => (
  <Container>
    <Head>
      <title>Blog | Somnio Software</title>
      <meta
        name="description"
        content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
      />
    </Head>
    <BlogHeaderSection />
    <BlogContentSection posts={posts} tags={tags} />
    <ContactSection />
  </Container>
);

export const getInitialProps = async () => ({ namespacesRequired: ["common"] });

export const getStaticProps = async () => {
  const posts = await getPosts();
  const tags = await getTags();

  return {
    props: { posts, tags },
  };
};

export default Blog;
