class ErrorSingleton {
  instance = err => {
    return err !== null ? (err = new ErrorSingleton(err)) : error;
  };
}
export const chainPromiseError = err => () =>
  Promise.reject(ErrorSingleton.instance(err));
