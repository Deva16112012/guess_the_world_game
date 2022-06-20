function b(){
x=localStorage.getItem("pls");
c=localStorage.getItem("pls1");
s1=0;
s2=0;
document.getElementById("player1_name").innerHTML=x+":";
document.getElementById("player2_name").innerHTML=c+":";
document.getElementById("sn").innerHTML=s1;
document.getElementById("sn1").innerHTML=s2;
document.getElementById("q").innerHTML="Question turn - "+x;
document.getElementById("qt").innerHTML="Answer turn - "+c;
}
function s(){
    z=document.getElementById("word").value;
    a=z.toLowerCase();
    console.log("word is converted to lowercase", a);

    c1=a.charAt(1);
    console.log(c1);
    
    c2=Math.floor(a.length/2);
    c12=a.charAt(c2);
    console.log(c12);

    lm=a.length-1;
    lm1=a.charAt(lm);
    console.log(lm1);

    r1=a.replace(c1,"_");
    r2=r1.replace(c12,"_");
    r3=r2.replace(lm1,"_");
    console.log(r3);

    q1="<h4 id='word_display'> Q. "+r3+"</h4>";
    q2="<br> Answer : <input type='text' id='input1'>";
    q3="<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    r=q1+q2+q3;
    document.getElementById("output").innerHTML=r;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function Check(){
    w=document.getElementById("input1").value;
    d=w.toLowerCase();
    console.log(d);
    if(d == a){
        if(answer_turn == 'player1'){
            s1=s1+1;
            document.getElementById("sn").innerHTML=s1;
        }
        else{
            s2=s2+1;
            document.getElementById("sn1").innerHTML=s2;
        }
    }
            if(question_turn == 'player1'){
        question_turn="player2";
        document.getElementById("q").innerHTML="Question turn - "+c;
    }
    else{
        question_turn="player1";
        document.getElementById("q").innerHTML="Question turn - "+x;
    }
    if(answer_turn == 'player1'){
        answer_turn="player2";
        document.getElementById("qt").innerHTML="Answer turn - "+c;
    }
    else{
        answer_turn="player1";
        document.getElementById("qt").innerHTML="Answer turn - "+x;
    }
}