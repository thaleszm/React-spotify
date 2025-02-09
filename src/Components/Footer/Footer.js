import './Footer.css';
import '../../assets/styles/vars.css';

const Footer = () => {
    return(
        <footer className='premium-footer'>
            <div className='text'>
            <p className="premium-footer__title">Testar o Premium de graça</p>
                <p className="premium-footer__subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                    </p>
            </div>
            <div className='button'>
                <button>Inscreva-se grátis</button>
            </div>
        </footer>
    )
}

export default Footer;