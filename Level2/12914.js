function Factorial(num) {
  if (num === 0) return 1;
  let fac = 1;
  for (let j = 1; j <= num; j++) {
    fac *= j;
  }
  return fac;
}

function combinationWithRepetition(n, r) {
  return Factorial(n + r - 1) / (Factorial(r) * Factorial(n - 1));
}

function solution(n) {
  var answer = 0;
  let Double = Math.floor(n / 2);
  let i = 0;
  while (i <= Double) {
    answer += combinationWithRepetition(n - i, i);
    i++;
  }
  return answer;
}

// i는 2칸의 갯수
// n-2*i는 1칸의 갯수
// (n-i)개 중 i개의 아이템을 선택하는 조합임
// n-i C i
//n-i C i => (n-i)! / (i)! * (n-2i)!
//생각해보니 자스는 팩토리얼이 없던기

//엉 피보나치 수열이 훨 빨라~

function fibonacci(n) {
  let prev = 0;
  let curr = 1;
  for (let i = 0; i < n; i++) {
    [prev, curr] = [curr % 1234567, (prev + curr) % 1234567];
  }
  return curr;
}
