import './App.css';
import React from 'react';
import CSVImportForm from './CSVImportForm'; // Appel de tout mes focntions 
import ImportBouton from './ImportBouton';
import ExportBouton from './ExportBouton';
import AfficheData from './AfficheData';



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


