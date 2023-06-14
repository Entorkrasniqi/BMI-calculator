// Example JavaScript code
window.onload = function() {
    // Access an HTML element by its ID
    var myElement = document.getElementById("myElementId");
    
    // Manipulate the element
    myElement.innerHTML = "Hello, JavaScript!";
  };

  function bmiCalculator (weight, height) {

    var interpretation;
    var bmi = Math.floor(weight/Math.pow(height,2));

    if(bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }

    if (bmi > 18.5 && bmi <=  24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }

    if (bmi > 24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;

}
  