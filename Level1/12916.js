function solution(s) {
  let countP = 0;
  let countY = 0;

  for (let str of s) {
    if (str === 'p' || str === 'P') countP += 1;
    if (str === 'y' || str === 'Y') countY += 1;
  }
  return countP === countY ? true : false;
}
