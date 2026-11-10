const input = document.getElementById("input")

const from = document.getElementById("from")
const to = document.getElementById("to")

const ras = document.getElementById("ras")
const sw = document.getElementById("sw")

const res = document.getElementById("res")

let result = 0
function fff(inp, from, to) {
    const sm = 0.01
    const dm = 0.1
    const m = 1
    const km = 1000
    const mm = 0.001
    let result = inp
    result = Number(result)
    if (from == "sm") {
        result = result * sm
    }
    else if (from == "dm") {
        result = result * dm
    }
    else if (from == "m") {
        result = result * m
    }
    else if (from == "km") {
        result = result * km
    }
    else if (from == "mm") {
        result = result * mm
    };
    if (to == "sm") {
        result = result / sm
    }
    else if (to == "dm") {
        result = result / dm
    }
    else if (to == "m") {
        result = result / m
    }
    else if (to == "km") {
        result = result / km
    }
    else if (to == "mm") {
        result = result / mm
    };
    return result;
}

ras.addEventListener('click', () => {
    if (input.value  <= 0) {
        res.textContent = "Введите число от 0"
    }
    else {
        result = input.value
        result = fff(result, from.value, to.value)
        res.textContent = `${input.value} ${from.value} = ${result} ${to.value}`;
    };
});
sw.addEventListener('click', () => {
    from2 = from.value
    to2 = to.value
    from.value = to2
    to.value = from2
    result = input.value
    result = fff(result, from.value, to.value)
    res.textContent = `${input.value} ${from.value} = ${result} ${to.value}`;
});