class ErrorSingleton {
  private static singleton: ErrorSingleton;
  public error: Error;
  private constructor(err: Error) {
    this.error = err;
  }
  public static instance(err: Error): ErrorSingleton {
    return this.singleton == null
      ? (this.singleton = new ErrorSingleton(err))
      : this.singleton;
  }
}
export const chainPromiseError = (err: Error) => () =>
  Promise.reject(ErrorSingleton.instance(err));
