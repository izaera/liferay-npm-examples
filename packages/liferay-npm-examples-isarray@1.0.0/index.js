var toString = {}.toString;

module.exports = function (arr) {
  out.innerHTML += 'isArray 1.0.0 called\n';
  return toString.call(arr) == '[object Array]';
};
