export default function validateInfo(values) {
  let errors = {}

  if(!values.username.trim()) {
    errors.username = "Username required"
  }

  //////////////// for username email validation
  // if(!values.email.trim()) {
  //   errors.email = "Email required"
  // } else if (!/^[A=Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = "Email address is invalid"
  // }

  if(!values.password.trim()) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be 6 or more characters'
  } 
  return errors;
}