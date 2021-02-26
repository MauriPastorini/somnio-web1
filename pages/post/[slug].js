import React from "react";
import Head from "next/head";
import { Container } from "../../components/common/Layout/Container";
import ContactSection from "../../components/common/ContactSection";
import PostHeaderSection from "../../components/post/PostHeaderSection";
import PostContentSection from "../../components/post/PostContentSection";
import PostMoreSection from "../../components/post/PostMoreSection";
import { getPost, getPosts } from "../../services/blog";

const Post = ({ post, posts }) => {
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
      <PostContentSection posts={posts.posts} post={post} />
      <PostMoreSection posts={posts.posts} post={post}/>
      <ContactSection />
    </Container>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const posts = await getPosts();
  return {
    props: { post, posts },
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
