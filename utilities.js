function getInputFieldValueById(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputFieldValueString = inputFeild.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFeild.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}