import './Header.css';
import '../../assets/styles/vars.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = () => {
    return(
        <nav className='header-navigation'>
            <div className='navigation'>
                <button className='arrow-left'>
                    <img src={smallLeft} alt='Seta Esquerda' />
                </button>
                <button className='arrow-right'>
                    <img src={smallRight} alt='Seta Direita' />
                </button>
            </div>
            <div className='header-search'>
                <img src={search} alt='' />
                <input id="search-input" 
                    maxLength="800" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                />
            </div>
            <div className='header-login'>
                <button className='subscribe'>Inscreva-se</button>
                <button className='login'>Entrar</button>
            </div>
        </nav>
    )
}

export default Header;