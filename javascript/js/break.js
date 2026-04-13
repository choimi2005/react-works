// 1부터 5까지 출력
let i = 1;
while(true){
    console.log(i);
    i++;
    if(i > 5)
        break;
}

// 1부터 5까지의 합
let j = 1;
let sum = 0;
while(true){
    sum = sum + j;
    console.log(`j=${j}, sum=${sum}`);
    j++;
    if(j > 5)
        break;
}
console.log(`합계: ${sum}`);
