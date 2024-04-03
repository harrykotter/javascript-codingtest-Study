function solution(a, b) {
  const WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let date = new Date(2016, a - 1, b - 1);
  let day = date.getDay();
  return WEEK[day];
}
