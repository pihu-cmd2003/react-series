import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Chai with code |priya yadav</h1>
    </div>
  )
}
// const  reactElement =
//     {
//         type : 'a' ,
//         props : {
//             href : 'https://google.com', 
//             target : '_blank'

//             },
//             Children : 'Click me to visit google'

// }

const anotherElement =(
  <a href="https://google.com" target='_blank'> visit google</a>
)

const anotheruser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  
  reactElement
)
