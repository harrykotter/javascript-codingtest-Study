function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let sArr = s.split("");
  let answer = "";
  let temp = "";
  for (let i of sArr) {
    temp += i;
    if (numbers.includes(temp)) {
      answer += numbers.indexOf(temp);
      temp = "";
    }
    if (!isNaN(temp)) {
      answer += temp;
      temp = "";
    }
  }
  return +answer;
}
