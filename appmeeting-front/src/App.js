import './App.css';
import React from 'react';
import CSVImportForm from './Appcomponent/formulaire_import/CSVImportForm';
import ImportBouton from './Appcomponent/bouton/ImportBouton';
import ExportBouton from './Appcomponent/bouton/ExportBouton';
import AfficheData from './Appcomponent/Affichage_data/AfficheData';



function App() {
  return (
    <div className="App">
      <CSVImportForm />
      <ImportBouton />
      <AfficheData />
      <ExportBouton />
    </div>

  );
}

export default App;


