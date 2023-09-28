// DateInput.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CSVImportForm from './Appcomponent/formulaire_import/CSVImportForm';


function DateInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <DatePicker
        selected={props.selectedDate}
        onChange={props.onChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="yyyy/MM/dd HH:mm"
      />
    </div>
  );
}

export default DateInput;
