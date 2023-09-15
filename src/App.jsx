import './App.css'
import Courses from './componants/courses/courses'
import Carts from './componants/carts/carts'

import { useState } from "react";

function App() {
  const [list, setList] = useState([])
  const [times, settimes] = useState(0)

  const addList = (title, time) => {
    const newList = [...list, title]
    setList(newList);
    settimes(time + times)
  }
  console.log(list)


  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-10 pb-7'>Course Registration</h1>
      <div className='flex max-w-7xl gap-2 mx-auto px-2'>
        <Courses addList={addList}></Courses>
        <Carts list={list} times={times}></Carts>
      </div>
    </>
  )
}


export default App
