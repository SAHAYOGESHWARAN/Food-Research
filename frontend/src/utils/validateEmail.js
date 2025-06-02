
function validateEmail(email) {
  if (typeof email !== 'string') return false;
  // Simple email regex for validation
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}

export default validateEmail;
