//import react router
import { Link } from 'react-router-dom'

//import styles
import './Footer.css'

//import img
import ig from './assets/instagram.png'
import mail from './assets/mail.png'
import tel from './assets/telefono.png'
import wsp from './assets/whatsapp.png' 

const Footer = () =>{
    return(
        <footer>
            <section>
                <ul className='ul-footer'>
                    <li className='footer-bold'><Link className='footerLinks' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} to="/">Inicio</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 560, left: 0, behavior: "smooth",});}} to="/">Quienes somos</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} to="/productos">Producto</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} to="/contacto">Contacto</Link></li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'><Link className='footerLinks' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} to="/productos">Productos</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} to="/productos">Estopas</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 1420, left: 0, behavior: "smooth",});}} to="/productos">Trapos</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 2800, left: 0, behavior: "smooth",});}} to="/productos">TNT</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 3600, left: 0, behavior: "smooth",});}} to="/productos">Guatas</Link></li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'>Nosotros</li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 560, left: 0, behavior: "smooth",});}} to="/">Quienes somos</Link></li>
                    <li><Link className='footerLinks' onClick={() => {window.scroll({top: 560, left: 0, behavior: "smooth",});}} to="/">Envios</Link></li>
                </ul>
                <ul className='ul-footer'>
                    <li className='footer-bold'><Link className='footerLinks' onClick={() => {window.scroll({top: 0, left: 0, behavior: "smooth",});}} to="/contacto">Contacto</Link></li>
                    <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 5630</p></li>
                    <li className='contact-footer'><img className='contact-logos' src={tel} alt="" /><p>+598 2288 8083</p></li>
                    <li className='contact-footer'><img className='contact-logos' src={mail} alt="" /><p>tcc@adinet.com.uy</p></li>
                </ul>
                <div id='redes-aligin'>
                    <Link to="https://wa.me/+59898695831" target='_blank'><img className='redes-logos' src={wsp} alt="" /></Link>
                    <Link to="https://www.instagram.com/" target='_blank'><img className='redes-logos' src={ig} alt="" /></Link>
                </div>
            </section>
            <section className='footer-bottom'>
                <p id='copyright'>© 2024 Textil Cabrera SRL | Desarrollo web a cargo de Emiliano Rodriguez & Bruno Jorba</p>
            </section>
        </footer>
    );
}

export {Footer}