//YOUR FIRE BASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyB_qIlkF1i67EKWUaiielRd7eWpjTz04bc",
  authDomain: "chat-web-app-76ff6.firebaseapp.com",
  databaseURL: "https://chat-web-app-76ff6-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-76ff6",
  storageBucket: "chat-web-app-76ff6.appspot.com",
  messagingSenderId: "541256101004",
  appId: "1:541256101004:web:5c5ca0836e098953b4dfa9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         
//End code
      } });  }); }
getData();

