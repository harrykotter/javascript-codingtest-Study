function solution(n) {
  let isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  let answer = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  isPrime.forEach((element) => {
    if (element) answer++;
  });
  return answer;
}

console.log(solution(10, 4));
