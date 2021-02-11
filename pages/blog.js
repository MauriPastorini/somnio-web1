import styles from "../styles/Home.module.scss";
import Link from "next/link";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
  ).then((res) => res.json());

  console.log(res);
  const { posts } = res;

  return posts;
}

/* export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}; */

const Blog = (props) => {
  const { posts = [] } = props;

  return (
    <div /* className={styles.container} */>
      <ul>
        {posts.map((post, index) => {
          return (
            <li className={styles.postitem} key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
