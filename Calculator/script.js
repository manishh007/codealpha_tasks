let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let result = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', function (e) {
        handleInput(e.target.innerHTML);
    });
});

function handleInput(value) {
    if (value === "=" || value === "Enter") {
        try {
            result = eval(result);
            input.value = result;
        } catch {
            input.value = "Error";
            result = "";
        }
    } else if (value === "AC" || value === "Escape") {
        result = "";
        input.value = result;
    } else if (value === "DEL" || value === "Backspace") {
        result = result.substring(0, result.length - 1);
        input.value = result;
    } else if ("0123456789.+-*/%".includes(value)) {
        result += value;
        input.value = result;
    }
}

document.addEventListener('keydown', function (e) {
    const key = e.key;

    if ("0123456789.+-*/%".includes(key)) {
        handleInput(key);
    } else if (key === "Enter") {
        handleInput("Enter");
    } else if (key === "Backspace") {
        handleInput("Backspace");
    } else if (key === "Escape") {
        handleInput("Escape");
    }
});
