import { createContext, useState } from "react"
import ChildTheme from "./ChildTheme";


// Context 생성
export const ThemeContext = createContext("light");

const ParentsTheme =() => {
    
    const[currentTheme , setCurrentTheme] =useState("light")
    
    //테마 토글 함수
    const toggleTheme = () => {

        setCurrentTheme(prev => ( 
            prev === 'light' ? 'dark' : 'light')
        )
    }


    // 부모 컴포넌트 스타일
    const parentStyle = {

        background: currentTheme === 'dark' ? '#333' : '#fff' ,
        color: currentTheme === 'dark' ? '#fff' : '#333' ,
        padding: '20px'

    }



    return (

      
        <div style={parentStyle}>

            <h2>현재 테마: {currentTheme}</h2>
            {/* 하위 컴포넌트에 context 제공 */}
            <ThemeContext.Provider value={{currentTheme , toggleTheme}}>
                <ChildTheme></ChildTheme>

            </ThemeContext.Provider>

        </div>

    )

    
}

export default ParentsTheme