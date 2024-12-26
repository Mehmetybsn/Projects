import { useState } from 'react'

import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './Course'
import './css/Course.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='course-main'>
      {
        // ? işareti boş mu değil mi diye kontrol etmek için var
        courses ?.map( (course)=> (
          <Course key={course.id} course={course}/>
        ))
      }
      </div>
    </>
  )
}

export default App
