import {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import TeamCardEdit from "../admin/TeamCardEdit";

export default function AdminTeacherEdit() {  
     
    const [teachers, setTeachers] = useState([]);

    const {id} = useParams();  
  

    const TEACHERS_URL = "http://localhost:8000/api/teachers/";  
 
    useEffect(() => {
        fetch(`${TEACHERS_URL}${id}`)
        .then(response => response.json())
        .then(data => {
            setTeachers([data]);
        }) 
          
    }, [id])  

    return (
        <div className="teachers">          
       
        {teachers && teachers.map(teacher => {
            return (
                <div>                        
                    <TeamCardEdit teacher={teacher} />
                </div>                  
                          
            )
        })}        
    </div>
    )
}