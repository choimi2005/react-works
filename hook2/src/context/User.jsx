import { createContext } from "react"
import UserChild from "./UserChild"


//UserContext를 생성합니다.(내보내기) 기본값은 빈 객체 
export const UserContext = createContext({})


const User =  ()  => {

    const user = {
        name: "이순신",
        age: 45
    }

        return(

            <div className="user">

                <h2>User 컴포넌트 입니다.</h2>
                {/* 공급자 설정 */}
                <UserContext.Provider value= {user}>
                
                {/* 하위 컴포넌트 */}
                <UserChild></UserChild>
                </UserContext.Provider>
            </div>


        )
}


export default User