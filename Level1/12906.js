function solution(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i - 1] === arr[i]) {
      arr.splice(i, 1);
      continue;
    }
    i++;
  }
  return arr;
}
//시간 초과

function solution(arr) {
  let answer = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i - 1] !== arr[i]) answer.push(arr[i]);
    i++;
  }
  return answer;
}
