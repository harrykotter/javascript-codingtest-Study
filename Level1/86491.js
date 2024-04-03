function solution(sizes) {
  let maxX = 0;
  let maxY = 0;
  for (let card of sizes) {
    card.sort((a, b) => a - b);
    if (card[0] >= maxX) maxX = card[0];
    if (card[1] >= maxY) maxY = card[1];
  }
  return maxX * maxY;
}
