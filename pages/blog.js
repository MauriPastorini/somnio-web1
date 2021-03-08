import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "../components/common/Layout/Container";
import NProgress from "nprogress";
import ContactSection from "../components/common/ContactSection";
import { BlogHeaderSection } from "../components/blog/BlogHeaderSection";
import { BlogContentSection } from "../components/blog/BlogContentSection";
import { getPosts, getTags } from "../services/blog";

const Blog = () => {
  const [tags, setTags] = useState(null);
  const [posts, setPosts] = useState(null);


  useEffect(async() => {
    NProgress.start()
    const tags = await getTags()
    const posts = await getPosts()
    setTags(tags)
    setPosts(posts)
    NProgress.done()
  }, []);

  return (
    <Container>
      <Head>
        <title>Blog | Somnio Software</title>
        <meta
          name="description"
          content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
        />
      </Head>
      <BlogHeaderSection />
      {posts && tags && <BlogContentSection posts={posts} tags={tags} />}
      <ContactSection />
    </Container>
  );
};

export const getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default Blog;
