function solution(str) {
  const words = str.split(' ');
  const answer = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return answer.join(' ');
}
