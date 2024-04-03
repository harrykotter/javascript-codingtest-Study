function solution(n) {
  let waterMelon = "수박";
  if (n % 2 === 0) return waterMelon.repeat(n / 2);
  return waterMelon.repeat(Math.floor(n / 2)) + "수";
}
