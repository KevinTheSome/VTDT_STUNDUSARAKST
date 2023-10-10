import { useState } from 'react'
import OneClass from './OneClass.jsx'

function Day({ stundas }) {
    
    return (
        <>
            <OneClass stundas={stundas}/>
        </>
    )
}

export default Day