class ErrorSingleton {
  static instance;
  static getinstance() {
    if (!ErrorSingleton.instance) {
      ErrorSingleton.instance = new ErrorSingleton();
      return ErrorSingleton.instance;
    }
    return ErrorSingleton.instance;
  }
  error(error) {
    console.error(error);
  }
}
export const chainPromiseError = ErrorSingleton.getinstance();
