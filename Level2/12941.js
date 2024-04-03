function solution(A, B) {
  let sum = 0;
  let ASort = A.sort((a, b) => a - b);
  let BReverse = B.sort((a, b) => b - a);
  for (i = 0; i < A.length; i++) {
    sum += ASort[i] * BReverse[i];
  }
  return sum;
}
