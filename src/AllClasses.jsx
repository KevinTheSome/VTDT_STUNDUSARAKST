import { useState,useEffect } from 'react'
import Classes from "./Classes"
import { useParams } from "react-router-dom";

const API = 'http://skrazzo.sites.hex.lv/projects/class-list/api.php';

function AllClasses(props){
    const {kurss} = useParams();
    const [data , setData] = useState([]);

    useEffect(() => {
      try {
        fetch(API)
      .then(response => response.json())
      .then(data => setData(data[kurss]))
      } catch (error) {
        console.error(error)
      }
    },[])

    const jsxMapDienas = data.map((value , key) => {
      return <Classes key={key} value={value}/>
    })

    return(
        <>
            <h1>{kurss}</h1>
            {jsxMapDienas}
        </>
    )
}
export default AllClasses;