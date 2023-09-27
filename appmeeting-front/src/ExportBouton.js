import React from 'react';
//création d'un bouton pour exporter des données 
function ExportBouton(props) {
  return (
    <button onClick={props.onClick}>Exporter des données</button>
  );
}

export default ExportBouton;
