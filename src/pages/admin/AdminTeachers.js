import {useState, useEffect} from "react";
import TeamCard from '../team/TeamCard';
import { useAuthContext } from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

export default function Team() {

    const [teachers, setTeachers] = useState([]);

    const history = useHistory();

    function handleAdd() {
        history.push("/admin-teachers-add");
    }

    const TEACHERS_URL = "http://localhost:8000/api/teachers";

    const { getAuthHeaders, isAuthenticated } = useAuthContext(); 

    useEffect(() => {

        const options = isAuthenticated? {headers: getAuthHeaders({"Content-type": "application/json"})} : {};

        fetch(TEACHERS_URL, options)
        .then(response => response.json())
        .then(data=>setTeachers(data))
    }, [])
    
    return (
        <div className="team">
            <button onClick={handleAdd}>Añadir un profesor</button>
            {teachers.map((teacher) => {
                return (
                    <TeamCard teacher = {teacher}/> 
                )
            })}
                   
        </div>
    )
}
