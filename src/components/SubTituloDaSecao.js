import React from 'react';

import "./SubTituloDaSecao.css"

const SubTituloDaSecao = ({ titulo }) => {
  return (
    <div className="sectionTitle">
      <h3>{titulo}</h3>
    </div>
  );
};

export default SubTituloDaSecao;
