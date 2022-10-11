
//// declaration of variable to make the work easy 
var player = document.getElementById("player")
var result= document.getElementById("scor1");
var rfresh=document.getElementById("reload")
var arr=[];
var a = "x";



//////function to start the game when you tuch the case it show X or O and and the turn of the player and return the winner

function tuch(id){
    ///var of the case 
        var element = document.getElementById(id)

    if(a === "x" && element.innerHTML ==""){
        element.innerHTML="x"
        ///// turn player 2 === o
        a = "o"
        player.innerHTML= " " + '2'
    }
    else if(a ==="o" && element.innerHTML==""){
        element.innerHTML="o"
        ////turn player 1 === x
        a ="x"
        player.innerHTML=" " + "1"

    }
    /// we return the function winner because it should run when evry click 
winner();
}


/////function to found the winner

function reset(n1,n2,n3){

    result.innerHTML= arr[n1]
    document.getElementById("colone"+n1).style.background="#7FFFD4";
    document.getElementById("colone"+n2).style.background="#7FFFD4";
    document.getElementById("colone"+n3).style.background="#7FFFD4";
   
}




//////function to guess the winner with comparate the cas with each other
function winner(){
    //// for loop i<10 start from 1 because first case its 1 and i less then 10 because i have just 9 case
 for(var i=1;i<10;i++){
    //// this we save value in the case or colone in the index of empty array that we declare like variable when the index of the empty array after the loop i=1 it save the case 1
  arr[i] = document.getElementById("colone"+i).innerHTML;
 }
 ///// start  compare colone vertical
if (arr[1]==arr[2]&& arr[2]==arr[3] && arr[1]!= ""){
   reset(1,2,3)

}
else if(arr[4]==arr[5]&& arr[5]==arr[6] && arr[4]!= ""){
    reset(4,5,6)

}
else if(arr[7]==arr[8]&& arr[8]==arr[9] && arr[7]!= ""){
    reset(7,8,9)

}
///// start compare colone horizontal
else if(arr[1]==arr[4]&& arr[4]==arr[7] && arr[1]!= ""){
    reset(1,4,7)

}
else if(arr[2]==arr[5]&& arr[5]==arr[8] && arr[5]!= ""){
    reset(2,5,8)

}
else if(arr[3]==arr[6]&& arr[6]==arr[9] && arr[3]!= ""){
    reset(3,6,9)

}
//////start compare colone cross 
else if(arr[1]==arr[5]&& arr[5]==arr[9] && arr[5]!= ""){
    reset(1,5,9)

}
else if(arr[3]==arr[5]&& arr[5]==arr[7] && arr[5]!= ""){
    reset(3,5,7)

}


}



