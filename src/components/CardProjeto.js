import React from 'react';

const CardProjeto = ({ imagem, texto, enderecoProjeto }) => {
  return (
    <div className="card-projeto">
        <img src={require(`../img/${imagem}`)} alt="Imagem do projeto" />
        <p>{texto}</p>
        <a href={enderecoProjeto} target="_blank" rel="noopener noreferrer">Ir para o projeto</a>
    </div>
  );
};

export default CardProjeto;
