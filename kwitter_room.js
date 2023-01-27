
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDT8NPBaMFAsQKen5g-8tSiBRN5sI9pI8s",
      authDomain: "kwitter-5b957.firebaseapp.com",
      projectId: "kwitter-5b957",
      storageBucket: "kwitter-5b957.appspot.com",
      messagingSenderId: "754717962039",
      appId: "1:754717962039:web:73242b3c60a8f3d17f34b2",
      measurementId: "G-DSXTPDBYSE"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div<<hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child (room_name).update({
      purpose:"adding room name"      
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

