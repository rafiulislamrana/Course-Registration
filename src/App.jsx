import './App.css'
import Courses from './componants/courses/courses'
import Carts from './componants/carts/carts'

import { useState } from "react";

function App() {
  const [list, setList] = useState([])
  // const [times, settimes] = useState(0)
  // const [ids, setId] = useState([])

  // const addList = (title, time, id) => {
  //   const newList = [...list, title]
  //   setList(newList);
  //   const listId = [...ids, id]
  //   setId(listId)
  //   settimes(time + times)
  // }
  const addList = (course) => {
    console.log(course, list)
    
    const newList = [...list, course]
    setList(newList);
  }
  const filterList = [...new Set(list)]
  
  
  
 
  

  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-10 pb-7'>Course Registration</h1>
      <div className='flex max-w-7xl gap-2 mx-auto px-2'>
        <Courses addList={addList}></Courses>
        {/* <Carts list={list} times={times}></Carts> */}
        <Carts lists={filterList}></Carts>
      </div>
    </>
  )
}


export default App
