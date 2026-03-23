
const Event = () => {
    //함수 참조 방식(외부)
    const handleClick = () => {
        alert("버튼이 클릭되었습니다.");
    }


    const handleMyAbs = (x) => {
        if (x < 0) {
            console.log(-x) 
        }
        else{
            console.log(x)
        }
    }

    //폼 요소(입력상자)와 이벤트 핸들링
    const handleChange = (event) => {
        // event 
        console.log(event);
        //console.log(event.target.value); //입력값 출력
    }

    return(
        <div>
            <h2>이벤트 핸들링</h2>
            {/* 인라인 핸들러: 이벤트 속성안에 함수를 직접 생성 */}
            {/* <button onClick={
                () => alert("버튼이 클릭되었습니다.")}
            >클릭하세요
            </button> */}
            {/* <button onClick={handleClick}>클릭하세요</button> */}
            <br/>
            
            <button onClick={ () => handleMyAbs (-5)}>결과</button>

            <br/>

            {/* 입력 이벤트 */}
            <input 
              type="text" 
              onChange={handleChange} 
            />.
            
        </div>
    )
}

export default Event;