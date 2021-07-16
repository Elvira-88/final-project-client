import {useState, useEffect} from "react";
import TeamCard from '../../team/TeamCard';
import { useAuthContext } from "../../../context/AuthContext";
import {useHistory} from "react-router-dom";
import "./adminteachers.css";

export default function AdminTeachers() {

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
        <div className="adminTeam">
            <div className="buttonAddTeacher">
            <button onClick={handleAdd}>Añadir un profesor</button>
            </div>
            <div className="adminTeachers">
                {teachers.map((teacher) => {
                    return (
                        <TeamCard teacher = {teacher}/> 
                    )
                })}
                </div>
         
                   
        </div>
    )
}
