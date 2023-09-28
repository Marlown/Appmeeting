// CSVImportForm.js
import React, { useState } from 'react';
import DateInput from './Appcomponent/formulaire_import/DateInput';

function CSVImportForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données, y compris startDate et endDate, vers votre backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label>Contenu</label>
        <textarea name="content" />
      </div>
      <DateInput label="Date de début" selectedDate={startDate} onChange={handleStartDateChange} />
      <DateInput label="Date de fin" selectedDate={endDate} onChange={handleEndDateChange} />
      <button type="submit">Ajouter la publication</button>
    </form>
  );
}

export default CSVImportForm;
