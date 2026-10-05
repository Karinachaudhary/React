import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users =[
    {
      img:'https://plus.unsplash.com/premium_photo-1789734822512-5e00e076afa1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
       img:'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1683134232738-4b7f451ab6b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'Pink',
      tag:'Underbanked'
    }
  ]
  return (
    <div >
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
