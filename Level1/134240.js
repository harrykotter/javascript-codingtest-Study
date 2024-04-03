function solution(food) {
  var answer = "0";
  for (let i = 0; i < food.length; i++) {
    if (food[food.length - i] < 2) continue;
    answer =
      `${food.length - i}`.repeat(Math.floor(food[food.length - i] / 2)) +
      answer +
      `${food.length - i}`.repeat(Math.floor(food[food.length - i] / 2));
  }
  return answer;
}
