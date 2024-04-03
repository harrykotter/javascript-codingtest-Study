function you(n, turn) {
  let round = Math.floor((turn + 1) / n) + 1;
  let person = (turn + 1) % n;
  if (person === 0) {
    person = n;
    round--;
  }
  return [person, round];
}

function solution(n, words) {
  let stack = [];
  for (let i = 0; i < words.length; i++) {
    if (
      stack.includes(words[i]) ||
      (i > 0 &&
        stack[stack.length - 1]?.charAt(words[i - 1].length - 1) !==
          words[i].charAt(0))
    )
      return you(n, i);
    stack.push(words[i]);
  }
  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ]),
);
