import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import UserList from './components/UserList'
import Like from './components/Like'
import InputText from './components/inputText'

function App() {
  const user = "김기용";
  const isLoggedIn = true;
  let message;

  if(isLoggedIn){
    message = <p>환영합니다.</p>
  }else{
    message = <p>로그인 해주세요</p>
  }

  return (
    <>
      <h2>리엑트 연습문제</h2>

      {/* {isLoggedIn ? <p>환영합니다.</p> : <p>로그인 해주세요</p>} */}
      {message}

    <InputText></InputText>

    {/* <Like>

    </Like> */}

      {/* <UserList></UserList> */}
      

      {/* <Header />
      <Main />
      <Footer /> */}
    </>
  )
}

export default App
