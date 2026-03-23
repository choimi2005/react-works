//배열 구조 분해 할당
let arr = [1, 2]
//arr[0] = 1
//arr[1] = 2

const [a, b] = arr;
console.log(a, b);

//객체 구조 분해 할당
//자바스크립트 객체 -> json 변경
/*
{
    "prod_name": '무선마우스',
    "price": 27000
}

*/
const product = {
    prod_name: '무선마우스', 
    price: 27000
}

//구조 분해 할당
const {prod_name, price} = product;
console.log(`제품명: ${prod_name}`);
console.log(`가격: ${price}`);

