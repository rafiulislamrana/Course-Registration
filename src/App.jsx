import './App.css'
import Courses from './componants/courses/courses'
import Carts from './componants/carts/carts'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-10 pb-7'>Course Registration</h1>
      <div className='flex'>
      <Courses></Courses>
      <Carts></Carts>
      </div>
    </>
  )
}

export default App
