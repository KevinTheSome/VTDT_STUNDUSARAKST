import { useState } from 'react'
import Diena from './Diena.jsx'
import Kurss from './Kurss.jsx'
import Stundas from './stunda.json'

const API = 'http://skrazzo.sites.hex.lv/projects/class-list/db.json';
var Data = Stundas;

function App() {
const Dienas = ["Pirmdiena","Otradiena","Trešdiena","Ceturdiena","Piekdien"]; 

  // fetch(API)
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
  console.log(Data);

  return (
    <>
      <div>
        {Object.keys(Data).map((value, key) => {
          console.log(key + ":" + value);
          <Kurss key={key} kurss={value[key]}/>
        })}

        {/* {Dienas.map((diena , i) => (
          <Diena key={i} name={diena} />
        ))} */}
      </div>
    </>
  )
}

export default App
