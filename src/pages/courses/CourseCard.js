import React from 'react'

export default function CourseCard(props) {
    return (
        <div>
            <h4>{props.name}</h4>
            <h4>{props.description}</h4>
            <h5>{props.teacher}</h5>
            <p>{props.duration}</p>
            {props.cursando
                ? <span>Cursando</span>
                : <button>Contratar</button>
            }
            <p>{props.price}</p>
        </div>
    )
}


