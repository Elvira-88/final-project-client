import TeamCard from './TeamCard';
import './team.css';

export default function team() {

    const teachers = [
        {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},
        {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},
        {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},
        {img:"https://www.blixt.tv/wp-content/uploads/2019/02/fotos-para-cv.-laura-bosh.jpg", name: "Lorena", lastName: "Martínez Crespo", description: "Psicóloga experta en rrhh"},

    ];
    
    return (
        <div className="team">
            {teachers.map((teacher) => {
                return (
                    <TeamCard img = {teacher.img} name = {teacher.name} lastName = {teacher.lastName} description = {teacher.description}/> 
                )
            })}
                   
        </div>
    )
}

