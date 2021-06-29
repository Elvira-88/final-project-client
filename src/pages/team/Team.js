import {useState, useEffect} from "react";

import TeamCard from './TeamCard';
import './team.css';

export default function Team() {

    // const teachers = [
    //     {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},
    //     {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},
    //     {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},
    //     {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},

    // ];

    const [teachers, setTeachers] = useState([]);

    const TEACHERS_URL = "http://localhost:8000/api/teachers";

    useEffect(() => {
        fetch(TEACHERS_URL)
        .then(response => response.json())
        .then(data=>setTeachers(data))
    }, [])
    
    return (
        <div className="team">
            {teachers.map((teacher) => {
                return (
                    <TeamCard teacher = {teacher}/> 
                )
            })}
                   
        </div>
    )
}

