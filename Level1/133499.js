function solution(babbling) {
  const babbable = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  for (let babble of babbling) {
    let word = "";
    let lastBabble = "";
    for (let i = 0; i < babble.length; i++) {
      word += babble.at(i);
      if (babbable.includes(word) && lastBabble !== word) {
        lastBabble = word;
        word = "";
      }
    }
    if (word === "") answer++;
  }
  return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
