function solution(n) {
  let count = 1;
  for (let i = 3; i <= n; i++) {
    if (n % i === 0) {
      if (i % 2 !== 0 || (n / i) % 2 !== 0) count++;
    }
  }
  return count;
}

// 꼼수 쓰다가 걸림ㅋ
// 이거 떠올리느라 정통법 까먹음
// 1, 2를 제외한 2의 거듭제곱 형태 * 홀수면 가능해서?
