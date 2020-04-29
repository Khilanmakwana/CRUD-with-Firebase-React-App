import Reach from 'react';
import ContactForm from "./contactForm"

const Contacts = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Contact Register</h1>
      </div>
    </div>
    <div className ="row">
        <div className = "col-md-5">
            <ContactForm/>
        </div>    
    </div>
  );
};

export default Contacts;
