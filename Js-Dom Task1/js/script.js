let toggleIcon = document.querySelector(".toggle-icon");

let isYellow = false;

toggleIcon.addEventListener("click", function() {
    if (isYellow) {
        document.body.style.backgroundColor = "black";
        isYellow = false;
    } else {
        document.body.style.backgroundColor = "yellow";
        isYellow = true;
    }
});
