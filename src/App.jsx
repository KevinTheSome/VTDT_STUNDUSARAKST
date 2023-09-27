import { useState } from 'react'
import Diena from './Diena.jsx'
import Stundas from './stunda.json'

const API = 'http://skrazzo.sites.hex.lv/projects/class-list/db.json';
var Data;

function App() {
const Dienas = ["Pirmdiena","Otradiena","Trešdiena","Ceturdiena","Piekdien"]; 

  fetch(API)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <>
      <div>
        {Dienas.map((diena) => (
          <Diena name={diena} />
        ))}
      </div>
    </>
  )
}

export default App
