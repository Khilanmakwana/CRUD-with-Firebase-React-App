import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="row">
      <div className = "col-md-8 offset-md-1"></div>
      <Contacts/>
      
    </div>
  );
}

export default App;
