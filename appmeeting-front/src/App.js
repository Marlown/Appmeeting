import './App.css';
import React from 'react';
import CSVImportForm from './Appcomponent/formulaire_import/CSVImportForm';
import ImportBouton from './Appcomponent/bouton/ImportBouton';
import ExportBouton from './Appcomponent/bouton/ExportBouton';
import AfficheData from './Appcomponent/Affichage_data/AfficheData';



function App() {
  return (
    <div className="App">
      <h1>Iterface d'importation</h1>

      <div className="data-container">
        {/* Cadre "Données importer/exporter" */}
        <div className="data-section">
          <h2>Données importer/exporter</h2>

          {/* Bouton "Importer" */}
          <CSVImportForm />
          <button className="import-button">Importer des données</button>

          {/* Bouton "Exporter" */}
          <ExportBouton />
          <button className="export-button">Exporter des données</button>
        </div>
      </div>

      {/* Autres éléments de l'application */}
      <div className="other-section">
        {/* ... */}
      </div>
    </div>
  );
}

export default App;