// 배열 생성
let fruits = ["사과", "배", "포도", "바나나"]
console.log(fruits);

//배열 요소 접근
const result = document.getElementById("result")
result.innerHTML = "첫번째 과일: " + fruits[0] + "<br>"
result.innerHTML += "두번째 과일: " + fruits[1] + "<br>"

//배열의 길이(크기)
result.innerHTML += `과일의 총 개수: ${fruits.length}`
result.innerHTML += "<br>"

//배열의 전체 요소 출력
for(let i=0; i<fruits.length; i++){
    result.innerHTML += `과일 ${i+1}: ${fruits[i]}<br>`
}
result.innerHTML += "<br>"

//배열 요소 추가(맨뒤) - push()
fruits.push("오렌지")

for(let i=0; i<fruits.length; i++){
    result.innerHTML += `과일 ${i+1}: ${fruits[i]}<br>`
}
result.innerHTML += "<br>"

//배열 요소 삭제(맨앞) - pop()
fruits.pop();
for(let i=0; i<fruits.length; i++){
    result.innerHTML += `과일 ${i+1}: ${fruits[i]}<br>`
}

//배열 요소 변경
fruits[1] = "딸기"
result.innerHTML += "<br>"

for(let i=0; i<fruits.length; i++){
    result.innerHTML += `과일 ${i+1}: ${fruits[i]}<br>`
}
