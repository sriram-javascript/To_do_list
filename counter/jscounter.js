let add=document.getElementById("plus");
let sub=document.getElementById("sub");
let numbr=document.getElementById("number");

let int=0;


add.addEventListener('click' ,function(){

   int+=1;
   numbr.innerHTML=int;



      

})

sub.addEventListener('click' ,function(){

    int-=1;
    numbr.innerHTML=int;
 
 
 
       
 
 })