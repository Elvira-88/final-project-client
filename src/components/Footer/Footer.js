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
                <i className="fa fa-linkedin fa-2x icon"></i>
                <i className="fa fa-twitter-square fa-2x icon"></i>
                <i className="fa fa-instagram fa-2x icon"></i>
                <i className="fa fa-facebook-square fa-2x icon"></i>
            </div>       
    
            
        </div>
    )
}

