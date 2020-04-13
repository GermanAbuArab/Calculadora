var firstNumber = null;
var decimal = false;
var decimal2 = false;
var secondNumber = null;
var segundo = false;
var operacion = null;
var porciento1 = null;
var porciento2 = null;
var hayporcentaje = false;

function calcular(simbolo) {
    var inputNumero = document.getElementById("displayValue");
    if (segundo === false) {
        if (simbolo === '.' && decimal === false) {
            if (firstNumber !== null) {
                firstNumber = firstNumber + simbolo;
                inputNumero.value = firstNumber;
                decimal = true;
            }
        }
        if (+simbolo in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            if (firstNumber == null && +simbolo !== 0) {
                firstNumber = simbolo;
                inputNumero.value = firstNumber;
            } else if (firstNumber == null && +simbolo === 0) {
                firstNumber = null;
            } else {
                inputNumero.value = inputNumero.value + simbolo;
            }
        }
    }

    if (["x", "+", "-", "/"].includes(simbolo)) {
        if (operacion !== null && secondNumber !== null) {
            this.resultado();
            operacion = simbolo;

        } else if (operacion !== null && secondNumber === null) {
            if (simbolo !== '-') {
                operacion = simbolo;

            } else {
                secondNumber = '-';
            }
        } else {
            operacion = simbolo;

        }
    }

    if (segundo === true) {
        if (simbolo === '.' && decimal2 === false) {
            if (secondNumber !== null) {
                inputNumero.value = inputNumero.value + simbolo;
                decimal2 = true;
            }
        }
        if (+simbolo in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            if (secondNumber == null && +simbolo !== 0) {
                secondNumber = simbolo;
                inputNumero.value = secondNumber;
            } else if (secondNumber == null && +simbolo === 0) {
                secondNumber = null;
            } else {
                inputNumero.value = inputNumero.value + simbolo
            }
        }
    }
    if (operacion !== null && operacion !== undefined) {
        segundo = true;
    }
    if (simbolo === "%") {
        this.porcentaje()
    }
    if (simbolo === "AC") {
        this.reset();
    }
    if (simbolo === "=") {
        this.resultado();
    }


    if (simbolo === "+/-" && firstNumber !== null && firstNumber !== undefined) {
        this.changeSign();
    }
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(segundo);
    console.log(operacion);
    console.log(porciento1);
    console.log(porciento2);
}

function resultado() {
    var inputNumero = document.getElementById("displayValue");

    if (hayporcentaje === false) {
        if (firstNumber !== null && secondNumber !== null) {
            switch (this.operacion) {
                case 'x':
                    firstNumber = parseInt(firstNumber, 10) * (parseInt(secondNumber, 10));
                    break;
                case '/':
                    firstNumber = parseInt(firstNumber, 10) / (parseInt(secondNumber, 10));
                    break;
                case '-':
                    firstNumber = parseInt(firstNumber, 10) - (parseInt(secondNumber, 10));
                    break;
                case '+':
                    firstNumber = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
                    break
            }
            secondNumber = null;
            inputNumero.value = firstNumber;

        } else {
            operacion = null;
        }
    } else {
        if (porciento1 !== null) {
            firstNumber = firstNumber * porciento1;
        }
        if (porciento2 !== null) {
            if (secondNumber !== null) {
                secondNumber = secondNumber * porciento2
            }
            else {
                secondNumber=firstNumber*porciento2
            }
        }
        porciento2=null;
        porciento1=null;
        this.resultado();
    }

}

function changeSign() {
    var inputNumero = document.getElementById("displayValue");
    firstNumber = -firstNumber;
    inputNumero.value = firstNumber;
}


function reset() {
    var inputNumero = document.getElementById("displayValue");
    firstNumber = null;
    decimal = false;
    decimal2 = false;
    secondNumber = null;
    segundo = false;
    operacion = null;
    inputNumero.value = 0;

}


function porcentaje() {


    if (secondNumber !== null) {
        porciento2 = parseInt(secondNumber, 10) / 100;
        secondNumber = null;
    } else if (firstNumber !== null) {
        console.log("skere")
        porciento1 = parseInt(firstNumber, 10) / 100;
        firstNumber = null;
    } else {
        porciento1 = 1;
    }

    if (hayporcentaje !== true) {
        var inputNumero = document.getElementById("displayValue");
        inputNumero.value = inputNumero.value + "%";
        hayporcentaje = true;
    }

}
