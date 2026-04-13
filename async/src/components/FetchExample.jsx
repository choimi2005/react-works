

import { useState, useEffect } from 'react';


const FetchExample = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json()) // json -> js 객체로 변환
                .then(result => setData(result)) // 변환된 데이터를 상태에 저장
                
                .catch(error => console.error('Error fetching data:', error)); // 에러 처리 
                
        }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함
       
        return (
        
        <>           
            <div>  
                    <h2>할일 데이터</h2>    
                    {data.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                    ))}
            </div>    
        </>
    
    
    );


            
           
}
export default FetchExample;