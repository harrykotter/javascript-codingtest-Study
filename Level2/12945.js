function solution(n) {
  let prevNum = 0;
  let num = 1;

  for (i = 1; i < n; i++) {
    let numBefore = prevNum % 1234567;
    prevNum = num % 1234567;
    num = (num % 1234567) + numBefore;
  }
  return num % 1234567;
}
