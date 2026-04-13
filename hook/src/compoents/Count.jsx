// useState 함수를 import 해야함
import { useState } from "react"

const Counter = () =>{

    const countState = useState(0);
    
    // const count = countState[0];
    // const setCount = countState[1];
    // console.log(countState);
    // console.log(setCount);
    
     const [count, setCount] = useState(0);  

    //setCount() 사용
    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(count - count);
    }

    return(
        <div>
            
            <h2>Counter</h2>
            <p>현재 카운트 : {count}</p>
            <button onClick={increment}>+ 증가</button>{' '}
            <button onClick={decrement}>- 감소</button>{' '}
             <button onClick={reset}>초기화</button>{' '}
        </div>

    )


}

export default Counter