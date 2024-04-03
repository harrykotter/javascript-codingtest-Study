function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let wall = "";
    let map1 = arr1[i].toString(2);
    let map2 = arr2[i].toString(2);
    if (map1.length < n) map1 = "0".repeat(n - map1.length) + map1;
    if (map2.length < n) map2 = "0".repeat(n - map2.length) + map2;
    for (let count = 0; count < n; count++) {
      wall += map1.at(count) + map2.at(count) === "00" ? " " : "#";
    }
    answer.push(wall);
  }
  return answer;
}

const a = 5;
const ar1 = [9, 20, 28, 18, 11];
const ar2 = [30, 1, 21, 17, 28];

console.log(solution(a, ar1, ar2));
