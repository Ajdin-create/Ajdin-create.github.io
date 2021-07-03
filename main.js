
  var firebaseConfig = {
    apiKey: "AIzaSyDlSb_ebX-sUywwIdtDX4L-8zOhxzmTP8o",
    authDomain: "messages-9ff1d.firebaseapp.com",
    databaseURL: "https://messages-9ff1d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "messages-9ff1d",
    storageBucket: "messages-9ff1d.appspot.com",
    messagingSenderId: "733528564702",
    appId: "1:733528564702:web:f27c56e0f431f87ff9734f",
    measurementId: "G-2P7DENP0YK"
    
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

     saveMessage(name,subject,email,message)
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
     alert("Your message is sent successfully!")
 }
