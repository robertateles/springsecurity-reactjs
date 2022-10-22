import React from "react"

function Card({imagem, title, oldPrice, price }){
    return(
        <div>
                <img src={imagem} alt={title} />
                <div className="content1">
                    <h4>{title}</h4>
                    <p>Ida e Volta</p>
                    <span>R${oldPrice}</span>
                    <div className="preco">R${price}</div>
                    <a href="#" className="btn">Comprar</a>
                </div>
        </div>
    )
}

export default Card;


