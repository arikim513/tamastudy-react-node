const advancedGetReusult = model => async (req, res, next) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 7;

  let query = {};
  if (req.query.cursor) {
    query['_id'] = { $lt: req.query.cursor };
  }

  let data = await model
    .find(query)
    .sort({ _id: -1, createdAt: -1 })
    .limit(limit + 1); // limit만큼만 데이터를 가져옴

  const hasNextPage = data.length > limit;

  data = hasNextPage ? data.slice(0, -1) : data;

  res.advancedGetResult = {
    success: true,
    error: null,
    total: data.length,
    pageInfo: {
      nextPageCursor: hasNextPage ? data[data.length - 1]._id : null,
      hasNextPage,
    },
    result: data,
  };

  next();
};

module.exports = advancedGetReusult;
