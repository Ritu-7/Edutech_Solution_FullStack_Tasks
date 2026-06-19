# Task 13: Search, Filter, and Pagination Logic

An optimized backend architecture built using Node.js, Express, and MongoDB designed to handle high-volume data retrieval tasks. By processing queries server-side using pagination parameters (`limit` and `skip`), the application minimizes network payloads and eliminates memory bottlenecks.

## 🚀 Key Implementations

- **Dynamic Search:** Case-insensitive partial name matching using MongoDB `$regex` tokens.
- **Categorized Filtering:** Exact category matching to drill down into the large dataset.
- **Server-Side Pagination:** Skip-and-limit mechanics that return targeted dataset chunks alongside pagination metadata (total pages, current page, boundary flags).
- **Performance Optimization:** Field indexing on highly queried schemas to avoid heavy database collection scans.

---

## 🛠️ Tech Stack & Tools

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database Object Modeling:** Mongoose / MongoDB

---

## 🧪 Testing the API

### Endpoint Structure
```text
GET /api/items