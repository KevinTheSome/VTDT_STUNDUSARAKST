import { useState } from 'react'

function Stunda(props) {
    return (
        <div>
            <p>{props.stunda} / {props.kabinets} / {props.skolotajs}</p>
        </div>
    )
}

export default Stunda