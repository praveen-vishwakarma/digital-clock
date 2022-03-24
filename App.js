import React, {useState}from 'react'

const App = () => {
  let newtime = new Date().toLocaleTimeString()

  const [currtime,setcurrtime] = useState(newtime)


  const updatetime = () =>{
    let newUpdatTime = new Date().toLocaleTimeString()
    setcurrtime(newUpdatTime)

  }
  setInterval(updatetime,1000)
  return(
    <>
      <h1>{currtime}</h1>
      <button onClick={updatetime}>Click me</button>
    </>
  )
}

export default App;
 