
//Define some variables
//There are nine squares in the grid
sq1filled=false;
sq2filled=false;
sq3filled=false;
sq4filled=false;
sq5filled=false;
sq6filled=false;
sq7filled=false;
sq8filled=false;
sq9filled=false;
playon=true;
var val=0;
console.log(sq1);
filledarrayo=[];//will hold all the values of squares filled with a O.
filledarrayx=[];//will hold all the values of squares filled with X
var yourwins=0;//score
var computerwins=0;//score
var oxo="X";//Alternates between X and O
var count=0;//count how many moves have taken place
//If count = 9 and nobody won then it's a draw.
//9 squares which get filled with O and X's

updatescore();

function newgame() {//New Game button clicked
    playon=true;//true until gameover
    document.getElementById("turn").innerText="YOUR TURN";//display Your Turn message
    document.getElementById("turn").style.visibility="visible";//make the message visible
    count=0;//reset the count of how many times a square is filled
    document.getElementById("win").innerText="YOU'RE THE WINNER!";

    document.getElementById("win").style.visibility="hidden";
    filledarrayx=[];
    filledarrayo=[];
    oxo="X";//start off with X for each new game
    for (let i=1; i<10; i++) {

        c="sq"+i;
        document.getElementById(c).innerText="";
        document.getElementById(c).style.color="black";
        
    } 

}//End of function newgame()

function updatescore() {//both scores are updated by the valuespassed from the checkforawin function.
    document.getElementById("you").innerHTML="YOU&nbsp&nbsp&nbsp&nbsp"+yourwins;
    document.getElementById("computer").innerHTML="COMPUTER&nbsp&nbsp&nbsp"+computerwins;
   
  
}//End of function updatescore()

function fill(val) {//put a symbol in the box that was clicked by passing a unique numeral (val) which gets concatenated with 'sq' to become a string. This then becomes the identifying id for which box to put the  value of oxo, which alternates between an X and a O.
    if (playon==false) {return;}
    count+=1;
    console.log("Playon is ",playon);
    console.log("COUNT IS",count);
    if (count==9) {
        gameover();
        checkforawin();
       
    }
    console.log(val);
    sqid='sq'+val;
    //sqid is now the correct id for the intended box
    console.log(sqid);
    fillsquare=document.getElementById(sqid);
    console.log(fillsquare);
    console.log("oxo is ",oxo);
    if (!filledarrayo.includes(sqid) && !filledarrayx.includes(sqid)) {//make sure the square is not already filled. Only fill it if it is empty.
        console.log("THE SQUARE WAS EMPTY")
        fillsquare.innerText=oxo;//Either an X or a O
    }
    else {
        console.log("THE SQUARE WAS ALREADY FILLED")
        count-=1;//count was increased above even though the user clicked on an existing filled square, so we must subtract 1 from count
        return;//exit out of the function
    }
    
    
    //oxo is an X at the start of the game and alternates between X and O on each move played
   
    //The following code will cause the turns to alternate between X and O automatically
    if (oxo=="X") {
        filledarrayx.push(sqid);//monitor what squares have been filled with an X by keeping the unique id in an array to refer to later
        oxo="O";//change from previous value
        document.getElementById("turn").innerText="COMPUTER'S TURN"
    }
    else if (oxo=="O") {
        filledarrayo.push(sqid);//monitor what squares have been filled with an O
        oxo="X";//change back to X
        document.getElementById("turn").innerText="YOUR TURN"

    }

    
    console.log("Arrayx ",filledarrayx);
    console.log("Arrayo ",filledarrayo);
    checkforawin()
}//End of function fill()


function redborders(a) {
    console.log(a);
    document.getElementById(a).style.color="red"
    

}

function gameover() {
    updatescore();
    document.getElementById("turn").style.visibility="hidden";
    playon=false;
    document.getElementsByClassName("square").onclick="null";
}

function checkforawin() {//there are 8 possibilities of a win in terms of 3 horizontal winning lines, 3 vertical winning lines and 2 diagonal winning lines. Need to do 8 'if' checks for each player.
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq2') && filledarrayx.includes('sq3')) {
        sq1.style.color="red";
        sq2.style.color="red";
        sq3.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        
        gameover();
        
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq4') && filledarrayx.includes('sq7')) {
        sq1.style.color="red";
        sq4.style.color="red";
        sq7.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
       
    }
    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq6') && filledarrayx.includes('sq9')) {
        sq3.style.color="red";
        sq6.style.color="red";
        sq9.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq7') && filledarrayx.includes('sq8') && filledarrayx.includes('sq9')) {
        sq7.style.color="red";
        sq8.style.color="red";
        sq9.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq4') && filledarrayx.includes('sq5') && filledarrayx.includes('sq6')) {
        sq4.style.color="red";
        sq5.style.color="red";
        sq6.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq5') && filledarrayx.includes('sq9')) {
        sq1.style.color="red";
        sq5.style.color="red";
        sq9.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
      
    }
    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq5') && filledarrayx.includes('sq7')) {
        sq3.style.color="red";
        sq5.style.color="red";
        sq7.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq2') && filledarrayx.includes('sq5') && filledarrayx.includes('sq8')) {
        sq2.style.color="red";
        sq5.style.color="red";
        sq8.style.color="red";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    
    //Now check for computer win: 8 'if' checks. 
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq2') && filledarrayo.includes('sq3')) {
        sq1.style.color="red";
        sq2.style.color="red";
        sq3.style.color="red";
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
       

    }
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq4') && filledarrayo.includes('sq7')) {
        sq1.style.color="red";
        sq4.style.color="red";
        sq7.style.color="red";
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq3') && filledarrayo.includes('sq6') && filledarrayo.includes('sq9')) {
        sq3.style.color="red";
        sq6.style.color="red";
        sq9.style.color="red";
         document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq7') && filledarrayo.includes('sq8') && filledarrayo.includes('sq9')) {
        sq7.style.color="red";
        sq8.style.color="red";
        sq9.style.color="red";
         document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq4') && filledarrayo.includes('sq5') && filledarrayo.includes('sq6')) {
        sq4.style.color="red";
        sq5.style.color="red";
        sq6.style.color="red";
         document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
      
    }
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq5') && filledarrayo.includes('sq9')) {
        sq1.style.color="red";
        sq5.style.color="red";
        sq9.style.color="red";
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
       
    }
    if (filledarrayo.includes('sq3') && filledarrayo.includes('sq5') && filledarrayo.includes('sq7')) {
        sq3.style.color="red";
        sq5.style.color="red";
        sq7.style.color="red";
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq2') && filledarrayo.includes('sq5') && filledarrayo.includes('sq8')) {
        sq2.style.color="red";
        sq5.style.color="red";
        sq8.style.color="red";
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
      
    }
    if(count==9 && playon==true) {
        document.getElementById("win").innerText="DRAW!";
        document.getElementById("win").style.visibility="visible";
        gameover();   


    }
    


updatescore();
}//End of function checkforawin()


