import {useState, useEffect} from "react";

import TeamCard from './TeamCard';
import './team.css';

export default function Team() {

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
                    <div className="teachers">
                        <TeamCard teacher = {teacher}/> 
                    </div>
                    
                )
            })}
                   
        </div>
    )
}

