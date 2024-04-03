function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let num of s) {
    if (isNaN(num)) return false;
  }
  return true;
}
