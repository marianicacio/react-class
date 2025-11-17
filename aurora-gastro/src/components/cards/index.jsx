export const Card = (titulo, subtitulo, image) => {
    return (
        <>
            <article>
                <img src={image} alt="" />
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </article>
        </>
    )
}