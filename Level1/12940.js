function solution(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  if (max % min === 0) return [min, max];
  let commonDiv;
  for (let i = 1; i <= min / 2; i++) {
    if ((n % i) + (m % i) === 0) commonDiv = i;
  }
  return [commonDiv, (n * m) / commonDiv];
}

// 최대공약수 구하는게 너무 싫음....걍 싫음...

// 이게 도대체 뭐야...

function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
