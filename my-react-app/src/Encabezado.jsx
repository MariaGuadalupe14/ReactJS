import miLogo from './assets/logo365.png';
import facebookImg from './assets/redes/facebook.png';
import instagramImg from './assets/redes/instagram.png';
import tiktokImg from './assets/redes/tik-tok.png';
import whatsappImg from './assets/redes/whatsapp.png';
import './Encabezado.css';


function Encabezado() {
    return (
        <div className="Encabezado">
            <Logo/>
            <Menu/>
            <Redes/>
            <h2>Bienvenido a mi Sitio</h2>
        </div>

    );
}


function Logo(){
    return (
        <div className="Logo img">
            <img src={miLogo} alt="React Logo" />
        </div>
    )
}

function Menu() {
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}

function Redes() {
    return (
        <div>
            <h3>Redes Sociales</h3>
            <ul>
                    <li><img src={facebookImg} alt="Facebook" width="50" /></li>
                    <li><img src={instagramImg} alt="Instagram" width="50" /></li>
                    <li><img src={tiktokImg} alt="TikTok" width="50"/></li>
                    <li><img src={whatsappImg} alt="WhatsApp" width="50" /></li>
            </ul>
        </div>
    );
}

export default Encabezado;