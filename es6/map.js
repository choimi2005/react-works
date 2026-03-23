/*
map(인라인함수) 
배열 객체의 함수로 주어진 함수를 호출한 결과를 모아 새로운 배열을
반환하는 함수
*/

let arr = [1, 2, 3]

const newArr = arr.map(x => x * 3);
console.log(newArr);

//배열 객체 
const users = [
    {name: 'Jerry', age: 25},
    {name: 'Linda', age: 30},
    {name: 'Tom', age: 35}
]

//이름을 저장하는 배열
const names = users.map(user => user.name)
console.log(names);

//나이를 저장하는 배열
const ages = users.map(user => user.age)
console.log(ages);