function displayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session=document.getElementById('day');

    if(hrs>=12){
        session.innerHTML="PM";
    }else{
        session.innerHTML="AM";
    }

    if(hrs>12){
        hrs=hrs-12;
    }

    document.getElementById('hour').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;

}

setInterval(displayTime,10);