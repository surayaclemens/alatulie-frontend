import './Header.scss';
import arrow from '../../assets/images/arrow-blue.svg'

function Header() {
    return (
        <header className="header">  
            <img className="header__arrow" src={arrow}/>
        </header>
    )
}

export default Header;