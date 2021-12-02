var firebaseConfig = {
    apiKey: "AIzaSyDz7-gpjNDedwSP4Bhehvvr8Wkxdyaph54",
    authDomain: "kwitter-project-aa375.firebaseapp.com",
    databaseURL: "https://kwitter-project-aa375-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-aa375",
    storageBucket: "kwitter-project-aa375.appspot.com",
    messagingSenderId: "1010680000239",
    appId: "1:1010680000239:web:4232433c6de2f7cc66751a",
    measurementId: "G-ZHB728NZS0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }