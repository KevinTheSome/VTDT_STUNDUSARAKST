import { useState } from 'react'
import Day from "./Day"

function Classes({ value }) {

    const jsxMapKursi = Object.values(value).map((key, index) => {
        return <Day stundas={key} key={index} />;
    });

    return (
        <div>
            <h2>Diena</h2>
            {jsxMapKursi}
        </div>
    )
}

export default Classes