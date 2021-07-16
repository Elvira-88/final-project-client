import {useHistory} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";

export default function TeamCard({teacher}) {

     
    const history = useHistory();

    const {isAdmin, isAuthenticated} = useAuthContext();

    function handleEdit() {
        history.push(`admin-teacher-edit/${teacher.id}`);
    }

    return (
   
        <div className="TeamCard">
            <img className="imgTeam"src={teacher.avatar} alt=""/>   
            <div className="teacherName">
                <h4>{teacher.name}</h4>
                <h4>{teacher.lastName}</h4>
                <p>{teacher.description}</p>   
            </div> 
            {isAuthenticated && isAdmin() &&
                <button onClick={handleEdit}>Editar</button>
            }               
      
        </div>

        
    )
}
