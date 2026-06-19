const Item = require('../models/Item');

const getItems = async (req, res) => {
  try {
    // 1. Destructure query parameters with default fallbacks
    const { search, category, page = 1, limit = 10 } = req.query;

    // 2. Build the dynamic query filter object 
    let queryFilter = {};

    // Exact or Partial Case-Insensitive Search on Name 
    if (search) {
      queryFilter.name = { $regex: search, $options: 'i' }; 
    }

    // Category Filter 
    if (category) {
      queryFilter.category = category;
    }

    // 3. Calculate pagination mechanics 
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    const skipValue = (parsedPage - 1) * parsedLimit;

    // 4. Execute database operations concurrently for speed
    const [data, totalItems] = await Promise.all([
      Item.find(queryFilter)
        .sort({ createdAt: -1 }) // Newest first
        .skip(skipValue)
        .limit(parsedLimit),
      Item.countDocuments(queryFilter) // Count matched items only
    ]);

    const totalPages = Math.ceil(totalItems / parsedLimit);

    // 5. Send structured response [cite: 45]
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
      message: 'Server error while fetching data.',
      error: error.message
    });
  }
};

module.exports = { getItems };