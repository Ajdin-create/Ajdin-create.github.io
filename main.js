
  var firebaseConfig = {
    apiKey: "AIzaSyCqhmHfsHM6yhbZklL7hXrBslkCK-CViEk",
    authDomain: "sinuous-crow-256819.firebaseapp.com",
    projectId: "sinuous-crow-256819",
    storageBucket: "sinuous-crow-256819.appspot.com",
    messagingSenderId: "41786061673",
    appId: "1:41786061673:web:2d02bd9d6b2a16ba47c3f8",
    measurementId: "G-DNCZVQNYLQ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 var messageRef = firebase.database().ref('messages');
 document.getElementById('submit-btn').addEventListener('click' , submit=(event) => {
     var name = getInputValue("name");
     var subject = getInputValue("subject");
     var email = getInputValue("email");
     var message = getInputValue("message");
 })

 function getInputValue(id){
     return document.getElementById(id).value 
 }
 function saveMessage (name,subject,email,message){
     var newMessageRef = messageRef.push();
     newMessageRef.set({
         name: name,
         subject:subject,
         email:email,
         message:message



     }) 
     alert("radi")
 }
