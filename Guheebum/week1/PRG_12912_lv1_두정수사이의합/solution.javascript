function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    return (min + max) * (max - min + 1) / 2;
}

//큰수 작을수를 구하는 함수
//const min = Math.min(a, b);  // 더 작은 수
//const max = Math.max(a, b);  // 더 큰 수 
// Math.max 는 두 정수중 큰수를 가져오는 함수
// Math.min 는 두 정수중 작은 수를 가져오는 함수

// 합계를 구하는 반복문 방식 (느림)
//let sum = 0;
//for (let i = min; i <= max; i++) {
//    sum += i;  // 3+4+5 = 하나씩 더함
//}

// 공식으로 구하는 방식 (빠름)
//(min + max) * (max - min + 1) / 2  // 한 번에 계산
// 두 정수의 범위가 커질수록 반복문은 많이 더해야 하지만, 공식은 항상 한 번의 계산으로 끝나요
