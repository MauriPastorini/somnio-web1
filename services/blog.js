const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

export const getPost = async (slug) => {
  const URL = `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&include=tags,authors`;
  const res = await fetch(URL).then((res) => res.json());
  const posts = res.posts;

  return posts[0];
};

export const getPosts = async () => {
  const URL = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=tags,authors`;
  const res = await fetch(URL);
  const posts = await res.json();

  return posts;
};

export const getTags = async () => {
  const URL = `${BLOG_URL}/ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}&fields=name`;
  const res = await fetch(URL);
  const tags = await res.json();

  return tags;
};
