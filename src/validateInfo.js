export default function validateInfo(values) {
  const errors = {};
  const permittedCharacters = /^[a-zA-Z\-' ]*$/;
  const isValid = input => { return permittedCharacters.test(input.trim()) };


  if (!values.firstName.trim()) {
    errors.firstName = "Firstname required"
  }
  if (!values.lastName.trim()) {
    errors.lastName = "lastname required"
  }
  if (!values.password1) {
    errors.password1 = "password required"
  } else if (values.password1.length < 6) {
    errors.password1 = 'Password needs to be 6 characters or more'
  }
  if (!values.password2) {
    errors.password2 = "password required"
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'passwords do not match'
  }
  return errors;
}
