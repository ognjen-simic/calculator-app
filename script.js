const display = document.getElementById("display");
const body = document.body;
const toggle = document.getElementById("theme-toggle")

function addToDisplay(input)
{
    if (display.value === "Error")
    {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay()
{
    display.value = "";
}

function calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
}

toggle.addEventListener("click", () => {
    toggle.textContent = body.classList.contains("light")
    ? "Dark Mode"
    : "Light Mode";
    body.classList.toggle("light");
    body.classList.toggle("dark");
});