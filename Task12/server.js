const express = require('express');
const { upload, cloudinary } = require('./config/cloudinary');

const app = express();
app.use(express.json());

// File upload route handling 'multipart/form-data'
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    // Convert memory buffer to a base64 string for Cloudinary streaming
    const fileBase64 = req.file.buffer.toString('base64');
    const fileUri = `data:${req.file.mimetype};base64,${fileBase64}`;

    // Upload directly to Cloudinary
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: 'edutech_internship', // Optional: organizes files in a specific folder
      resource_type: 'auto'
    });

    // Return the secure URL and public ID
    res.status(200).json({
      success: true,
      message: 'File uploaded successfully!',
      secure_url: result.secure_url,
      public_id: result.public_id
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Cloudinary upload failed',
      error: error.message
    });
  }
});

// Global error handler for Multer limits/errors
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ success: false, message: `Multer Error: ${err.message}` });
  }
  if (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));