import React, { useState } from 'react'
import './App.css'
import FetchExample from './components/FetchExample';
import FetchExample2 from './components/FetchExample2';
import Todos from './todos/todos';
import AxiosGet from './axios/AxiosGet';
import AxiosGetById from './axios/AxiosGetById';
import AxiosPost from './axios/AxiosPost';
<<<<<<< HEAD
import FetchGet from './components/FetchGet';
import FetchGetById from './components/FetchGetById';
=======
>>>>>>> 191af6813533ba3f3d8ca63353d06ef46c735544
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">


<<<<<<< HEAD
    {/* <FetchGetById id={3}></FetchGetById> */}

    <FetchGet></FetchGet>

    {/* <AxiosPost></AxiosPost> */}
=======
    <AxiosPost></AxiosPost>
>>>>>>> 191af6813533ba3f3d8ca63353d06ef46c735544
    {/* <AxiosGetById id={2}></AxiosGetById> */}
     {/* <AxiosGet></AxiosGet>  */}
      {/* <Todos></Todos> */}
        {/* <FetchExample2 id={1}></FetchExample2> */}
      {/* <FetchExample></FetchExample> */}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
