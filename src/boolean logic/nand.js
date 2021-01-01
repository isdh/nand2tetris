const {and, not} = require('./BooleanFunction');
const nand = (a, b) => not(and(a,b));

exports.nandOr = (a, b) => {
  return nand(nand(a, a), nand(b, b));
};
exports.nandAnd = (a, b) => {
  return nand(nand(b, b), nand(a, a));
  // return nand(
  //   nand(nand(nand(a, a), nand(a, a)), nand(b, b)),
  //   nand(nand(nand(b, b), nand(b, b)), nand(a, a))
  // );
};
exports.nandNot = (a) => {
  return nand(a, a);
  // return nand(nand(a, a), nand(a,a));
};