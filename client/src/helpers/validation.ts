/**
 * validate email address
 * @param email the email string
 */
export function validateEmail(email: string): Boolean {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

/**
 *
 * @param password the password
 */
export function validatePassword(password: string): Boolean {
  return password.length > 6
}
