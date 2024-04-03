// 이건 또 뭐야 SSang
function solution(n) {
  let nBn = n.toString(2);
  let n1 = (nBn.match(/1/g) || []).length;
  for (i = n + 1; i > n; i++) {
    let iBn = i.toString(2);
    if (n1 === (iBn.match(/1/g) || []).length) return i;
  }
}
