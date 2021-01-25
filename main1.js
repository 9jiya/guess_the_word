player1_score = 0;
player2_score = 0;
item = localStorage.getItem("name");
item1 = localStorage.getItem("name1");
console.log(item);
console.log(item1);
function quiz(){
document.getElementById("player1_name").innerHTML = item+":";
document.getElementById("player2_name").innerHTML = item1+":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML ="questionturn-"+ item;
document.getElementById("player_answer").innerHTML = "answerturn-"+item1;
}
function send(){
    v = document.getElementById("word").value;
    x =  v.toLowerCase();
    console.log("Word in the lower case",x);
    a = x.charAt(1);
    console.log(a);
    m = Math.floor(x.length/2);
    console.log(m);
    a1 = x.charAt(m);
    console.log(a1);
    y = x.length - 1;
    console.log(y);
    a2 = x.charAt(y);
    console.log(a2);
    r1 = x.replace(a,"_");
    r2 = r1.replace(a1,"_");
    r3 = r2.replace(a2,"_");
    console.log(r3);
 question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer1 = get_answer.toLowerCase();
    console.log("Answer in lower case",answer1);
    if(answer1 == x){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(answer1 != x){
        window.alert("Wrong Answer")
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn -"+item1;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn -"+item;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn -"+item1;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -"+item;
    }
    document.getElementById("output").innerHTML = "";
}