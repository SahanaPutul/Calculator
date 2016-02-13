function run1() {
    document.frm.result.value += "1";
}
function run2() {
    document.frm.result.value += "2";
}
function run3() {
    document.frm.result.value += "3";
}
function run4() {
    document.frm.result.value += "4";
}
function run5() {
    document.frm.result.value += "5";
}
function run6() {
    document.frm.result.value += "6";
}
function run7() {
    document.frm.result.value += "7";
}
function run8() {
    document.frm.result.value += "8";
}
function run9() {
    document.frm.result.value += "9";
}
function run0() {
    document.frm.result.value += "0";
}
function runPlus() {
    document.frm.result.value += "+";
}
function runMinus() {
    document.frm.result.value += "-";
}
function runMult() {
    document.frm.result.value += "*";
}
function runDiv() {
    document.frm.result.value += "/";
}
function runDot() {
    document.frm.result.value += ".";
}

function myFunction() {
    document.getElementById("result").value = " ";
}

function resultFunction() {
    var finalResult = eval(document.frm.result.value);
    document.getElementById("result").value = finalResult;
}