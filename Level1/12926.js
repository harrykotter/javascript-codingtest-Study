function solution(s, n) {
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let sArr = s.split(" ");
  let answer = [];
  for (let letters of sArr) {
    let letterArr = letters.split("");
    let newLetters = [];
    for (let letter of letterArr) {
      if (letter === letter.toLowerCase()) {
        let nextIndex = alphabetArr.indexOf(letter) + n;
        if (nextIndex < 0) nextIndex += 26;
        if (nextIndex >= 26) nextIndex -= 26;
        newLetters.push(alphabetArr[nextIndex]);
      } else {
        let nextIndex = alphabetArr.indexOf(letter.toLowerCase()) + n;
        if (nextIndex < 0) nextIndex += 26;
        if (nextIndex >= 26) nextIndex -= 26;
        newLetters.push(alphabetArr[nextIndex].toUpperCase());
      }
    }
    answer.push(newLetters.join(""));
  }
  return answer.join(" ");
}
