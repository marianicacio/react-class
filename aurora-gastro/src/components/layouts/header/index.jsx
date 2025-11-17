import "./style.css"
import Logo from "../../../assets/images/logo-restaurante.svg"

export const Header = () => {

    return (

        <>
            <header>
                <img src={Logo} alt="" />
                <nav className="nav-header">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Cardápio</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
                <nav className="header-button">
                    <a href="">Reserve agora</a>
                </nav>
            </header>
        </>

    )

}