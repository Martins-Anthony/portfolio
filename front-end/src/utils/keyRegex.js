const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isEmailValid = (email) => {
  return emailRegex.test(email)
}
