import { useState,useEffect } from 'react'
import Kurss from './Kurss.jsx'

const API = 'http://skrazzo.sites.hex.lv/projects/class-list/api.php';

function App() {
  const [data , setData] = useState({});

  useEffect(() => {
    try {
      fetch(API)
    .then(response => response.json())
    .then(data => setData(data))
    } catch (error) {
      console.error(error)
    }
  },[])

  const jsxMapKursi = Object.keys(data).map((key, value) => {
    return <Kurss key={value} kurss={key}/>;
  })

  return (
    <>
      <div>
        <p>Last updated:{data["last-updated"]}</p>
          {jsxMapKursi}
      </div>
    </>
  )
}

export default App
 