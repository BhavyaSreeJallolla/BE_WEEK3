export const errorHandler = (err, req, res, next) => {
  // Log the full error stack for debugging
  console.error(err.stack);

  // Determine the status code (default to 500 if not set)
  const statusCode = err.statusCode || 500;

  // Provide a more detailed error message in development
  const isDev = process.env.NODE_ENV === 'development';
  const errorResponse = {
    message: isDev ? err.message : 'Something went wrong!',
    ...(isDev && { stack: err.stack }), // Include stack trace only in development
  };

  // Send the error response
  res.status(statusCode).json(errorResponse);
};
