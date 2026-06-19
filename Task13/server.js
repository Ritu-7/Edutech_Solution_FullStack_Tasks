const express = require('mongoose');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

// 1. MongoDB Connection Setup
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/edutech_task13';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully.'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 2. Define Schema & Indexing (Optimizes search queries)
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Single field index for text or partial regex matching
ItemSchema.index({ name: 1 }); 
const Item = mongoose.model('Item', ItemSchema);

// 3. Search, Filter, and Pagination API Endpoint
app.get('/api/items', async (req, res) => {
  try {
    // Destructure query variables with default fallback metrics
    const { search, category, page = 1, limit = 10 } = req.query;

    // Dynamic query builder object
    let queryFilter = {};

    // Case-insensitive regex partial search on 'name'
    if (search) {
      queryFilter.name = { $regex: search, $options: 'i' };
    }

    // Exact match filter on 'category'
    if (category) {
      queryFilter.category = category;
    }

    // Pagination calculations
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    const skipValue = (parsedPage - 1) * parsedLimit;

    // Parallel execution for optimized performance
    const [data, totalItems] = await Promise.all([
      Item.find(queryFilter)
        .sort({ createdAt: -1 }) // Sort by newest records first
        .skip(skipValue)
        .limit(parsedLimit),
      Item.countDocuments(queryFilter)
    ]);

    const totalPages = Math.ceil(totalItems / parsedLimit);

    // Structured JSON Response
    res.status(200).json({
      success: true,
      pagination: {
        totalItems,
        totalPages,
        currentPage: parsedPage,
        limit: parsedLimit,
        hasNextPage: parsedPage < totalPages,
        hasPrevPage: parsedPage > 1
      },
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error during data retrieval.',
      error: error.message
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Task 13 server active on port ${PORT}`));