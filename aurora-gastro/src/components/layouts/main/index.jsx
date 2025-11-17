import './style.css';
import Illustration from "../../../assets/images/illustration-main.svg";

export const Main = () => {
    return (
        <>

            <main>
                <div className='content-main'>
                    <h1>A <span>melhor experiência</span> gastronômica da cidade</h1>
                    <p>Pratos frescos, preparados com ingredientes selecionados e finalizados com o toque especial do nosso chef, garantindo sabor e qualidade em cada mordida.</p>

                    <div className='conteiner-btn-main'>
                        <a className='btn-primary' href="">Peça agora</a>
                        <a className='btn-secondary' href="">Saiba mais</a>
                    </div>
                </div>
            <img src={Illustration} alt="" />
            </main>
        </>
    )
}