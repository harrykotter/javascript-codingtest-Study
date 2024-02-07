function solution(n) {
  let prevNum = 0;
  let num = 1;

  for (i = 1; i < n; i++) {
    let numBefore = prevNum;
    prevNum = num;
    num = num + numBefore;
  }
  return num;
}

// 일부만 맞음
