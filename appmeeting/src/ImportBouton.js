import React from 'react';
//création d'un bouton pour importer les données 
function ImportBouton(props) {
  return (
    <button onClick={props.onClick}>Importer des données</button>
  );
}

export default ImportBouton;
