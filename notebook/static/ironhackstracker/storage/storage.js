var firebaseConfig = {
    apiKey: "AIzaSyD1m3YOF1sDsrMofN_gtOMLz378dNgaci8",
    authDomain: "statistics-notebooks-jupyter.firebaseapp.com",
    databaseURL: "https://statistics-notebooks-jupyter.firebaseio.com",
    projectId: "statistics-notebooks-jupyter",
    storageBucket: "statistics-notebooks-jupyter.appspot.com",
    messagingSenderId: "525463161270",
    appId: "1:525463161270:web:35fa1edc3d621183189917",
    measurementId: "G-TJV5EK5ET8"
};  

firebase.initializeApp(firebaseConfig);

const firestore = window.firebase.firestore();

var db = firebase.firestore();

let func = ()=>{
  db.collection("users").add({
    id: 12345,
    names: "Cristian",
    lastNames: "Baquero",
    university: "Universidad Nacional de Colombia",
    country: "Colombia",
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}

func();
