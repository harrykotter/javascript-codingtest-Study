//자릿수 더하기
function solution(n)
{
    let sum = 0;
    for(let i of String(n)) {
        sum += Number(i);
    }
    return sum;
}
