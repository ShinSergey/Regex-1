class Validator {
//   constructor(name) {
//     this.name = name;
//   }

  validateUsername(name) {
    if (/^[^\d\-_]{1, 1}[A-z\-_\d]*[^\d\-_]{1, 1}$/g.test(name)) {
      return /[^\d{3}]/.test(name);
    }
  }
}
