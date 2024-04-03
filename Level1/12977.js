function divisorNum(num) {
  let count = 0;
  for (let y = 1; y <= num; y++) {
    if (num % y === 0) count++;
  }
  return count;
}

function solution1(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    console.log(i);
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (divisorNum(nums[i] + nums[j] + nums[k]) === 2) answer++;
      }
    }
  }
  return answer;
}
