export default function validateInfo(values) {
  const errors = {};
  const permittedCharacters = /^[a-zA-Z\-' ]*$/;
  const isValidName = input => { return permittedCharacters.test(input.trim()) };
  const permittedPassword = /^(((?=.*[a-z])(?=.*[A-Z]))+((?=.*[a-z])(?=.*[0-9]))+((?=.*[A-Z])(?=.*[0-9])))+(?=.*[!@#$%^&*])(?=.{10,})/
  const isValidPassword = input => { return permittedPassword.test(input) };
  //firstName
  if (!values.firstName.trim()) {
    errors.firstName = "Firstname required"
  } else if (!isValidName(values.firstName)) {
    errors.firstName = "You have entered an invalid character. Only letters, spaces, hyphens and apostrophes are allowed."
  } else if (values.firstName.length > 24) {
    errors.firstName = "You have exceed the maximum length: 24"
  }
  //lastName
  if (!values.lastName.trim()) {
    errors.lastName = "lastname required"
  } else if (!isValidName(values.lastName)) {
    errors.lastName = "You have entered an invalid character. Only letters, spaces, hyphens and apostrophes are allowed."
  } else if (values.lastName.length > 24) {
    errors.lastName = "You have exceed the maximum length: 24"
  }
  //password1
  if (!values.password1) {
    errors.password1 = "password required"
  } /* else if (values.password1.length < 10) {
    errors.password1 = 'Password needs to be 10 characters or more'
  } */ else if (!isValidPassword(values.password1)) {
    errors.password1 = "Password must meet the following: minimum 10 characters include a lowercase, uppercase, number, and special character"
  }
  //password2
  if (!values.password2) {
    errors.password2 = "password required"
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'passwords do not match'
  }
  return errors;
}
