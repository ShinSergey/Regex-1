export default class Validator {
  static validateUsername(name) {
    if (/^[a-zA-Z]{1, 1}[A-z\-_\d]*[a-zA-Z]{1, 1}$/g.test(name)) {
      return /[^\d{3}]/.test(name);
    }
    return false;
  }
}
