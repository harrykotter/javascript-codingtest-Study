function remove1(n) {
  if (n == "1") return "1";
  let c = n.match("1").length;
  return remove1(c.toSrting(2));
}

function solution(s) {
  let zeros = 0;
  let count = 0;
  while (s !== "1") {
    let s1 = s.match(/1/g);
    zeros += s.length - s1.length;
    s = s1.length.toString(2);
    count++;
  }
  return [count, zeros];
}
console.log(solution("110010101001"));
