function solution(nums) {
  let newNums = [...new Set(nums)];
  return newNums.length < nums.length / 2 ? newNums.length : nums.length / 2;
}
