//import react
import { useState } from 'react'

//import i18n
import { useTranslation } from 'react-i18next';

//import styles
import './NavBar.css'

//import react router
import { NavLink } from 'react-router-dom'

//import img
import logo from './assets/logo.png'
import esp from './assets/esp.png'
import eng from './assets/eng.png'
import arrow from './assets/arrowDown.svg'
import menu from './assets/menu.svg'

const NavBar = () =>{
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [isLangExpanded, setIsLangExpanded] = useState(false); 
    const [isNavExpanded,  setIsNavExpanded] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleNavClick = (path) => {
        setIsNavExpanded(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <nav>
            <div className='mobile-nav'>
                <NavLink to="/"><img id='logo' src={logo} alt="logo tcc" /></NavLink>
                <div className='menuIconBox' onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                    <img id='menuIcon' src={menu} alt=""/>
                </div>
            </div>
            <ul className={isNavExpanded ? "navItems active" : "navItems"} id='navItems'>
                <li><NavLink to="/" onClick={() => handleNavClick('/')}>{t('HomeNavBar')}</NavLink></li>
                <li><NavLink to="/productos" onClick={() => handleNavClick('/productos')}>{t('ProductsNavBar')}</NavLink></li>
                <li><NavLink to="/contacto" onClick={() => handleNavClick('/contacto')}>{t('ContactUsNavBar')}</NavLink></li>
                <li className='languageMobile'>
                    <img src={eng} alt="eng" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('en'); }}/>
                    <img src={esp} alt="esp" onClick={() => {setIsNavExpanded(!isNavExpanded); changeLanguage('es'); }}/>
                </li>
            </ul>
            <div className='language' onClick={() => {setIsLangExpanded(!isLangExpanded);}}>
                <button className='languageVisibleButton'>
                    <div>
                        <img src={i18n.language == 'en' ? eng : esp} alt="bandera" />
                        <p>{i18n.language == 'en' ? 'English' : 'Español'}</p>
                    </div>
                    <img id='arrow' src={arrow} alt="" style={{rotate: isLangExpanded == true ? '180deg' : '0deg'}}/>
                </button>
                <div className={isLangExpanded ? "languageDropdown active" : "languageDropdown"}>
                    <div className='languageDropdownList'>
                        <button style={{display: i18n.language == 'en' ? 'flex' : 'none'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('es'); }}>
                            <img src={esp} alt="bandera" />
                            <p>Español</p>
                        </button>
                        <button style={{display: i18n.language == 'es' ? 'flex' : 'none'}} onClick={() => {setIsLangExpanded(!isLangExpanded); changeLanguage('en');}}>
                            <img src={eng} alt="bandera" />
                            <p>English</p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export {NavBar}