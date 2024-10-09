document.getElementById("calculate").addEventListener("submit", function(event) {
    event.preventDefault();

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    height = height / 100;

    let bmi = weight / (height * height);
    let classification;

        if(bmi < 18.5){
            classification = "underweight";
        } else if (bmi > 25){
            classification = "overweight";
        } else {
            classification = "normal";
        }

        const resultMessage = texts[currentLanguage].resultMessage;
        const classificationMessage = texts[currentLanguage].classificationMessages[classification];

        alert(resultMessage + bmi.toFixed(2) + " " + classificationMessage);

});


const texts = {
    en: {
        title: "BMI Calculator ❤️",
        labelH: "Height:",
        labelW: "Weight:",
        btn: "Calculate",
        resultMessage: "Your BMI is: ",
        classificationMessages: {
            underweight: "wich is considered underweight",
            overweight: "which is considered overweight",
            normal: "which is considered normal"
        }

    },
    pt: {
        title: "Calculadora de IMC ❤️",
        labelH: "Altura:",
        labelW: "Peso:",
        btn: "Calcular",
        resultMessage: "O seu IMC é: ",
        classificationMessages: {
            underweight: "que é considerado abaixo do peso",
            overweight: "que é considerado acima do peso",
            normal: "que é considerado normal"

    }
}
};

let currentLanguage = 'en';

function changeLanguage() {
    const isChecked = document.getElementById("idiom").checked;
    currentLanguage = isChecked ? 'pt' : 'en';

    document.getElementById("title").innerHTML = texts[currentLanguage].title;
    document.getElementById("labelH").innerHTML = texts[currentLanguage].labelH;
    document.getElementById("labelW").innerHTML = texts[currentLanguage].labelW;
    document.getElementById("btn").innerHTML = texts[currentLanguage].btn;
}

document.getElementById("idiom").addEventListener("change", changeLanguage);