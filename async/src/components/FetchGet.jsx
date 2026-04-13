
import { useState, useEffect } from 'react';

function FetchGet(){

    const [users, setUsers] = useState([]);
    // users.json()의 모든 데이터를 가지고 오기

    useEffect(() =>{
        fetch("/json/users.json")
        .then (response => response.json()) // json 객체로 변환
        .then (data => {
            setUsers(data)
            console.log("데이터가져오기", data);
            
        })
        .catch (err => console.log("에러발생", err))

    }, [])

    return(
        <div>
            <h2>회원목록</h2>
            {/* <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}, 도시:{user.address.city}, 이메일:{user.email}</li>
                ))} 
            </ul> */}

                  <table className='tabletest' border="1">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>도시</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.address.city}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>

        </div>
    )
}

export default FetchGet;