import React from "react";
import Head from "next/head";
import { Container } from "../../components/common/Layout/Container";
import ContactSection from "../../components/common/ContactSection";
import PostHeaderSection from "../../components/post/PostHeaderSection";
import PostContentSection from "../../components/post/PostContentSection";
import { getPost, getPosts } from "../../services/blog";

const Post = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
        />
      </Head>
      <PostHeaderSection />
      <PostContentSection post={post} />
      <ContactSection />
    </Container>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export default Post;
