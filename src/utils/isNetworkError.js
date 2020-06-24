export const isNetworkError = err => {
  return !!err.isAxiosError && !err.response;
};