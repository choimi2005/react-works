import { useReducer, useState } from "react"


const bankReducer = (state, action) => {

    console.log("reducer 가 작동합니다.", state);


    switch(action.type){
        //예금
        case 'DEPOSIT' : 
            return {...state , balance: state.balance + action.payload }
        case 'WITHDRAW' :
           
            if(state.balance < action.payload){
                alert("잔액이 부족합니다.")
                return {state}
            }
            return {...state , balance: state.balance - action.payload }

        default :
            return state;
    }
}


const BankReducer = () => {

    const [amount , setAmount] = useState(0);
    const [state, dispatch] = useReducer(bankReducer, {balance: 0})

    return (
        <div>       
            <h2>은행 입출금</h2>
            <h3>현재 잔액: {state.balance}</h3>
                <input type="number" 
                        placeholder="금액 입력: "                   
                        value={amount} 
                        onChange={(e) => {setAmount(parseInt(e.target.value))}}                   
                />
            <button onClick={() => {
                dispatch({type: 'DEPOSIT', payload: amount})

            }}>예금</button>
            <button onClick={() => {
                dispatch({type: 'WITHDRAW', payload: amount})

            }}>출금</button>





        </div>

    )

}

export default BankReducer

