

// 임시 데이터

import { useState } from "react"

const TEMP_USERS = [

    {username: 'admin' , password : '00000'},
    {username: 'cloud' , password : 'c1234'},
    {username: 'tester' , password : 'tester'}
]


const SignIn = () => {

    const [userId , setUserId] = useState('') 
    const [password , setPassword] = useState('') 

    //로그인 결과 상태
    // 초기상태: null, 로그인 성공: 'success' , 실패: 'fail'
    const [result, setResult] = useState(null)


    //ID 입력처리

    const handleChangeUserId = (e) => {

        setUserId(e.target.value);
    }


    // 비밀번호 입력 처리
    const handleChangePassword = (e) => {
        setPassword((e.target.value));
    }

    //폼 제출 

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`ID: ${userId}`);

      //로그인 처리
      //외부에서 입력된 id, password를 임시 데이터에서 찾아서 비교
      //검색해서 일치여부 결과를 가저오는 함수
      const matched = TEMP_USERS.find(
        (user) => user.username === userId && user.password == password

        );
        
        if(matched){
            setResult('success');
            console.log(`로그인 성공: ${userId}님 환영합니다.`)

        }
        else{
            setResult('fail')
            console.log("로그인 실패: 아이디나 비밀번호가 일치하지 않습니다.");
        }


    }

    return(
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <input 
                        type="text" 
                        placeholder="ID 입력"
                        value={userId}
                        onChange={handleChangeUserId}
                    
                    />    
                    
                    
                </p>
                                <p>
                    <input 
                        type="password" 
                        placeholder="패스워드 입력"
                        value={password}
                        onChange={handleChangePassword}
                    
                    />    
                    
                    
                </p>


                {/* 폼 전송시엔 type= "submit"으로 함 */}
                <button type ="submit">로그인</button>

            </form>
            {/* 로그인 결과 메시지 표시 */}
            {result === 'success' && (
                    <p style={{color: 'green'}}>환영합니다.{userId}</p>
            )}
            {result === 'fail' && (
                    <p style={{color: 'red'}}>  아이디나 비밀번호가 일치하지 않습니다.</p>
            )}
        </div>

    )
}

export default SignIn