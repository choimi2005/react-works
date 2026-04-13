import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';    

const AxiosGet = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    




    return (
 
        <div> 
            <h2>할 일 관리</h2> 
            <ul>
                {data && data.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        
        
        </div>

    )
}

export default AxiosGet