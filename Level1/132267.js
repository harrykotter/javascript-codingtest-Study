function repay(a, b, left) {
  if (left < a) return left;
  return Math.floor(left / a) * b + (left % a);
}

function solution(a, b, n) {
  if (n < a) return n;
  let answer = 0;
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = repay(a, b, n);
  }
  return answer;
}
