// const mul = (...nums) => {
//   let result = 1;
//   for (let num of nums) result *= num;
//   return result;
// };
// console.log(mul(2, 3));

function mul(...nums) {
  let result = 1;
  for (let num of nums) result *= num;
  return result;
}

console.log(mul(2, 3));
