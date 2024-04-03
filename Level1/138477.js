function solution(k, score) {
  const results = [];
  const answer = [];
  for (let point of score) {
    results.push(point);
    results.sort((a, b) => b - a);
    if (results.length <= k) answer.push(results[results.length - 1]);
    else answer.push(results[k - 1]);
  }
  return answer;
}

const a = 3;
const b = [10, 100, 20, 150, 1, 100, 200];
console.log(solution(a, b));
