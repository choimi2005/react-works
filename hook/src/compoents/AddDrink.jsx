import { useState } from "react"
import DrinkList from "./DrinkList"
// 음료를 저장할 상태변수와 함수
const AddDrink = () => {
    const [drinkName , setDrinkName] = useState([])
    //입력 필드의 상태 관리하기위한 상태 변수

    const[inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value)

    }

    //음료 추가 상태 함수

    const handleAddDrink = () =>{

        const newDrink = inputValue.trim();
        if(newDrink === ''){
            alert("음료 이름을 입력해주세요")
            return;
        }


         setDrinkName([...drinkName, newDrink]); 
        setInputValue(""); // 입력 필드 초기화

    }


    return(
        <div>
            <h2>음료 추가</h2>
            <input
                type="text"
                placeholder = "음료이름 입력"
                value = {inputValue}
                onChange={handleInputValue}
            />
            <button onClick={handleAddDrink}>음료 추가</button>
            {/* <p>현재음료: {drinkName.join(',')}</p> */}
      
            {/* DrinkList 컴포넌트에 drinks 속성으로 drinkName을 */}
            
            <DrinkList drinks = {drinkName} />

        </div>

    )
}

export default AddDrink