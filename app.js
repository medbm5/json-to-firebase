const firebase=require("firebase");
const fs=require('fs');

var firebaseConfig = {
    apiKey: "AIzaSyBGtJe_nloVjWrJtmnbOmuS4QM5be_qE40",
    authDomain: "movies-cb314.firebaseapp.com",
    projectId: "movies-cb314",
    storageBucket: "movies-cb314.appspot.com",
    messagingSenderId: "201149802523",
    appId: "1:201149802523:web:dc46c8b30d2f7ee7bdf0be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

//redaing json 
let rawdata=fs.readFileSync('test.json');
let data=JSON.parse(rawdata);

const coll =data.data;

coll.forEach(function(obj) {
    db.collection("coll").add({
        id: obj.id,
        name: obj.name,
        description: obj.description
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});