
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';  

const AxiosGetById = ({ id }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {setData(res.data)
            console.log( res.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);
    


    return (
        <div>
            <h2>할 일 상세</h2>
            {data && (
            <div>
                <p>제목: {data.title}</p>
                <p>완료 여부: {data.completed ? "완료" : "미완료"}</p>               
            </div>
            )
        }
        </div>
    );
};

export default AxiosGetById;    