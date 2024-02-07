function solution(phone_number) {
  let phone_end = phone_number.slice(
    phone_number.length - 4,
    phone_number.length,
  );
  let star = "*";
  return `${star.repeat(phone_number.length - 4)}` + phone_end;
}
