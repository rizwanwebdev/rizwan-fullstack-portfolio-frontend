const BASE_URL = "http://localhost:5000";

export const fetchBlogs = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/api/blogs?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await res.json();
  return data;
};

export const fetchBlogBySlug = async (slug) => {
  if (!slug) return null;

  const res = await fetch(`${BASE_URL}/api/blogs/${slug}`);
  if (!res.ok) {
    throw new Error("Blog not found");
  }
  const data = await res.json();
  return data;
};
export const searchBlog = async (query) => {
  if (!query?.trim()) return { blogs: [] };

  const res = await fetch(
    `${BASE_URL}/api/blogs/search?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Search failed");
  return res.json();
};

export const fetchGithub = async () => {
  const res = await fetch("https://api.github.com/users/rizwanwebdev/repos");
  if (!res.ok) {
    throw new Error("Error With GitHub");
  }
  return res.json();
};
