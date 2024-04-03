function solution1(people, limit) {
  var count = 1;
  people.sort((a, b) => a - b);
  console.log(people);
  let boat = 0;
  for (let person of people) {
    boat += person;
    if (boat > limit) {
      boat = person;
      count++;
    }
  }
  return count;
}

// 아 한 번에 두 명씩...두 명이 최대...
function solution2(people, limit) {
  people.sort((a, b) => a - b);
  var count = 0;
  let min = 0;
  let max = people.length - 1;
  while (min <= max) {
    if (people[min] + people[max] > limit) {
      max--;
    } else {
      min++;
      max--;
      count++;
    }
  }
  return count;
}

console.log(solution2([70, 50, 80, 50], 100));
