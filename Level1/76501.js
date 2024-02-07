function solution(absolutes, signs) {
  let sum = 0;
  let i = 0;
  while (i <= absolutes.length - 1) {
    let num = signs[i] ? +absolutes[i] : -absolutes[i];
    sum += num;
    i++;
  }
  return sum;
}
