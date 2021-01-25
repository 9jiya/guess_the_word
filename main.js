function addUser(){
   x = document.getElementById("player1_name_input").value;
   x1 = document.getElementById("player2_name_input").value;
   localStorage.setItem("name",x);
   localStorage.setItem("name1",x1);
   window.location="index1.html";
}