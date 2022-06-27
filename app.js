let ip1 = ''
let ip2 = ''

function start() {
    let mp1 = document.querySelector('#mp1')
    let mp2 = document.querySelector('#mp2')
    let rmp3 = document.querySelector('#rmp3')

    mp1.innerHTML = "";
    mp2.innerHTML = "";
    rmp3.innerHTML = "";

    ip1 = +document.querySelector('#ip1').value
    ip2 = +document.querySelector('#ip2').value

    if (ip1 !== ip2) {
        alert('Plz Enter The Same  Value');
        return;
    }
    if (isNaN(ip1) || isNaN(ip2)) {
        alert('Enter A Number');
        return;
    }
    if (ip1 < 2 || ip2 < 2) {
        alert('Enter A number Greater Than 1');
        return;
    }
    for (let i = 0; i < ip1; i++) {
        for (let j = 0; j < ip2; j++) {
            console.log('running')
            mp1.innerHTML +=
                `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value='0'>`;
            mp2.innerHTML +=
                `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value='0'>`;
            rmp3.innerHTML +=
                `<input type="number" readonly required min="0" max="100" id="rmp3-${i}-${j}" value='0'>`
        }
        mp1.innerHTML += `<br>`
        mp2.innerHTML += `<br>`
        rmp3.innerHTML += `<br>`
    }
    document.querySelector('#bnm').classList.remove('klp')
}
function sum() {
    let matrixa = []
    let matrixb = []

    for (let i = 0; i < ip1; i++) {
        for (let j = 0; j < ip2; j++) {
            console.log('running')
            if (matrixa[i] === undefined) matrixa[i] = []
            if (matrixb[i] === undefined) matrixb[i] = []

            matrixa[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
            matrixb[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
        }
    }
    
    let result = sumMatrix(matrixa, matrixb)
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            document.querySelector(`#rmp3-${i}-${j}`).value = result[i][j]
        }
    }
}
function sumMatrix(matrixa, matrixb) {
    let result = []
    for (let i = 0; i < matrixa.length; i++) {
        result[i] = []
        for (let j = 0; j < matrixa[i].length; j++) {
            result[i][j] = matrixa[i][j] + matrixb[i][j]
        }
    }
    return result
}

function subtract() {
    let matrix1 = []
    let matrix2 = []

    for (let i = 0; i < ip1; i++) {
        for (let j = 0; j < ip2; j++) {
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
            document.querySelector(`#rmp3-${i}-${j}`).value = result[i][j]
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

    let matrixa = [];
    let matrixb = [];
    let intermediate = document.querySelector("#intermediate");
    intermediate.innerHTML = "";

    for (let i = 0; i < ip1; i++) {
        for (let j = 0; j < ip2; j++) {
            if (!matrixa[i]) matrixa[i] = [];
            if (!matrixb[i]) matrixb[i] = [];

            matrixa[i][j] = +document.querySelector(`#m1-${i}-${j}`).value;
            matrixb[i][j] = +document.querySelector(`#m2-${i}-${j}`).value;
        }
    }
    let returnValue = matrixMultiply(matrixa, matrixb);
    let result = returnValue[0]
    let intermediateHtml = returnValue[1]

    console.log("intermediateHtml: ", intermediateHtml);
    intermediate.innerHTML = intermediateHtml

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            console.log(i, j);
            document.querySelector(`#rmp3-${i}-${j}`).value = result[i][j]
        }
    }
}
// https://stackoverflow.com/a/62605311/4378475

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