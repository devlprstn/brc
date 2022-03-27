document.getElementById("r14").addEventListener("input",addAreas);
document.getElementById("r17").addEventListener("input",addAreas);
document.getElementById("r110").addEventListener("input",addAreas);
document.getElementById("r24").addEventListener("input", addAreas);
document.getElementById("r27").addEventListener("input", addAreas);
document.getElementById("r210").addEventListener("input", addAreas);
document.getElementById("r34").addEventListener("input", addAreas);
document.getElementById("r37").addEventListener("input", addAreas);
document.getElementById("r310").addEventListener("input", addAreas);


function addAreas() {
    var r144 = document.getElementById("r14").value;
    var r177 = document.getElementById("r17").value;
    var r1100 = document.getElementById("r110").value;
    document.getElementById("r1414").value = parseFloat(r144) + parseFloat(r177) + parseFloat(r1100);

    var r244 = document.getElementById("r24").value;
    var r277 = document.getElementById("r27").value;
    var r2100 = document.getElementById("r210").value;
    document.getElementById("r2424").value = parseFloat(r244) + parseFloat(r277) + parseFloat(r2100);

    var r344 = document.getElementById("r34").value;
    var r377 = document.getElementById("r37").value;
    var r3100 = document.getElementById("r310").value;
    document.getElementById("r3434").value = parseFloat(r344) + parseFloat(r377) + parseFloat(r3100);
}



// let totalDisplayElem = document.getElementById('total-display');
// let r14 = document.querySelector('r14').value;
// let r17 = document.querySelector('r17').value;
// let r110 = document.querySelector('r110').value;

// console.log(r14)


// document.body.addEventListener('click', updateDisplay)

// function updateDisplay() {
//     runTotal = parseFloat(r14) + parseFloat(r17) + parseFloat(r110)
//     totalDisplayElem.innerHTML = runTotal;
// }