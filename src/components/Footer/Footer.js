import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
    return (
        <div className="footer">

            <div className="contact">
                <h3>Contacto</h3>
                <p>formatio@gmail.com</p>
                <p>629845536</p>
            </div>
           

            <div className="icons">
                <i className="fa fa-linkedin icon"></i>
                <i class="fa fa-twitter-square"></i>
                <i className="fa fa-instagram icon"></i>
                <i className="fa fa-facebook-square icon"></i>
            </div>       
    
            
        </div>
    )
}

