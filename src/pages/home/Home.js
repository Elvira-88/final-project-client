import React from 'react';

import './home.css';

export default function Home() {
    return (
        
        <div className="home">
            <div className="textUp">
                <p className="paragraph">Formatio es una escuela de negocios que apuesta por un modelo de aprendizaje moderno, flexible y adaptativo capaz de responder a las necesidades reales de las empresas y los profesionales que vivimos en una sociedad actual sometida a continuas transformaciones y constantes cambios. Nuestro objetivo es formar los nuevos líderes que demanda el mundo en el que vivimos; capaces de emprender, innovar y crear valor a sus compañías, sus empleados y a la sociedad de forma sostenible y rentable.</p>
                <h4 className="confucio">“Me lo contaron y lo olvidé; lo ví y lo entendí; lo hice y lo aprendí“ (Confucio)</h4>
            </div>
            <div className="homeCenter">
                <div className="textLeft">
                    <h3>¿Qué te proponemos?</h3>
                    <h4>Aprendizaje real</h4>
                    <p>Enfréntate a casos prácticos en los que aplicarás la materia aprendida y que te permitirán enfrentarte a situaciones que se darán en tu día a día en tu trabajo. Mediante simulación y role playing, aprenderás a resolver problemas y a tomar decisiones empresariales por tí mismo.</p>
                    <h4>Programas continuamente actualizados</h4>
                    <p>En una sociedad en la que el conocimiento evoluciona rápidamente, la enseñanza ha de hacerlo al mismo ritmo. Por eso, nuestros programas se actualizan en cada convocatoria, para que el alumno tenga acceso al aprendizaje más innovador, actualice sus conocimientos y se recicle como profesional.</p>
                    <h4>Profesores que son emprendedores de éxito</h4>
                    <p>Nuestros profesores son profesionales especializados en activo que conocen la realidad de las empresas, el entorno de trabajo y el mercado laboral. Están capacitados para transmitir ese conocimiento y experiencia a sus alumnos.</p>
                </div> 
                <div className="principalImg">
                    <img src="https://srvsbniisphp-universitatpolit.netdna-ssl.com/cdn_propintegral/sites/default/files/styles/ancho680px/public/noticia/66106/field_foto/gettyimages-1181607218.jpg" alt="Foto"/>
                </div>
                <div className="textRight">
                    <h3>¿Por qué elegir Formatio?</h3>
                    <p>Para aprender algo no basta con leerlo o que nos lo expliquen, tenemos que hacerlo. Porque aprender es un proceso donde acumulamos experiencia a partir de la práctica que luego podremos reutilizar en el futuro. </p>
                    <p>Aprenderás a responder preguntas que nunca nadie antes se había planteado. Además de competencias trabajamos tu Creatividad, tu Pensamiento Crítico, tu Capacidad para resolver Problemas y la Colaboración. Te formamos en las competencias y habilidades más innovadoras.</p>
                    <h4 className="learning">“El alumno está en el centro del aprendizaje”</h4>
                    <p>Nuestro objetivo es ofrecerte una experiencia única de aprendizaje, adaptada a tus necesidades. Cuéntanos tu caso, nosotros nos encargaremos de analizarlo y plantearemos el desarrollo del aprendizaje en función de lo que más te convenga.</p>
                    <p>Nuestra metodología es disruptiva: aprendizaje por proyectos, trabajo en equipo y seguimiento de mentores. Aceleramos la transferencia tecnológica y el conocimiento digital. Facilitamos la acumulación y la transferencia del conocimiento en la empresa.</p>
                </div>  
            </div>            
            <div className="textDown">
                <p className="paragraph">Texto abajo</p>
            </div>                   
            
        </div>
        
    )
}
