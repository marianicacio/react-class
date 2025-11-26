import './style.css'

export const CardDifference = ({img, titulo, paragrafo}) => {
    return (
        <div className="card-difference">
            <img src={img} alt="" />
            <h3>{titulo}</h3>
            <p>{paragrafo}</p>
        </div>
    )
}