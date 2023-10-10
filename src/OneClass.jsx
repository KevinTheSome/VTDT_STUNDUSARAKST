import { useState } from 'react'

function OneClass(props) {
    return (
        <div>
            <p>{props.lessen} / {props.teacher}</p>
        </div>
    )
}

export default OneClass