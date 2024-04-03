function solution(arr) {
  arr.sort((a, b) => a - b);
  let times = 0;
  let count = 0;
  while (count < arr.length - 1) {
    times++;
    count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if ((arr[arr.length - 1] * times) % arr[i] === 0) {
        count++;
      }
    }
  }
  return arr[arr.length - 1] * times;
}
