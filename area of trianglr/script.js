function calculate_area(){

    const num1=document.getElementById("number1").value;
    const num2=document.getElementById("number2").value;

    const area = .5*(num1*num2);

    //console.log(`${area}`);


    var paragraph =document.createElement('p');
    paragraph.innerHTML=area;
    var out_put=document.getElementById("output");
    out_put.appendChild(paragraph).value;
   

    
}

