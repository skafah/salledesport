
    function calculateBMI() {
    
    let height = document.getElementById("height").value;
    let weight =document.getElementById("weight").value;
    let result = document.getElementById("result");
    BMI =(weight / Math.pow( (height/100), 2 )).toFixed(2);
    
    result.innerText = BMI;
   
    
    }