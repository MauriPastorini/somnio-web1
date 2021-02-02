import styles from "../styles/Home.module.scss";
import Link from "next/link";

const { BLOG_URL, CONTENT_API_KEY } = process.env

type Post = {
  title: string;
  slug: string;
};

/* async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
  ).then((res) => res.json());

  console.log(res);
  const { posts } = res;
  
  return posts;
}
 */
/* export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}; */

const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts = [] } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Somnio Software Blog!</a>
        </h1>
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
      </main>
    </div>
  );
};

export default Blog;
