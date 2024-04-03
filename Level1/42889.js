function solution(N, stages) {
  let totalSuccess = Array(N).fill([0, 0]);
  for (let level = 1; level <= N; level++) {
    let pass = 0;
    let struggling = 0;
    for (let player of stages) {
      if (player > level) {
        pass++;
      } else if (player === level) {
        struggling++;
      }
    }
    totalSuccess[level - 1] = [struggling / (pass + struggling), level];
  }
  totalSuccess.sort((a, b) => b[0] - a[0]);
  let failRate = totalSuccess.map((stage) => stage[1]);
  return failRate;
}

//시간은 개많이 걸림

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
