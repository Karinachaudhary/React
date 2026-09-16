import React from 'react'
// import Card from './components/Card'
// import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  const arr= [1,2,3,44,4]
  return (
<>
<div className="parent">
{arr.map(function(elem){
  return <h1>{elem/2}</h1>
})
}
    </div>        
 


</>
  )
}

export default App
