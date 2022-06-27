let input1 = ''
let input2 = ''










function start() {
    let matrix1 = document.querySelector('#matrix1')
    let matrix2 = document.querySelector('#matrix2')
    let resultmatrix = document.querySelector('#resultmatrix')

    matrix1.innerHTML = "";
    matrix2.innerHTML = "";
    resultmatrix.innerHTML = "";

    input1 = +document.querySelector('#input1').value
    input2 = +document.querySelector('#input2').value

    if (input1 !== input2) {
        alert('Plz Enter The Same  Value');
        return;
    }
    if (isNaN(input1) || isNaN(input2)) {
        alert('Enter A Number');
        return;
    }
    if (input1 < 2 || input2 < 2) {
        alert('Enter A number Greater Than 1');
        return;
    }
    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            console.log('running')
            matrix1.innerHTML +=
                `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value='0'>`;
            matrix2.innerHTML +=
                `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value='0'>`;
            resultmatrix.innerHTML +=
                `<input type="number" readonly required min="0" max="100" id="resultmatrix-${i}-${j}" value='0'>`
        }
        matrix1.innerHTML += `<br>`
        matrix2.innerHTML += `<br>`
        resultmatrix.innerHTML += `<br>`
    }
    document.querySelector('#bnm').classList.remove('klp')
}









function sum() {
    let matrixA = []
    let matrixB = []

    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            console.log('running')
            if (matrixA[i] === undefined) matrixA[i] = []
            if (matrixB[i] === undefined) matrixB[i] = []

            matrixA[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
            matrixB[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
        }
    }
    
    let result = sumMatrix(matrixA, matrixB)
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            document.querySelector(`#resultmatrix-${i}-${j}`).value = result[i][j]
        }
    }
}









function sumMatrix(matrixA, matrixB) {
    let result = []
    for (let i = 0; i < matrixA.length; i++) {
        result[i] = []
        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j]
        }
    }
    return result
}










function subtract() {
    let matrix1 = []
    let matrix2 = []

    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            console.log('running')
            if (matrix1[i] === undefined) matrix1[i] = []
            if (matrix2[i] === undefined) matrix2[i] = []

            matrix1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
            matrix2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
        }
    }
    let result = subtractMatrix(matrix1, matrix2)
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            document.querySelector(`#resultmatrix-${i}-${j}`).value = result[i][j]
        }
    }
}









function subtractMatrix(matrix1, matrix2) {
    let result = []
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = []
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j]
        }
    }
    return result
}










function multiply() {

    let matrixA = [];
    let matrixB = [];
    let intermediate = document.querySelector("#intermediate");
    intermediate.innerHTML = "";

    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            if (!matrixA[i]) matrixA[i] = [];
            if (!matrixB[i]) matrixB[i] = [];

            matrixA[i][j] = +document.querySelector(`#m1-${i}-${j}`).value;
            matrixB[i][j] = +document.querySelector(`#m2-${i}-${j}`).value;
        }
    }
    let returnValue = matrixMultiply(matrixA, matrixB);
    let result = returnValue[0]
    let intermediateHtml = returnValue[1]

    console.log("intermediateHtml: ", intermediateHtml);
    intermediate.innerHTML = intermediateHtml

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            console.log(i, j);
            document.querySelector(`#resultmatrix-${i}-${j}`).value = result[i][j]
        }
    }
}














function matrixMultiply(a, b) {

    let intermediateHtml = "";
    let aRows = a.length;
    let aCols = a[0].length;
    let bCols = b[0].length;
    let result = new Array(aRows);
    for (let r = 0; r < aRows; ++r) {
        const row = new Array(bCols);
        result[r] = row;
        const ar = a[r];
        for (let c = 0; c < bCols; ++c) {
            let sum = 0.;
            for (let i = 0; i < aCols; ++i) {
                sum += ar[i] * b[i][c];
                intermediateHtml += `${ar[i]} * ${b[i][c]} + `;
            }
            intermediateHtml = intermediateHtml.slice(0, -2);
            intermediateHtml += `&nbsp;&nbsp;&nbsp;&nbsp;`;
            row[c] = sum;
        }
        intermediateHtml += `<br>`
    }
    return [result, intermediateHtml];
}