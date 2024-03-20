//In this version, the computer plays automatically against
//a human opponent
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
active=true;//will allow computer to make a move if true
var random=0;//will be used to hold a random integer
var randchoice="";
var val=0;
human=false;
draw=false;
console.log(sq1);
empty=[1,2,3,4,5,6,7,8,9];//A value gets removed every time a move is made
filledarrayo=[];//will hold all the values of squares filled with a O.
filledarrayx=[];//will hold all the values of squares filled with X
var yourwins=0;//score
var computerwins=0;//score
var oxo="X";//In this version we keep oxo as 'X'
var count=0;//count how many moves have taken place
//If count = 9 and nobody won then it's a draw.
//9 squares which get filled with O and X's

updatescore();

function newgame() {//New Game button clicked
    active=true;
    draw=false;
    empty=[1,2,3,4,5,6,7,8,9];
    playon=true;//true until gameover
    human=false;
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
        //The above line makes sure to reset the colour of the X to black
        //as it was changed to red
        
    } 
}//End of function newgame()

function emptyit(val) {//function to remove a particular value from an array
    //the length of the array drops by 1 every time a move is made
    for( var i = 0; i < empty.length; i++){ 
    
        if ( empty[i] === val) { 
    
            empty.splice(i, 1); 
        }
    }
    console.log("The empty array contains ",empty);
}

function getrandint(){//get a random number to generate a random choice
    
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(4);
        random = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        random*=2;
        if(random==2) {
            randchoice="sq2";
        }
        if(random==4) {
            randchoice="sq4";
        }
        if(random==6) {
            randchoice="sq6";
        }
        if(random==4) {
           randchoice="sq8";
        }
}//End of getrandint()
getrandint();
getrandint();
console.log("randchoice is ",randchoice);



function updatescore() {//both scores are updated by the valuespassed from the checkforawin function.
    document.getElementById("you").innerHTML="YOU&nbsp&nbsp&nbsp&nbsp"+yourwins;
    document.getElementById("computer").innerHTML="COMPUTER&nbsp&nbsp&nbsp"+computerwins;
    
}//End of function updatescore()

function compchoice() {//function to calculate the choice of the computer
    //and display the move on the board. 
    //There are many different possibilities to be looked at.
    //The computer will be playing 'O'
    //Initial strategy is to play the center square if available
    turn.style.visibility="hidden";
    var delayInMilliseconds = 700; //cause a slight delay before displaying the computer's move.

    setTimeout(function() {
    //code to be executed after a short delay
    if (draw) {
        return;//if a draw, exit out of the function.
    }
    if (human) {
        return; //human player has won so exit out of the function.
    }

    if (!filledarrayx.includes('sq5') && !filledarrayo.includes('sq5')) {
        sq5.innerText="O";
        filledarrayo.push('sq5');
        val=5;
        emptyit(5);
        return;//move has been made, so come out of the function
    }
    if (filledarrayx.includes('sq5') && filledarrayx.length==2 && !filledarrayo.includes('sq2') && !filledarrayx.includes('sq2') && !filledarrayx.includes('sq3') && !filledarrayx.includes('sq9') &&!filledarrayx.includes('sq4') && !filledarrayx.includes('sq6') && !filledarrayx.includes('sq7')) {
        sq2.innerText="O";
        filledarrayo.push('sq2');//may want to change this
        emptyit(2);
        return;

    }

    if (filledarrayx.includes('sq2') &&  filledarrayx.includes('sq5') && !filledarrayx.includes('sq8') && !filledarrayo.includes('sq8')) {
        sq8.innerText="O";
        filledarrayo.push('sq8');//may want to change this
        emptyit(8);
        return;

    }

    if (filledarrayx.includes('sq5') && filledarrayx.length==2 && filledarrayo.includes('sq1') && filledarrayx.includes('sq2') && !filledarrayo.includes('sq8')) {
        sq8.innerText="O";
        filledarrayo.push('sq8');//may want to change this
        emptyit(8);
        return;

    }


    if (filledarrayx.includes('sq5') && filledarrayx.length==2 && filledarrayx.includes('sq6')) {
        sq4.innerText="O";
        filledarrayo.push('sq4');//may want to change this
        emptyit(4);
        return;

    }
    if (filledarrayx.includes('sq5') && filledarrayx.includes('sq7') && !filledarrayx.includes('sq3') && !filledarrayo.includes('sq3')) {
        sq3.innerText="O";
        filledarrayo.push('sq3');//may want to change this
        emptyit(3);
        return;

    }

    


    if (filledarrayx.includes('sq5') && filledarrayx.length==2 && filledarrayx.includes('sq4')) {
        sq6.innerText="O";
        filledarrayo.push('sq6');//may want to change this
        emptyit(6);
        return;

    }

    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq5') && !filledarrayx.includes('sq7') && !filledarrayo.includes('sq7')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');//may want to change this
        emptyit(7);
        return;

    }

    
    if (filledarrayx.includes('sq5') && filledarrayx.includes('sq9') && filledarrayo.includes('sq1') && !filledarrayx.includes('sq7') && !filledarrayo.includes('sq7')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');//may want to change this
        emptyit(7);
        return;

    }

    
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq5') && !filledarrayx.includes('sq9') && !filledarrayo.includes('sq9')) {
        sq9.innerText="O";
        filledarrayo.push('sq9');
        emptyit(9);
        checkforawin();
        return;

    }

    
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq7') && !filledarrayx.includes('sq4') && !filledarrayo.includes('sq4')) {
        sq4.innerText="O";
        filledarrayo.push('sq4');//may want to change this
        emptyit(4);
        checkforawin();
        return;

    }


    if (filledarrayx.includes('sq5') && filledarrayx.length==1 && !filledarrayo.includes('sq1')) {
        sq1.innerText="O";
        filledarrayo.push('sq1');//may want to change this
        emptyit(1);
        return;

    }
    if (filledarrayx.length==2 && !filledarrayx.includes('sq1') && !filledarrayx.includes('sq6') && !filledarrayo.includes('sq1') && !filledarrayx.includes('sq3')) {
        sq1.innerText="O";
        filledarrayo.push('sq1');
        emptyit(1);
        return;
    }

    if (filledarrayx.length==2 && filledarrayx.includes('sq2') && filledarrayx.includes('sq6') && filledarrayo.includes('sq5')) {
        sq3.innerText="O";
        filledarrayo.push('sq3');
        emptyit(3);
        return;
    }

    if (filledarrayx.length==2 && filledarrayx.includes('sq6') && filledarrayx.includes('sq8') && filledarrayo.includes('sq5')) {
        sq9.innerText="O";
        filledarrayo.push('sq9');
        emptyit(9);
        return;
    }

    if (filledarrayx.length==3 && filledarrayx.includes('sq3') && filledarrayx.includes('sq8') && filledarrayo.includes('sq5') && !filledarrayx.includes('sq7') && !filledarrayo.includes('sq7')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');
        emptyit(7);
        return;
    }

    if (filledarrayx.length==3 && filledarrayx.includes('sq2') && filledarrayx.includes('sq6') && filledarrayo.includes('sq5') && filledarrayx.includes('sq7') && !filledarrayo.includes('sq1') && !filledarrayx.includes('sq1')) {
        sq1.innerText="O";
        filledarrayo.push('sq1');
        emptyit(1);
        return;
    }

    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq6') && filledarrayx.includes('sq8') && filledarrayo.includes('sq5') && filledarrayo.includes('sq9') && !filledarrayx.includes('sq7') && !filledarrayo.includes('sq7')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');
        emptyit(7);
        return;
    }

    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq3') && !filledarrayx.includes('sq2') && !filledarrayo.includes('sq2')) {
        sq2.innerText="O";
        filledarrayo.push('sq2');
        emptyit(2);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq7') && !filledarrayx.includes('sq4') && !filledarrayo.includes('sq4')) {
        sq4.innerText="O";
        filledarrayo.push('sq4');
        emptyit(4);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq9') && !filledarrayx.includes('sq6') && !filledarrayo.includes('sq6')) {
        sq6.innerText="O";
        filledarrayo.push('sq6');
        emptyit(6);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq7') && filledarrayx.includes('sq9') && !filledarrayx.includes('sq8') && !filledarrayo.includes('sq8')) {
        sq8.innerText="O";
        filledarrayo.push('sq8');
        emptyit(8);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq7') && filledarrayx.includes('sq8') && !filledarrayx.includes('sq9') && !filledarrayo.includes('sq9')) {
        sq9.innerText="O";
        filledarrayo.push('sq9');
        emptyit(9);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq8') && filledarrayx.includes('sq9') && !filledarrayx.includes('sq7') && !filledarrayo.includes('sq7')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');
        emptyit(7);
        checkforawin();
        return;
    }



    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq2') && !filledarrayx.includes('sq3') && !filledarrayo.includes('sq3')) {
        sq3.innerText="O";
        filledarrayo.push('sq3');
        emptyit(3);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq2') && filledarrayx.includes('sq3') && !filledarrayx.includes('sq1') && !filledarrayo.includes('sq1')) {
        sq1.innerText="O";
        filledarrayo.push('sq1');
        emptyit(1);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq4') && !filledarrayx.includes('sq7') && !filledarrayo.includes('sq7')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');
        emptyit(7);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq4') && filledarrayx.includes('sq7') && !filledarrayx.includes('sq1') && !filledarrayo.includes('sq1')) {
        sq1.innerText="O";
        filledarrayo.push('sq1');
        emptyit(1);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq9') && filledarrayx.length==2) {//only applies for the second move
        choice='sq'+String(random);// random selection of square 2,4,6 or 8
        switch(random) {
            case 2:
                sq2.innerText="O";
                filledarrayo.push('sq2');
                emptyit(2);
                break;
            case 4:
                sq4.innerText="O";
                filledarrayo.push('sq4');
                emptyit(4);
                break;

            case 6:
                sq6.innerText="O";
                filledarrayo.push('sq6');
                emptyit(6);
                break;
            case 8:
                sq8.innerText="O";
                filledarrayo.push('sq8');
                emptyit(8);
                break;
            
            }
    return;
    }

    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq7') && filledarrayx.length==2) {//only applies for the second move
            choice='sq'+String(random);// random selection of square 2,4,6 or 8
            switch(random) {
                case 2:
                    sq2.innerText="O";
                    filledarrayo.push('sq2');
                    emptyit(2);
                    break;
                case 4:
                    sq4.innerText="O";
                    filledarrayo.push('sq4');
                    emptyit(4);
                    break;
    
                case 6:
                    sq6.innerText="O";
                    filledarrayo.push('sq6');
                    emptyit(6);
                    break;
                case 8:
                    sq8.innerText="O";
                    filledarrayo.push('sq8');
                    emptyit(8);
                    break;
                
            }
    return;
    }
    if(empty.length==2) {
        remaining=empty.splice(0,1)
        choice='sq'+String(remaining);
        lastchoice=document.getElementById(choice);
        lastchoice.innerText="O";
        filledarrayo.push(choice);
        val=remaining;
        checkforawin();
        return;

    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq3') && filledarrayx.includes('sq8') && !filledarrayx.includes('sq4') && !filledarrayx.includes('sq6') && !filledarrayo.includes('sq6')) {
        sq6.innerText="O";
        filledarrayo.push('sq6');
        emptyit(6);
        return;
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq8') &&  !filledarrayx.includes('sq2') && !filledarrayx.includes('sq6') && !filledarrayo.includes('sq2')) {
        sq2.innerText="O";
        filledarrayo.push('sq2');
        emptyit(2);
        return;
    }
    if (filledarrayx.includes('sq6') && filledarrayx.includes('sq9') &&  !filledarrayx.includes('sq3') && !filledarrayo.includes('sq3') && !filledarrayo.includes('sq2')) {
        sq3.innerText="O";
        filledarrayo.push('sq3');
        emptyit(3);
        return;
    }
    if (filledarrayx.includes('sq1') && !filledarrayx.includes('sq2') &&  !filledarrayx.includes('sq8') && !filledarrayo.includes('sq2')) {
        sq2.innerText="O";
        filledarrayo.push('sq2');
        emptyit(2);
        return;
    }
    if (filledarrayo.includes('sq3') && !filledarrayx.includes('sq7') &&  !filledarrayo.includes('sq7') && filledarrayo.includes('sq5')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');
        emptyit(7);
        checkforawin();
        return;
    }
    if (filledarrayo.includes('sq2') && !filledarrayx.includes('sq8') &&  !filledarrayo.includes('sq8') && filledarrayo.includes('sq5')) {
        sq8.innerText="O";
        filledarrayo.push('sq8');
        emptyit(8);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq5') &&  !filledarrayx.includes('sq7') && !filledarrayo.includes('sq7')) {
        sq7.innerText="O";
        filledarrayo.push('sq7');
        emptyit(7);
        
        return;
    }
    if (filledarrayx.includes('sq5') && filledarrayx.includes('sq4') &&  !filledarrayx.includes('sq6') && !filledarrayo.includes('sq6')) {
        sq6.innerText="O";
        filledarrayo.push('sq6');
        emptyit(6);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq8') &&  !filledarrayo.includes('sq6') && filledarrayo.includes('sq5')) {
        sq6.innerText="O";
        filledarrayo.push('sq6');
        emptyit(6);
        checkforawin();
        return;
    }

    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq6') &&  !filledarrayo.includes('sq9') && filledarrayo.includes('sq5')) {
        sq9.innerText="O";
        filledarrayo.push('sq9');
        emptyit(9);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq4') && filledarrayx.includes('sq6') &&  filledarrayx.length==2 && !filledarrayo.includes('sq1')) {
        sq1.innerText="O";
        filledarrayo.push('sq1');
        emptyit(1);
        checkforawin();
        return;
    }
    if (filledarrayx.includes('sq2') && filledarrayx.includes('sq4') &&  filledarrayx.includes('sq9') && filledarrayo.includes('sq1')) {
        sq3.innerText="O";
        filledarrayo.push('sq3');
        emptyit(3);
        checkforawin();
        return;
    }

    
    }, delayInMilliseconds);//Put all code for the function above this line
console.log("The contents of filledarrayo are now",filledarrayo);

}//End of function compchoice   


function fill(val) {//put a symbol in the box that was clicked by passing a unique numeral (val) which gets concatenated with 'sq' to become a string. This then becomes the identifying id for which box to put the  value of oxo, which alternates between an X and a O.
    
   
    if (playon==false) {return;}//if playon==false, game has been won by one of the players. Stop any further entries.

    count+=1;
    console.log("Playon is ",playon);
    console.log("COUNT IS",count);
    if (count==9) {
        gameover();
        checkforawin();
       
    }
    console.log("The number of the square clicked was",val);
    sqid='sq'+val;
    //sqid is now the correct id for the intended box
    console.log(sqid);
    fillsquare=document.getElementById(sqid);
    console.log(fillsquare);
    console.log("oxo is ",oxo);
    if (!filledarrayo.includes(sqid) && !filledarrayx.includes(sqid)) { //make sure the square is not already filled. Only fill it if it is empty.
        console.log("THE SQUARE WAS EMPTY")
        fillsquare.innerText=oxo;
        emptyit(val);
    }
    else {
        console.log("THE SQUARE WAS ALREADY FILLED")
        count-=1;//count was increased above even though the user clicked on an existing filled square, so we must subtract 1 from count
        return;//exit out of the function
    }
    console.log("COUNT IS NOW ",count);
    if (win.innerText=="DRAW!") {
        active=false;
    }
    if (active && !draw) {

        compchoice();//now let the computer take a turn
        turn.innerText="YOUR TURN";
        turn.style.visibility="visible";
        }
    checkforawin()

    console.log("The filledarrayo now contains ",filledarrayo);

   
    //The following is not needed for the human vs computer automatic player
    //except for the .push methods to update the 2 arrays
    //Instead we keep the human player on X's and computer on O's
    // //The following code will cause the turns to alternate between X and O automatically
    // if (oxo=="X") {
    filledarrayx.push(sqid);//monitor what squares have been filled with an X by keeping the unique id in an array to refer to later
   
    emptyit(val);
    //     oxo="O";//change from previous value
    //     document.getElementById("turn").innerText="COMPUTER'S TURN"
    // }
    // else if (oxo=="O") {
    //     filledarrayo.push(sqid);//monitor what squares have been filled with an O
    //     oxo="X";//change back to X
    //     document.getElementById("turn").innerText="YOUR TURN"

    // }

    console.log("Empty array now ",empty);
    console.log("Arrayx ",filledarrayx);
    console.log("Arrayo ",filledarrayo);
    checkforawin()
    if(filledarrayx.length==5) {
        gameover();
    }
    checkforawin()
}//End of function fill()



function redborders(a) {
    console.log(a);
    document.getElementById(a).style.color="red"
    active=false;
    
}//End of function redborders()



function gameover() {
    updatescore();
    document.getElementById("turn").style.visibility="hidden";
    playon=false;
    
    document.getElementsByClassName("square").onclick="null";
}//End of function gameover()



function checkforawin() {//there are 8 possibilities of a win in terms of 3 horizontal winning lines, 3 vertical winning lines and 2 diagonal winning lines. Need to do 8 'if' checks for each player.
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq2') && filledarrayx.includes('sq3')) {
        sq1.style.color="red";
        sq2.style.color="red";
        sq3.style.color="red";
        active=false;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        human=true;
        gameover();
        
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq4') && filledarrayx.includes('sq7')) {
        sq1.style.color="red";
        sq4.style.color="red";
        sq7.style.color="red";
        active=false;
        human=true;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
       
    }
    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq6') && filledarrayx.includes('sq9')) {
        sq3.style.color="red";
        sq6.style.color="red";
        sq9.style.color="red";
        active=false;
        human=true;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq7') && filledarrayx.includes('sq8') && filledarrayx.includes('sq9')) {
        sq7.style.color="red";
        sq8.style.color="red";
        sq9.style.color="red";
        active=false;
        human=true;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq4') && filledarrayx.includes('sq5') && filledarrayx.includes('sq6')) {
        sq4.style.color="red";
        sq5.style.color="red";
        sq6.style.color="red";
        active=false;
        human=true;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq1') && filledarrayx.includes('sq5') && filledarrayx.includes('sq9')) {
        sq1.style.color="red";
        sq5.style.color="red";
        sq9.style.color="red";
        active=false;
        human=true;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
      
    }
    if (filledarrayx.includes('sq3') && filledarrayx.includes('sq5') && filledarrayx.includes('sq7')) {
        sq3.style.color="red";
        sq5.style.color="red";
        sq7.style.color="red";
        active=false;
        human=true;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }
    if (filledarrayx.includes('sq2') && filledarrayx.includes('sq5') && filledarrayx.includes('sq8')) {
        sq2.style.color="red";
        sq5.style.color="red";
        sq8.style.color="red";
        active=false;
        human=true;
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {yourwins+=1;}
        gameover();
        
    }

    if(filledarrayx.length==5 && playon==true) {
        document.getElementById("win").innerText="DRAW!";
        document.getElementById("win").style.visibility="visible";
       active=false;
        gameover();   
        draw=true;

    }
   
    
    //Now check for computer win: 8 possibilities  so do 8 'if' checks.
    
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq2') && filledarrayo.includes('sq3')) {
        sq1.style.color="red";
        sq2.style.color="red";
        sq3.style.color="red";
        active=false;
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
       

    }
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq4') && filledarrayo.includes('sq7')) {
        sq1.style.color="red";
        sq4.style.color="red";
        sq7.style.color="red";
        active=false;
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq3') && filledarrayo.includes('sq6') && filledarrayo.includes('sq9')) {
        sq3.style.color="red";
        sq6.style.color="red";
        sq9.style.color="red";
        active=false;
         document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq7') && filledarrayo.includes('sq8') && filledarrayo.includes('sq9')) {
        sq7.style.color="red";
        sq8.style.color="red";
        sq9.style.color="red";
        active=false;
         document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq4') && filledarrayo.includes('sq5') && filledarrayo.includes('sq6')) {
        sq4.style.color="red";
        sq5.style.color="red";
        sq6.style.color="red";
        active=false;
         document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
      
    }
    if (filledarrayo.includes('sq1') && filledarrayo.includes('sq5') && filledarrayo.includes('sq9')) {
        sq1.style.color="red";
        sq5.style.color="red";
        sq9.style.color="red";
        active=false;
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
       
    }
    if (filledarrayo.includes('sq3') && filledarrayo.includes('sq5') && filledarrayo.includes('sq7')) {
        sq3.style.color="red";
        sq5.style.color="red";
        sq7.style.color="red";
        active=false;
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
        
    }
    if (filledarrayo.includes('sq2') && filledarrayo.includes('sq5') && filledarrayo.includes('sq8')) {
        sq2.style.color="red";
        sq5.style.color="red";
        sq8.style.color="red";
        active=false;
        document.getElementById("win").innerText="COMPUTER WINS!";
        document.getElementById("win").style.visibility="visible";
        if(playon==true) {computerwins+=1;}
        gameover();
      
    }
  
updatescore();
}//End of function checkforawin()


