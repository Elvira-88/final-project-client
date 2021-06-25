import React from 'react'

export default function HireCourse() {
    
    //TODO: creamos un estado con la info del curso
    //TODO: obtener parametro id
    //TODO: hacer una peticion para obtener la info del curso de ese ID y actualizamos el estado



    return (
        <div>
            {/* TODO: Imprimimos nuestro estado con la info del curso */}
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
            </div>  
        </div>
    )
}
