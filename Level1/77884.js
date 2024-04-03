function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i / 2; j++) {
      count += i % j === 0 ? 1 : 0;
    }
    sum += count % 2 === 0 ? -i : i;
  }
  return sum;
}
