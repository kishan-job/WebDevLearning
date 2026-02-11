const inputName = document.querySelector("#name");
const h1 = document.querySelector(".h1")
inputName.addEventListener("input", (e) => {
    console.log(e.target.value);
    h1.textContent = e.target.value
    
});
