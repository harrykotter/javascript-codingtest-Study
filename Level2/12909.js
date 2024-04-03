function solution(s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === "(" && s[i] === ")") {
      stack.pop();
    } else stack.push(s.charAt(i));
    console.log(stack);
  }
  return stack.length === 0;
}

console.log(solution("(())("));
