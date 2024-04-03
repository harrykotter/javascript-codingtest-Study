function solution(answers) {
  var answer = [];
  let ans1 = [1, 2, 3, 4, 5];
  let ans2 = [1, 3, 4, 5];
  let ans3 = [3, 1, 2, 4, 5];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === ans1[i % 5]) count1++;
    let isOdd = i % 2 !== 0;
    if (isOdd ? answers[i] === ans2[((i - 1) / 2) % 4] : answers[i] === 2) {
      count2++;
    }
    if (answers[i] === ans3[Math.floor(i / 2) % 5]) count3++;
  }
  let max = Math.max(count1, count2, count3);
  if (max === count1) answer.push(1);
  if (max === count2) answer.push(2);
  if (max === count3) answer.push(3);
  return answer;
}
