import { useState } from 'react'
import OneClasses from './OneClass.jsx'

function Day(props) {
            //ustaii ciklu kas iet cauri un katrai dienai iedod tiaki lessenu 1 un teacher 1 
            //tagad padodas vis arrey
    return (
        <>
            <OneClasses lessen={props.lessens} teacher={props.teachers}/>
        </>
    )
}

export default Day