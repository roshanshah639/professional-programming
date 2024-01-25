class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Wrong!",
    errors = [],
    stack = "",
    data = null
  ) {
    super(message);
    this.statusCode = statusCode;
    data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
