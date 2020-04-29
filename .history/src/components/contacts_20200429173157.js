import React from "react";
import ContactForm from "./contactForm";

const Contacts = () => {

  const addOrEdit = obj => {

  }
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-7">
          <div>List of Contacts</div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
