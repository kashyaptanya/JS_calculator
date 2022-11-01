

let operationToperform;
function addNumber(a) {
    let result = document.getElementById('result').value += a;

    // for(let j=a; j<=z ; j++){
    //   result=j.CharCodeAt();
    //     document.getElementById('result').value = "";

    // }
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "*") {
            operationToperform = "multiply";
        }
        if (result[i] == "/") {
            operationToperform = "divide";
        }
        if (result[i] == "+") {
            operationToperform = "addition";
        }
        if (result[i] == "-") {
            operationToperform = "sub";
        }
    }

    
    if (a == "clear") {
        document.getElementById('result').value = "";
    }
}
// for(let j=a; j<=z ; j++){
//     if( result==j.CharCodeAt()){
//         document.getElementById('result').value = "";

//     }
// }

function equal() {
    let result = document.getElementById('result').value;

    if (operationToperform == "multiply") {
        const check = result.split('*')[0]
        const check2 = result.split('*')[1]
        const finalresult = check * check2;
        document.getElementById('result').value = finalresult;
    }
    else if (operationToperform == "divide") {
        const check = result.split('/')[0]
        const check2 = result.split('/')[1]
        const finalresult = check / check2;
        document.getElementById('result').value = finalresult;
    }
    else if (operationToperform == "addition") {
        const check = result.split('+')[0]
        const check2 = result.split('+')[1]
        const finalresult = parseFloat(check) + parseFloat(check2);
        document.getElementById('result').value = finalresult;
    }
    else if (operationToperform == "sub") {
        const check = result.split('-')[0]
        const check2 = result.split('-')[1]
        const finalresult = check - check2;
        document.getElementById('result').value = finalresult;
    }
}

function numbersAdd(input) {
    var numbersOnly = /[a-z]/g;
    input.value = input.value.replace(numbersOnly, '');
}