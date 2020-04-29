import React, { useState, useEffect } from "react";
import ContactForm from "./contactForm";
import firebaseDb from "../firebase";

const Contacts = () => {
  var [contactObjects, setcontactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setcontactObjects({
          ...snapshot.val(),
        });
    });
  }, []);

  const addOrEdit = (obj) => {
    firebaseDb.child("contacts").push(obj, (err) => {
      if (err) console.log(err);
    });
  };
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm addOrEdit={addOrEdit} />
        </div>
        <div className="col-md-7">
          <table className = "table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(contactObjects).map(id=>{
                  return <tr key={id}>
                    <td>{contactObjects[id].fullName}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].email}</td>
                    <td></td>

                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
