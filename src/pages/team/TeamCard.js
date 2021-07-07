import React from 'react'

export default function TeamCard({teacher}) {
    return (
   
        <div className="TeamCard">
            <img className="imgTeam"src={teacher.avatar} alt=""/>   
            <div className="teacherName">
                <h4>{teacher.name}</h4>
                <h4>{teacher.lastName}</h4>
                <p>{teacher.description}</p>   
            </div>                
      
        </div>

        
    )
}
