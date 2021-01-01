exports.or = (a, b) => a | b;
exports.and = (a, b) => a & b;
//　うまい表現が見つからない
exports.not = a => {
  if (a > 0) {
    return 0
  }
  return 1;
};