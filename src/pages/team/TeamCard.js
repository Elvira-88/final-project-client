import React from 'react'

export default function TeamCard(props) {
    return (
   
        <div className="TeamCard">
            <img className="imgTeam"src={props.img} alt=""/>   
            <div className="teacherName">
            <h4>{props.name}</h4>
            <h4>{props.lastName}</h4>
            <p>{props.description}</p>   
            </div>  
               
      
        </div>

        
    )
}
