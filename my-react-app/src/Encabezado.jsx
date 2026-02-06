import miLogo from './assets/logo.png';
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
        </div>

    );
}


function Logo(){
    return (
        <div className="logoDiv">
            <img src={miLogo} alt="React Logo" />
        </div>
    )
}

function Menu() {
    return (
        <nav className="menuDiv">
    
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Acerca de</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Contacto</a></li>
                <li><a href='#'>Sucursales</a></li>
            </ul>
        </nav>
    );
}

function Redes() {
    return (
        <div className="redesDiv">
            <ul>
                    <li><a href='#'><img src={facebookImg} alt="Facebook" width="50" /></a></li>
                    <li><a href='#'><img src={instagramImg} alt="Instagram" width="50" /></a></li>
                    <li><a href='#'><img src={tiktokImg} alt="TikTok" width="50"/></a></li>
                    <li><a href='#'><img src={whatsappImg} alt="WhatsApp" width="50" /></a></li>
            </ul>
        </div>
    );
}

export default Encabezado;