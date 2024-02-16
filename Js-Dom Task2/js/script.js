"use strict";

let ul = document.querySelector("ul");

document.querySelector(".add").addEventListener("click", function(){

    let input = document.querySelector(".input-text");
    let text = input.value;

    if (text.trim() == ""){
        document.querySelector(".validation").classList.remove("d-none");
        return;
    } else {
         document.querySelector(".validation").classList.add("d-none");
    }

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerText = text;

    // Create delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt text-danger delete-icon";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", function() {
        ul.removeChild(li);
    });

    li.appendChild(deleteIcon);
    ul.append(li);
    input.value = "";
});
