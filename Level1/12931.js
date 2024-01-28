function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((arr, cur) => (arr += +cur), 0);
}
