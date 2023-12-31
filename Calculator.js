const currDisplay=document.querySelector(".curr-display");
const prevDisplay=document.querySelector(".prev-display");
const numbers=document.querySelectorAll(".number");
const operands=document.querySelectorAll(".operation");
const clearbtn=document.querySelector(".clear");
const delbtn=document.querySelector(".delete");
const equalbtn=document.querySelector(".equal");
let operation;

function appendNumber(number)
{
    if (number == "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperation(operand)
{
    if (currDisplay.innerText=="")return;
    compute(operand);
    operation = operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText="";
}

function clearDisplay()
{
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}
numbers.forEach((number)=>
{
    number.addEventListener("click", () => 
    {
        appendNumber(number.innerText);
    });
});
operands.forEach((operand) => 
{
    operand.addEventListener("click", () => 
    {
        chooseOperation(operand.innerText);
    });
});
clearbtn.addEventListener("click", () => 
{
    clearDisplay();
});
equalbtn.addEventListener("click", () => 
{
    compute();
    prevDisplay.innerText = "";
});
delbtn.addEventListener("click", () => {
    currDisplay.innerText =
        currDisplay.innerText.slice(0, -1);
});

function compute(operand)
{
    let result;
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation)
    {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;
    }
    currDisplay.innerText = result;
}