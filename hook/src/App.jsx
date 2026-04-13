import { useState } from 'react'

import './App.css'
import Dog from './compoents/Dog'
import Garden from './compoents/Garden'
import Counter from './compoents/Count'
import Car from './compoents/Car'
import AddProduct from './compoents/AddProduct'
import Box from './compoents/Box'
import AddDrink from './compoents/AddDrink.jsx'
import User from './compoents/User.jsx'
import Clock from './compoents/Clock.jsx'
import Profile from './card/Profile.jsx'
import MapTest from './compoents/MapTest.jsx'
import SignUp from './form/SignUp.jsx'
import SignIn from './form/SignIn.jsx'
import StyleButton from './compoents/StyleButton.jsx'
import Block from './compoents/Block.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>


   <Block></Block>

    {/* <StyleButton /> */}

    {/* <SignIn></SignIn> */}
    
    {/* <SignUp></SignUp> */}
    {/* <MapTest></MapTest> */}

    {/* <Profile></Profile> */}

    {/* <h2>state 상태관리</h2> */}
    {/* <User></User> */}

    {/* <Clock></Clock> */}
    {/* <AddDrink /> */}
    
    {/* <Box></Box>박스사이의 모든것이 {children}으로*/}
    
    {/* <Box>
      <h3>박스 안의 내용</h3>
      <p>이것은 box 의 내용물 입니다</p>
    </Box> */}

    {/* <Box>
      <h3>또 다른 박스안의 내용</h3>
      <p>다른 box 의 내용물 입니다</p>
    </Box> */}

    {/* <AddProduct/> */}


    {/* <Car></Car> */}

    {/* <Counter/> */}
    {/* <Dog breed = "말티즈" age = {3} />
     <Dog breed = "진돗개" age = {5} /> */}
    
    {/* <Garden></Garden> */}
    



    </>
  )
}

export default App
