import React from 'react';

import './home.css';

export default function home() {
    return (
        
        <div className="home">
            <div className="textUp">
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error magnam quisquam deserunt, vero laborum, non maxime consectetur alias aliquam numquam nemo! Qui fugiat non totam rerum tenetur, cum voluptates cupiditate est fuga officia nemo natus id porro exercitationem rem quod ea ipsam accusantium quo sequi eligendi asperiores? Ut, expedita quam!</p>
            </div>
            <div className="homeCenter">
                <div className="textLeft">
                    <p>¿Quieres mejorar el rendimiento de tu empresa?</p>
                    <p>¿Necesitas formación?</p>
                </div> 
                <div className="principalImg">
                    <img src="https://srvsbniisphp-universitatpolit.netdna-ssl.com/cdn_propintegral/sites/default/files/styles/ancho680px/public/noticia/66106/field_foto/gettyimages-1181607218.jpg" alt="Foto"/>
                </div>
                <div className="textRight">
                    <p>¿Quieres mejorar el rendimiento de tu empresa?</p>
                    <p>¿Necesitas formación?</p>
                </div>  
            </div>            
            <div className="textDown">
                <p className="paragraph">Texto abajo</p>
            </div>    
            
        </div>
        
    )
}
