import React from 'react'

export default function TeamCard(props) {
    return (
        // <div className="TeamCard">
        //     <img src={props.img} alt=""/>
        //     <div>
        //         <h5>{props.name}</h5>
        //         <p>{props.paragraph}</p>
        //     </div>
        // </div>

        <div className="TeamCard">
            <div>
                {
                    props.teachers.map(teacher => {
                        return <div>
                                 <img src={teachers.img} alt=""/>
                                 <h4>{teachers.name} {teachers.lastname}</h4>
                                 <p>{teachers.description}</p>
                               </div>
                            
                    })
                }
                    
            </div>

        {/* // <img src={props.img} alt=""/>
        // <div>
        //     <h5>{props.name}</h5>
        //     <p>{props.paragraph}</p>
        // </div> */}
        </div>

        
    )
}
