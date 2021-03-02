import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "../../components/common/Layout/Container";
import ContactSection from "../../components/common/ContactSection";
import PostHeaderSection from "../../components/post/PostHeaderSection";
import PostContentSection from "../../components/post/PostContentSection";
import PostMoreSection from "../../components/post/PostMoreSection";
import { getPost, getPosts } from "../../services/blog";
import { useRouter } from "next/router";

const Post = () => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState(null);

  const router = useRouter();

  useEffect(() => {
    getPost(router.query.slug).then((post) => setPost(post));
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <Container>
      <Head>
        <title>{post ? post.title : ""}</title>
        <meta
          name="description"
          content="We are a team of passionate and creative engineers, developers, and designers that work hand in hand with our clients to build high-quality products."
        />
      </Head>
      <PostHeaderSection />
      {posts && post && (
        <>
          <PostContentSection posts={posts.posts} post={post} />
          <PostMoreSection posts={posts.posts} post={post} />
        </>
      )}
      <ContactSection />
    </Container>
  );
};

export default Post;
