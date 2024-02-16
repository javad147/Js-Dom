"use strict";

//let h1= document.getElementsByTagName("h1");

// let elems = document.getElementsByClassName("test");
//console.log(elems)


// for (const iteraitemtor of elems){
//     console.log(item)
// }


// let elems = document.getElementsById("salam");
// console.log(elems)

// let elem = document.querySelector("h1")
// for (const item of elems){
//     console.log(item)
// }

// console.log(elems)

// let elem = document.querySelector(".text");
// console.log(elem.innerHTML)
// console.log(elem.innerText)

// elem.innerText ="salamlar";
// elem.innerHtml ="<h1>salamlar</h1>";

// elem.style.color = "red";
// elem.style.backgroundColor = "blue";
// elem.style.padding = "50px";

//elem.className = "salam";

//elem.classList.add("salam");

//elem.classList.remove("test2");

// if(elem.classList.contains("test2")){
//     elem.classList.remove("test2")
// }


// let btn = document.querySelector(".add");
// console.log(btn)

// btn,onclick =function(){
//     this.alert("salamlar")
// }

// btn,onclick =function(){
//     this.alert("necesiz?")
// }


//Ev tapsirigi buna oxsar olacaq 
// let firstElem=document.querySelector(".first");
// let secondElem=document.querySelector(".second");
// let box =document.querySelector(".text")


//  btn.addEventListener("click", function(){
    // alert("firstElem")
    // box.computedStyleMap.backgroundColor = "red";
    // if(!box.classList.contains("first-color")){
    //     box.classList.add("first-color");
    // }else{
    //     box.classList.add("second-color");
    // }

    //  box.classList.add("first-color");
// })
//  btn.addEventListener("click", function(){
    //  alert("secondElem")
    //  box.computedStyleMap.backgroundColor = "yellow";
    //box.classList.add("second-color");
//     if(!box.classList.contains("second-color")){
//         box.classList.add("second-color");
//     }else{
//         box.classList.add("first-color");
//     }
//  })
//Burdada bitir


let ul=document.querySelector("ul");
console.log(ul)

document.querySelector(".add").addEventListener("click",function(){

    let input = document.querySelector(".input-text");
    let text =input.value;

    if (text.trim() == ""){
        document.querySelector(".validation").classList.remove("d-none");
        return;
    }else{
         document.querySelector(".validation").classList.add("d-none");
    }

    let li =document.createElement("li");
    li.className="list-group-item";
    li.innerText=text;
    ul.append(li)
    console.log(li)
    input.value="";
})

 