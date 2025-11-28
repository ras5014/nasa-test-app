export const successResponse = (
  res,
  data,
  statusCode = 200,
  message = "Request was successful"
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res,
  statusCode = 500,
  message = "An error occurred"
) => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};
