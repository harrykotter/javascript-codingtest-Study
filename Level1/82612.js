function solution(price, money, count) {
  let cost = ((count * (count + 1)) / 2) * price - money;
  return cost <= 0 ? 0 : cost;
}
