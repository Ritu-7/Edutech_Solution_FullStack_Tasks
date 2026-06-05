np,# Task6 - REST API Dashboard

A lightweight front-end demo for consuming a REST API using both `fetch` and `axios`.

## Features

- Displays the latest posts from JSONPlaceholder
- Creates a new post using the API
- Shows loading and error states
- Uses an ES module import from `api.js`
- Easily switch between `FetchAPI` and `AxiosAPI`

## Files

- `index.html` - page markup and UI logic
- `api.js` - API utility module with `FetchAPI` and `AxiosAPI`
- `image.png` - related screenshot or project image

## How to run

1. Open `Task6/index.html` in a browser.
2. The dashboard will automatically fetch and show the latest posts.
3. Use the form to submit a new post.

## Configuration

The project uses JSONPlaceholder as a mock API:

- GET posts: `https://jsonplaceholder.typicode.com/posts?_limit=5`
- POST post: `https://jsonplaceholder.typicode.com/posts`

## Switching API mode

In `index.html`, change the line:

```js
const API = AxiosAPI;
```

to:

```js
const API = FetchAPI;
```

then reload the page.

## Notes

- Axios is loaded from a CDN in `index.html` via `https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`.
- The created posts are shown in the UI locally, but JSONPlaceholder does not persist new data permanently.
