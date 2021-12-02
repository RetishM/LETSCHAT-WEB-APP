var firebaseConfig = {
    apiKey: "AIzaSyBFr_l8KuO8pFzsh0CYqjJoTcKKchCdGCY",
  authDomain: "kwitter-cd040.firebaseapp.com",
  databaseURL: "https://kwitter-cd040-default-rtdb.firebaseio.com",
  projectId: "kwitter-cd040",
  storageBucket: "kwitter-cd040.appspot.com",
  messagingSenderId: "170213296118",
  appId: "1:170213296118:web:31be8678ec72607491e9d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitterpage.html";
}
function getdata()
{
      firebase.database().ref("/").on('value',function (snapshot){
            document.getElementById("output").innerHTML=" ";
snapshot.forEach(function(childsnapshot){
      childKey=childsnapshot.key;
      Room_names=childKey;
      console.log("room name -"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });
});
} 
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitterpage.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="Index.html";
}