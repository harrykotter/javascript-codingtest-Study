function solution(s) {
  let arr = s.split(" ");
  let arrNew = [];
  for (let word of arr) {
    let wordNew = [];
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) wordNew.push(word.charAt(i).toUpperCase());
      else wordNew.push(word.charAt(i).toLowerCase());
    }
    arrNew.push(wordNew.join(""));
  }
  return arrNew.join(" ");
}
