function solution(s) {
  let splitted = s.toLowerCase().split(" ");
  let answer = [];
  for (let word of splitted) {
    let Jaden = word.charAt(0).toUpperCase() + word.slice(1);
    answer.push(Jaden);
  }
  return answer.join(" ");
}

console.log(solution("3people unFollowed      me"));

// 아 대문자만 건드리...
