function solution(dartResult) {
  let darts = dartResult.match(/\d.?\D/g);
  let dartScore = dartResult.match(/\d+/g);
  for (let i = 0; i < 3; i++) {
    if (darts[i].includes("S")) dartScore[i] *= 1;
    else if (darts[i].includes("D")) dartScore[i] **= 2;
    else if (darts[i].includes("T")) dartScore[i] **= 3;
    if (darts[i].includes("*")) {
      dartScore[i] *= 2;
      if (dartScore[i - 1]) dartScore[i - 1] *= 2;
    } else if (darts[i].includes("#")) dartScore[i] *= -1;
  }
  console.log(dartScore);
  return dartScore.reduce((total, current) => total + current, 0);
}

console.log(solution("1S*2T*3S"));

function solution1(dartResult) {
  let darts = dartResult.match(/\d.?\D/g);
  let ansArr = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    const [number] = darts[i].match(/\d+/g);
    const [bonus] = darts[i].match(/[A-Z]+/g);
    const [option] = darts[i].match(/[^A-Z0-9]+/g) || [""];
    ansArr[i] = [number, bonus, option];
  }
  for (let j = 0; j < 3; j++) {
    if (ansArr[j][1] === "D") ansArr[j][0] **= 2;
    if (ansArr[j][1] === "T") ansArr[j][0] **= 3;
    if (ansArr[j][2] === "*") {
      ansArr[j][0] *= 2;
      ansArr[j + 1][0] *= 2;
    }
    if (ansArr[j][2] === "#") ansArr[j][0] *= -1;
  }
  return ansArr;
}
