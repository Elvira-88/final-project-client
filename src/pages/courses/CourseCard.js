import {useHistory} from "react-router-dom";

export default function CourseCard({course}) {
 
    const history = useHistory();

    function handleClick() {
        history.push(`/hire-course/${course.id}`);
    }

    return (
        <div>
            <h3>{course.name}</h3>
            <h4>{course.description}</h4>
            <h5>{course?.teacher?.name}</h5>
            <h5>{course?.teacher?.lastName}</h5>
            <p>{course.duration} horas</p>
            <p>{course.price} euros</p>
            {course.coursed
                ? <span>Cursando</span>
                : <button onClick={handleClick}>Contratar</button>
            }
            
        </div>
    )
}


