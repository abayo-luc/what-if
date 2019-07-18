export default (errors = []) => {
  const error = {};
  errors.forEach(element => {
    error[element.path] = element.message;
  });
  return error;
};
