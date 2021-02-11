import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPost(slug) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}
/* 
// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};
*/

const Post= (props) => {
  console.log(props);

  const { post } = props;

  const router = useRouter();

  return (
    <div className={styles.container}>
      <p className={styles.goback}>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </p>
      {/* <h1>{post.title}</h1> */}
      {/*    <div dangerouslySetInnerHTML={{ __html: post.html }}></div> */}
    </div>
  );
};

export default Post;
