const createError = require('http-errors');

const errorResponse = (err, req, res, next) => {
  let apiError = err;

  if (!err.status) {
    apiError = createError(err);
  }

  // set locals, only providing error in development
  res.locals.message = apiError.message;
  res.locals.error = apiError;
  // res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {}

  // render the error page
  return res.status(apiError.status).json({
    success: false,
    error: apiError.message,
    data: null,
  });
};

module.exports = errorResponse;
