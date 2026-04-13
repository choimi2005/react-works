
import { useState, useEffect } from 'react';

function FetchGetById({ id }) {

    const [user, setUser] = useState(null);

    useEffect(() =>{
           fetch("/json/users.json")
           .then (response => response.json()) // json 객체로 변환
           .then (data => {
            //가저온 리스트 내부에서 검색 -find
            const foundUser =data.find(user => user.id === id);       
            setUser(foundUser);
               console.log("데이터가져오기", data);
               
           })
           .catch (err => console.log("에러발생", err))
   
       }, [id])

    return (

        <div>
            <h2>회원 정보</h2>
            {user && (
                <div>
                    <p>아이디: {user.id}</p>
                    <p>이름: {user.name}</p>
                    <p>도시: {user.address.city}</p>
                    <p>이메일: {user.email}</p>
                </div>    
            )}
        </div>
    )

}
export default FetchGetById;