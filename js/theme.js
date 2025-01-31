document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector(".switch input");
    const body = document.body;
    const container = document.querySelector(".contanier");
    const buttons = document.querySelectorAll("button");
    const inputFields = document.querySelectorAll("input[type=text]");

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        container.style.backgroundColor = "#222";
        container.style.color = "#fff";
        buttons.forEach(button => button.style.color = "white");
        inputFields.forEach(input => input.style.backgroundColor = "#fcfcfc");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            container.style.backgroundColor = "#222";
            container.style.color = "#fff";
            buttons.forEach(button => button.style.color = "black");
            inputFields.forEach(input => input.style.backgroundColor = "#fcfcfc");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            container.style.backgroundColor = "#f0f0f0";
            container.style.color = "black";
            buttons.forEach(button => button.style.color = "black");
            inputFields.forEach(input => input.style.backgroundColor = "#fcfcfc");
            localStorage.setItem("theme", "light");
        }
    });
});
