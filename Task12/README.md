# Task 12: File Uploads & Cloud Storage Integration

A robust, production-ready Node.js and Express backend implementation that handles multipart/form-data to stream media assets directly to Cloudinary using Multer memory storage. This approach optimizes server performance by bypassing local disk reads/writes.

## 🚀 Features

- **Multipart Form Handling:** Efficiently parses incoming file streams using Multer middleware.
- **Memory Storage Streaming:** Bypasses local server storage by handling files as buffers, sending them directly to Cloudinary.
- **Strict File Validation:** Whitelists specific MIME types to ensure only valid image assets are uploaded.
- **Payload Size Control:** Implements a strict 5MB file size limit to prevent Denial of Service (DoS) risks.
- **Global Error Handling:** Clean interceptor for handling Multer errors and uploading anomalies gracefully.

---

## 🛠️ Tech Stack & Tools

- **Backend:** Node.js, Express.js
- **File Handling:** Multer
- **Cloud Storage:** Cloudinary SDK
- **Environment Management:** Dotenv

---

## 📁 Project Structure

```text
├── config/
│   └── cloudinary.js   # Multer storage configuration & Cloudinary SDK setup
├── server.js           # Express server setup and API routing
├── .env.example        # Reference file for environment variables
├── package.json        # Dependencies and project metadata
└── README.md           # Project documentation