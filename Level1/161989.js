function solution1(n, m, section) {
  let start = section[0];
  let count = 1;
  for (let tile of section) {
    if (tile > start + m - 1) {
      start = tile;
      count++;
    }
  }
  return count;
}

console.log(solution1(6, 1, [1, 3, 5]));

//4가지 케이스에서 막힘, 실행 시간이 김 12, 17, 28, 35
