import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function HireCourse() {
    
    const [hireCourse, setHireCourse] = useState({});

    const {id} = useParams();

    const COURSES_URL = "http://localhost:8000/api/courses/";    
    
    useEffect(() => {
        fetch(`${COURSES_URL}${id}`)
        .then(response => response.json())
        .then(data => {
            setHireCourse(data);
        }) 
          
    }, [id])


    return (
        <div>
            <h3>Nombre del curso: {hireCourse.name}</h3>
            <h3>Duración: {hireCourse.duration} horas</h3>
            <h1>Total a pagar: {hireCourse.price} €</h1>
            <div>   
                <h4>Método de pago</h4>        
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
                <button>Pagar</button>           
            </div>  
        </div>
    )
}
