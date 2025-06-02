// Utility functions for standardized API responses
const successResponse = (res, data, message = 'Success', status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res, error, message = 'Error', status = 500) => {
  return res.status(status).json({
    success: false,
    message,
    error: error instanceof Error ? error.message : error,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
