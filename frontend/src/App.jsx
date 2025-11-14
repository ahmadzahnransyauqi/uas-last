import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <h2>Data dari backend:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App