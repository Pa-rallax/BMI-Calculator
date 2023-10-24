//KG and ft
document.querySelector("#butt1").addEventListener("click", calcBMI)//KG & ft button

//KG and ft
function calcBMI(weight, height) {
    var weight = document.getElementById("input1").value
    var height = document.getElementById("input2").value
     var bmi = Math.round((weight)/((height * (0.3048))**2));
     if (bmi < 18.5) {
        alert("Your BMI is " + bmi + ", so you are underweight.");
       }
       else if (bmi === 18.5 || bmi <= 24.9) {
        alert("Your BMI is " + bmi + ", so you have a normal weight.");
       }
       else if (bmi === 24.9 || bmi <= 29) {
          alert("Your BMI is " + bmi + ", so you are overweight.");
       }
       else if (bmi === 30 || bmi <= 39) {
           alert("Your BMI is " + bmi + ", so you are obese.");
        }
        else if (bmi === 39 || bmi <= 42) {
           alert("Your BMI is " + bmi + ", so you are extremely obese.");
        }
        else {
            alert(bmi + "      ...bruh💀");
   }
 }


