import './App.css'
import Courses from './componants/courses/courses'
import Carts from './componants/carts/carts'
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [list, setList] = useState([])
  const addList = (course) => {
    console.log(course, list)

    const newList = [...list, course]
    setList(newList);
  }
  const filterList = [...new Set(list)]
  console.log(filterList)

  let sum = 0
  let max = 20
  let filterFiler = []
  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < filterList.length; i++) {
    if (sum < 20) {
      // eslint-disable-next-line react/prop-types
      sum = filterList[i].course_duration + sum;
      // eslint-disable-next-line react/prop-types
      max = max - filterList[i].course_duration;
      if (sum > 20) {
        toast("You cant add more than 20 credit")
        if (max < 0) {
          // eslint-disable-next-line react/prop-types
          max = max + filterList[i].course_duration;
          // eslint-disable-next-line react/prop-types
        }
        // eslint-disable-next-line react/prop-types
        sum = sum - filterList[i].course_duration;
      }
      else{
        filterFiler.push(filterList[i])
      }
      


    }
  }
  console.log(filterList)
  console.log(filterFiler)

  const filterFilerUpdate = [...new Set(filterFiler)]
  console.log(filterFilerUpdate)

  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-10 pb-7'>Course Registration</h1>
      <div className='flex max-w-7xl gap-2 mx-auto px-2 pb-10'>
        <Courses addList={addList}></Courses>
        <Carts lists={filterFilerUpdate} sum ={sum} max={max}></Carts>
      </div>
    </>
  )
}


export default App
