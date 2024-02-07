function solution(arr, divisor) {
  return arr.filter((n) => n % divisor === 0).length !== 0
    ? arr.sort((a, b) => a - b).filter((n) => n % divisor === 0)
    : [-1];
}
