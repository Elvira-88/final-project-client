import React from 'react'

export default function CourseCard(props) {
    function pay() {
        var coursePay = props.id
    }

    return (
        <div>
            <h4>{props.name}</h4>
            <h4>{props.description}</h4>
            <h5>{props.teacher}</h5>
            <p>{props.duration}</p>
            {props.cursando
                ? <span>Cursando</span>
                : <a href="/hire-course" onClick={pay}>Contratar</a>
            }
            <p>{props.price}</p>
        </div>
    )
}


