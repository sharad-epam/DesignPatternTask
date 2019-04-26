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
    alert(error);
  }
}
const chainPromiseError = ErrorSingleton.getinstance();
