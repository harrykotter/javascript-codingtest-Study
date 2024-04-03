function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let nearLetter = -1;
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j]) nearLetter = i - j;
    }
    answer.push(nearLetter);
  }
  return answer;
}
