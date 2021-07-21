import {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import './hireCourse.css';

export default function HireCourse() {
    
    const [hireCourse, setHireCourse] = useState({});

    const {id} = useParams();

    const history = useHistory();

    const form = {
   
        "course_id": useParams().id
        
     };

    const { getAuthHeaders, isAuthenticated } = useAuthContext();

    const COURSES_URL = "http://localhost:8000/api/courses/";  

    const ENROLLMENTS_URL = "http://www.localhost:8000/api/enrollments";
    
    const handlePay = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: getAuthHeaders({"Content-type": "application/json"}),
            body: JSON.stringify(form)
        }

        if (!isAuthenticated) {
            alert("Accede con tu cuenta para contratar un curso")
            history.push("/login")
        } else {
            const response = await fetch(ENROLLMENTS_URL, options);
            // const data = await response.json();
            history.push("/courses")
        }    

    }
    
    useEffect(() => {
        fetch(`${COURSES_URL}${id}`)
        .then(response => response.json())
        .then(data => {
            setHireCourse(data);
        }) 
          
    }, [id])


    return (
        <div className="hireCourse">
            <h2>Curso: {hireCourse.name}</h2>
            <h2>Duración: {hireCourse.duration} horas</h2>
            <h1>Total a pagar: {hireCourse.price} €</h1>
            <div>   
                <h3>Método de pago</h3>                     
                <div>
                    <input type="radio" name="paymentMethod" id="paypalInput"></input>
                    <label for="paypalInput">Paypal</label>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" id="creditCardInput" checked></input>
                    <label for="creditCardInput">Tarjeta de crédito</label>
                </div>
                <div>
                    <input type="radio" name="paymentMethod" id="bizumInput" required></input>
                    <label for="bizumInput">Bizum</label>
                </div>   
                <button className="buttonPay" onClick={handlePay}>Pagar</button>           
            </div>  
        </div>
    )
}
