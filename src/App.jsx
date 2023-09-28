import { useState } from 'react'
import Diena from './Diena.jsx'
import Kurss from './Kurss.jsx'

const API = 'http://skrazzo.sites.hex.lv/projects/class-list/api.php';

function App() {
  const [data , setData] = useState("none");
  {if (data == "none"){
    fetch(API)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error("fetch error: " + error))};
  }
  return (
    <>
      {console.log(data)}
      <div>
        <p>Last updated:{data["last-updated"]}</p>

        {Object.entries(data).map((key, value) => {
          return <Kurss key={key} kurss={value}/>;
        })}
      </div>
    </>
  )
}

export default App
