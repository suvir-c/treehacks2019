const apiServer = process.env.RADIKS_API_URL;

export const fetchBlogPost = async (id) => {
  console.log('apiServer', apiServer);
  const url = `${apiServer}/api/posts/${id}`;
  const response = await fetch(url);
  const blogPost = await response.json();
  return blogPost;
};
