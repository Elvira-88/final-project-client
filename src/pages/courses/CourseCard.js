import {useHistory} from "react-router-dom";

export default function CourseCard({course}) {
 
    const history = useHistory();

    function handleClick() {
        history.push(`/hire-course/${course.id}`);
    }

    return (
        <div>
            <h4>{course.name}</h4>
            <h4>{course.description}</h4>
            <h5>{course.teacher}</h5>
            <p>{course.duration}</p>
            {course.cursando
                ? <span>Cursando</span>
                // : <a href="/hire-course" onClick={pay}>Contratar</a>
                : <button onClick={handleClick}>Contratar {course.id}</button>
            }
            <p>{course.price}</p>
        </div>
    )
}


