import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCwuIlrqo2Go7JdhXhL5bL04_LqQ7QtsIw",
  authDomain: "react-crud-691a4.firebaseapp.com",
  databaseURL: "https://react-crud-691a4.firebaseio.com",
  projectId: "react-crud-691a4",
  storageBucket: "react-crud-691a4.appspot.com",
  messagingSenderId: "162789587136",
  appId: "1:162789587136:web:6b565fddacacd60153d525",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
