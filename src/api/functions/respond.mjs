export const respondSuccess = (res, statusCode, data) => {
  res.status(statusCode).json(data);
};
export const respondError = (res, statusCode, error) => {
  const errorMessage = error?.errors?.[0]?.message;
  res.status(statusCode).json({ error: errorMessage });
};