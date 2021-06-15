import React from 'react'

export default function CourseCard(props) {
    return (
        <div>
            <h4>{props.name}</h4>
            <h4>{props.description}</h4>
            <p>{props.duration}</p>
        </div>
    )
}
