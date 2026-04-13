import { useReducer } from "react"


//외부에 분리된 reducer 함수 정의 


const reducer = (state, action) => {
    console.log(state, action);
    
    switch(action.type){
        case "INCREMENT" :
            return {count : state.count +1 }
         case "DECREMENT" :
            return {count : state.count -1 }

        case "RESET" :
            return {count : 0}

        default :
            return state // case에 해당이 없으면 현재 상태를 반환 
    }


}


// dispatch 요구사항 (액션)을 전달하는 함수

const CounterReducer = () => {
    // 초기화는 객체로 생성됨 - {count: 0}
    const [state , dispatch] = useReducer(reducer, {count : 0})

    return(
        <div>
         <h2>useReducer 예제</h2>
         <h3>{state.count}</h3>
        
            <button onClick={() => dispatch({type:"INCREMENT" })}>증가</button>
            <button onClick={() => dispatch({type:"DECREMENT" })}>감소</button>
            <button onClick={() => dispatch({type:"RESET" })}>초기화</button>

        </div>


    )


}

export default CounterReducer