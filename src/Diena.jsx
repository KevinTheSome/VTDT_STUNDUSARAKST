import { useState } from 'react'
import Stunda from "./Stunda"

function Diena(props) {
    const stundas = ["pirmāstundas", "Otradineas","Trešdienas","Ceturdiena"];

    return (
        <div>
            <h2>{props.name}</h2>
            <ol>
                {stundas.map((stund) => (
                    <Stunda stunda={stund} kabinets={stund} skolotajs={stund} />
                ))}
            </ol>
        </div>
    )
}

export default Diena