import React, { useState } from "react";


function CSVImportForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Gère la soumission du formulaire
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Veuillez sélectionner un fichier CSV.");
      return;
    }

    // Ici, vous pouvez appeler une fonction pour traiter le fichier CSV (par exemple, en utilisant csv-parser)
    // Une fois les données importées, ils sont stocker dans le composant ou  envoyer à votre backend(bdd docker à configurer).

    // Exemple : Traitement fictif du fichier CSV
    const data = await processCSV(selectedFile);
    console.log("Données importées :", data);
  };

  // Fonction pour traiter le fichier CSV
  const processCSV = async (file) => {
    // Ici, on utilise la bibliothèque csv-parser pour lire le fichier CSV
    // Déjà installer avec la commande : npm install csv-parser

    // Exemple fictif de traitement du fichier CSV
    const parsedData = [
      { name: "John", email: "john@example.com" },
      { name: "Alice", email: "alice@example.com" },
    ];

    return parsedData;
  };

  // Gère la sélection du fichier
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  //affichage du formulaire sur la page avec les submites.
  return (
    <div>
      <h2>Importer des données depuis un fichier CSV</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="file" accept=".csv" onChange={handleFileSelect} />
        <button type="submit">Importer</button>
      </form>
    </div>
  );
}

export default CSVImportForm;
