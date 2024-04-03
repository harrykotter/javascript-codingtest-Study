function solution(name, yearning, photo) {
  var answer = [];
  let list = {};
  for (let i = 0; i < name.length; i++) {
    list[name[i]] = yearning[i];
  }
  for (let members of photo) {
    let point = 0;
    for (let name of members) {
      if (list[name] !== undefined) point += list[name];
    }
    answer.push(point);
  }
  return answer;
}
