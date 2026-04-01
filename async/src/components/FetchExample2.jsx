import { useEffect, useState } from "react";


const FetchExample2 = ({ id }) => {

const [data , setData] = useState(null);

useEffect(() => 
    
    {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(result => 
                {setData(result);
            console.log("가저온 데이터: ", result); })
            .catch(err => console.log(err));
            
    },[id]);


    return (
        <div>
            <h2>할 일 데이터</h2>
        {data && (
            <div>
                <p>제목: {data.title}</p>
                <p>완료 여부: {data.completed ? "완료" : "미완료"}</p>               
            </div>
            )
        }

            {data && <p>{data.title}</p>}
        </div>
    )

}

export default FetchExample2;