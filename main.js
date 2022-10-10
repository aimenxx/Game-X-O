
//// declaration of variable to make the work easy 
var player = document.getElementById("player")
var result= document.getElementById("scor1");
var rfresh=document.getElementById("reload")
var arr=[];
var a = "x";



//////function when you tuch the case it show X or O and return the winner

function tuch(id){
        var element = document.getElementById(id)
    if(a === "x" && element.innerHTML ==""){
        element.innerHTML="x"
        a = "o"
        player.innerHTML= " " + '2'
    }
    else if(a ==="o" && element.innerHTML==""){
        element.innerHTML="o"
        a ="x"
        player.innerHTML=" " + "1"

    }
winner();
}


/////function when we found the winner it will refresh automaticuly

function reset(n1,n2,n3){

    result.innerHTML= arr[n1]
    document.getElementById("colone"+n1).style.background="#7FFFD4";
    document.getElementById("colone"+n2).style.background="#7FFFD4";
    document.getElementById("colone"+n3).style.background="#7FFFD4";
   
 
    setInterval(function () {rfresh.innerHTML += "."}, 1000);

 setTimeout(function(){location.reload()},4000)


}




//////function to guess the winner 
function winner(){
    //// 
 for(var i=1;i<10;i++){
  arr[i] = document.getElementById("colone"+i).innerHTML;
 }
 ///// start colone vertical
if (arr[1]==arr[2]&& arr[2]==arr[3] && arr[1]!= ""){
   reset(1,2,3)

}
else if(arr[4]==arr[5]&& arr[5]==arr[6] && arr[4]!= ""){
    reset(4,5,6)

}
else if(arr[7]==arr[8]&& arr[8]==arr[9] && arr[7]!= ""){
    reset(7,8,9)

}
///// start colone horizontal
else if(arr[1]==arr[4]&& arr[4]==arr[7] && arr[1]!= ""){
    reset(1,4,7)

}
else if(arr[2]==arr[5]&& arr[5]==arr[8] && arr[5]!= ""){
    reset(2,5,8)

}
else if(arr[3]==arr[6]&& arr[6]==arr[9] && arr[3]!= ""){
    reset(3,6,9)

}
//////start colone cross 
else if(arr[1]==arr[5]&& arr[5]==arr[9] && arr[5]!= ""){
    reset(1,5,9)

}
else if(arr[3]==arr[5]&& arr[5]==arr[7] && arr[5]!= ""){
    reset(3,5,7)

}


}




