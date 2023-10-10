import { useState } from 'react'
import Day from "./Day"

function Classes(props) {

    const jsxMapKursi = Object.values(props.value).map((value , key) => {
        return <Day teachers={props.value["teachers"]} lessens={props.value["classes"]} key={props.value} />
    })

    return (
        <div>
            <h2>idk</h2>
            {jsxMapKursi}
        </div>
    )
}

export default Classes