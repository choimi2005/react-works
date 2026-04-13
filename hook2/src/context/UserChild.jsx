import { useContext } from "react"
import { UserContext } from "./User"


const UserChild = () => {

    // UserContext에서 user데이터를 가져옴
    const user = useContext(UserContext)

    return(

        <div className= "user-child">

            <h2>유저 차일드 컴포넌트 입니다.</h2>
            <p>사용자 이름: {user.name}</p>
            <p>사용자 나이: {user.age}</p>
                   
        </div>
    )
}

export default UserChild