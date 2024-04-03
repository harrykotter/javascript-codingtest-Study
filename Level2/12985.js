function solution(n, a, b) {
  let aBin = a.toString(2);
  let bBin = b.toString(2);
  let nBin = n.toString(2);

  if (aBin.length < nBin.length) {
    aBin = "0".repeat(nBin.length - aBin.length) + aBin;
  }
  if (bBin.length < nBin.length) {
    bBin = "0".repeat(nBin.length - bBin.length) + bBin;
  }
  console.log(nBin, aBin, bBin);
  let meet = nBin.length;
  for (let i = 1; i < nBin.length - 1; i++) {
    if (aBin[i] === bBin[i]) meet--;
    else break;
  }
  return meet;
}

function win(x) {
  return Math.ceil(x / 2);
}

function solution1(n, a, b) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (win(a) === win(b)) return count;
    else {
      a = win(a);
      b = win(b);
      count++;
    }
  }
}

console.log(solution(8, 4, 7));
