import React from "react";
import ContactForm from "./contactForm";

const Contacts = () => {
  return (
    <React.Fragment>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <contactForm />
        </div>
        <div className="col-md-7">
          <div>List of Contacts</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
