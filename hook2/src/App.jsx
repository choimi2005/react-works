import { useState } from 'react'

import './App.css'
import Counter from './ref/Counter'
import InputFocus from './ref/InputFocus'

import User from './context/User'
import BankReducer from './reducer/BankReducer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import CounterReducer from './reducer/CounterReducer'
import ParentsTheme from './context/ParentsTheme'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <section id='container'>


      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path = "/" element={<BankReducer></BankReducer>} />
          <Route path = "/bank" element={<BankReducer></BankReducer>} />
          <Route path = "/CountReducer" element={<CounterReducer></CounterReducer>} />
          <Route path = '/theme' element= {<ParentsTheme></ParentsTheme>} />   
        </Routes>
      
      </BrowserRouter>

    {/* <User></User> */}



     {/* <BankReducer></BankReducer> */}

      {/* <CounterReducer>

      </CounterReducer> */}
      {/* <InputFocus></InputFocus>
      <Counter></Counter> */}

      </section>
     
    </>
  )
}

export default App
