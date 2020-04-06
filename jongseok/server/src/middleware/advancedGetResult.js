const advancedGetResult = (model) => async (req, res, next) => {
  let query;

  // req.query 복사
  const reqQuery = { ...req.query };

  // fields to exclude
  const removeFields = ['select', 'sort', 'limit', 'page'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]); // reqQuery를 지우는 행위

  // Query String 만들기
  let queryStr = JSON.stringify(reqQuery);

  // mongoose find의 인자 ($gt, $gte, etc...)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

  query = model.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort({ createdAt: -1, _id: -1 }).sort(sortBy);
  } else {
    query = query.sort({ createdAt: -1, _id: -1 });
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit + 1);

  // query 실행
  const models = await query;

  const hasNextPage = models.length > limit;

  console.log(hasNextPage);

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    if (hasNextPage) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.advancedGetResult = {
    success: true,
    error: null,
    count: models.length - 1,
    pagination: pagination,
    result: models.slice(0, limit),
  };

  next();
};

module.exports = advancedGetResult;
