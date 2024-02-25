function calculateBMI() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const bmiValueElement = document.getElementById("bmiValue");
    const bmiCategoryElement = document.getElementById("bmiCategory");

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    const bmi = weight / (height * height);
    const roundedBMI = Math.round(bmi * 10) / 10; // Round to one decimal place

    bmiValueElement.innerText = roundedBMI;

    if (bmi < 18.5) {
        bmiCategoryElement.innerText = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategoryElement.innerText = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategoryElement.innerText = "Overweight";
    } else {
        bmiCategoryElement.innerText = "Obese";
    }
}
