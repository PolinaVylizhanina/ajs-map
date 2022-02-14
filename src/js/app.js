export default class ErrorRepository {
  constructor() {
    this.errors = new Map(
      [
        [1, 'Enter the correct email'],
        [2, 'Password must contain numbers 1-9'],
        [3, 'Select the payment type'],
      ],
    );
  }

  translate(code) {
    const error = this.errors.get(code);
    if (!error) {
      return 'Unknown error';
    }
    return error;
  }
}
