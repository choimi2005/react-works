import { useEffect, useState } from 'react'
export default function Clock(){
    // 시간 초기화
    const [time, setTime] =useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    
     console.log("렌더링");
        //clearIntervale()-시간을 멈추는 함수
        return () => clearInterval(timer);
        
    }, []) // 빈 배열을 전달하여 컴포넌트가 처음 랜더링 될때만 실행


    return(

        <div>
            <h2>디지털 시계</h2>
            <h3>현재시간: {time}</h3>
        </div>

        
    )



}