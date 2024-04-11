import React from 'react';
import "./CardProjeto.css"

const CardProjeto = ({ imagem, texto, enderecoProjeto }) => {
  return (
    <div className="cardProjeto displayFlexCenterCenter">
        <img className='imagemDoProjeto' src={require(`../img/imagesDosProjetos/${imagem}`)} alt="Imagem do projeto" />
        <p className='paragrafoCard'>{texto}</p>
        <a className='botaoIrParaProjeto displayFlexCenterCenter' href={enderecoProjeto} target="_blank" rel="noopener noreferrer">Ir para o projeto</a>
    </div>
  );
};

export default CardProjeto;
