let body = document.querySelector("body");
let btn1 = document.querySelector("#btn1");
let mode = "light";

btn1.addEventListener("click", () => {
    if(mode === "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});