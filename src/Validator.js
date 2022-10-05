class Validator {
//   constructor(name) {
//     this.name = name;
//   }

  validateUsername(name) {
    const regex = /^[^\d\-_]{1, 1}[^\d{3}][A-z\-_\0-9][^\d\-_]{1, 1}$/g;
    return regex.test(name);
  }
}
