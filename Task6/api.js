// Using JSONPlaceholder as our mock dataset
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Approach 1: Using native Fetch API
 */
export const FetchAPI = {
  // GET: Fetch posts
  getPosts: async () => {
    const response = await fetch(`${BASE_URL}/posts?_limit=5`);
    if (!response.ok) throw new Error(`Fetch Error: ${response.status}`);
    return await response.json();
  },

  // POST: Create a new post
  createPost: async (postData) => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error(`Fetch Error: ${response.status}`);
    return await response.json();
  }
};

/**
 * Approach 2: Using Axios (Requires: npm install axios or CDN)
 * Axios automatically handles JSON parsing and throws errors for non-2xx statuses.
 */
export const AxiosAPI = {
  // GET: Fetch posts
  getPosts: async () => {
    const response = await axios.get(`${BASE_URL}/posts?_limit=5`);
    return response.data;
  },

  // POST: Create a new post
  createPost: async (postData) => {
    const response = await axios.post(`${BASE_URL}/posts`, postData);
    return response.data;
  }
};