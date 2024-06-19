
// import daaru from "./daaru"
// All the function names should start with Capital letter otherwise this error
// Warning: The tag <daaru> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
// at daaru
// at h1
// at App


// function App() {

//   return (
//     <h1>
//       Daaru aur React using vite
//       <daaru></daaru>
//     </h1>
//   )
// }

// export default App


// vite require .jsx extention
// you can also use .jsx in react app made by create react app for functions returning html

import Daaru from "./Daaru"


import React from 'react'

const App = () => {
  return (
    <>
    <h1>Daaru And React</h1>
    <Daaru></Daaru>
    </>
  )
}

export default App
