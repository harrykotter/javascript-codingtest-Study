function solution(brown, yellow) {
  let size = brown + yellow;
  let answer = [];
  for (let i = 3; i <= size / 2; i++) {
    if (!(size % i)) {
      if ((i - 2) * (size / i - 2) === yellow) {
        answer.push(size / i);
        answer.push(i);
        break;
      }
    }
  }

  return answer;
}
