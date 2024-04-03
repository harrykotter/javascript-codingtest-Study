function solution(number, limit, power) {
  let answer = 0;
  for (let j = 1; j <= number; j++) {
    let count = 1;
    for (let i = 1; i <= j / 2; i++) {
      if (j % i === 0) count++;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}
