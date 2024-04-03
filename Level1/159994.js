function solution(cards1, cards2, goal) {
  var answer = "";
  let i = 0;
  let j = 0;
  let a = 0;
  while (a < goal.length) {
    if (goal[a] === cards1[i]) {
      answer += cards1[i];
      i++;
      a++;
    } else if (goal[a] === cards2[j]) {
      answer += cards2[j];
      j++;
      a++;
    } else return "No";
  }
  return answer == goal.join("") ? "Yes" : "No";
}
