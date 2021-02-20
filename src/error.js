/**
 * Returns an {Error} object with response and status
 *
 * @param {*} code
 * @param {*} message
 */
const buildError = (code, message) => {
  const error = new Error(message);
  const status = {
    code,
    message,
  };
  error.response = {
    status,
  };
  return error;
};

module.exports = buildError;
