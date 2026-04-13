

/*
export default function Dog(props){
    const {breed , age} = props // 구조분해할당
    return (
        <div>
            <h2>강아지</h2>
            <p>품종: {breed} </p>
            <p>나이: {age} </p>
        </div>
    )
}
*/

export default function Dog({breed, age}){
   
    return (
        <div>
            <h2>강아지</h2>
            <p>품종: {breed} </p>
            <p>나이: {age} </p>
        </div>
    )
}

