import { useEffect, useState } from "react"

export default function User(){

    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);


    // useEffect (함수,배열))
    // [] - 빈배열 (처음 랜더링 될때 한 번만 실행)
    //[age] - age가 변경될때마다 실행됨
    useEffect(() => {
        console.log("렌더링");

    }, [username])

    const onChangeName =  (e) => {
        setUsername (e.target.value)
    }
    const onChangeAge = (e) => {
        //Number(문자) -숫자형으로 변환하는 함수
        setAge(Number(e.target.value))
    }

    return(
        <div>
            <h2>사용자 정보</h2>
            <input
                type = "text"
                value = {username}
                 onChange={onChangeName}
            />
            <input
                type="number"
                value={age}
                onChange={onChangeAge}
            />
            <p>이름: {username}</p>
            <p>나이: {age}</p>

        </div>


    )
}