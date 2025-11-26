import { CardDifference } from '../../cardDifference'
import Tomato from "../../../assets/images/tomato.svg"
import Chef from "../../../assets/images/icon-chef.svg"
import Calendar from "../../../assets/images/icon-calendar.svg"
import Ambient from "../../../assets/images/icon-ambient.svg"
import './style.css'

export const SectionDifferences = () => {
    return (
        <section className="section-differences">
            <h2>Nossos<span>Diferenciais</span></h2>
            <div className='container-card-difference'>
                <CardDifference 
                img={Tomato}
                titulo="Ingredientes Frescos"
                paragrafo="Selecionados diariamente para garantir o melhor sabor."
                />
                 <CardDifference 
                img={Chef}
                titulo="Chef Especializado"
                paragrafo="Receitas únicas criadas por nosso chef premiado."
                />
                 <CardDifference 
                img={Ambient}
                titulo="Ambiente Aconchegante"
                paragrafo="Espaço perfeito para momentos especiais."
                />
                 <CardDifference 
                img={Calendar}
                titulo="Reserva Simples"
                paragrafo="Garanta sua mesa com apenas alguns cliques."
                />

            </div>
        </section>
        
    )
}