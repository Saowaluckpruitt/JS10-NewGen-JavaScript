function filterOutOdds(...nums) {
  return nums.filter((num) => num % 2 === 0);
}
console.log(filterOutOdds(4, 8, 9));
