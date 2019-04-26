class ErrorSingleton {
  static instance;

  staticgetinstance() {
    if (!ErrorSingleton.instance) {
      ErrorSingleton.instance = newErrorSingleton();

      return ErrorSingleton.instance;
    }

    return ErrorSingleton.instance;
  }

  error(error) {
    alert(error);
  }
}
constchainPromiseError = ErrorSingleton.getinstance();
