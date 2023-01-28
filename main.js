const elInput = document.querySelector(".name");
const elInput2 = document.querySelector(".text");
const elInput3 = document.querySelector(".number");
const elbtn = document.querySelector(".btn");
const span = document.querySelector('.span')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')
let ul = document.querySelector('.contacts');



elbtn.addEventListener("click", function () {
    let value = elInput.value;
    let value2 = elInput2.value;
    let value3 = elInput3.value;

    let arr = [value, value2, value3];
    for (let i = 2; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] === "") {
            span.style.display = "block"
            span2.style.display = "block"
            span3.style.display = "block"
        }
        else {
            span.style.display = "none"
            span2.style.display="none"
            span3.style.display="none"
            let newLi = document.createElement('div');
            newLi.innerHTML = ` <ul class="inner__name">
            <li class="name">${value}</li>
            <li class="item">${value2}</li>
            <li class="tel"><a href="tel:+998933532717">+${value3}</a></li>
            </ul>`
            ul.appendChild(newLi);
            elInput.value="";
            elInput2.value="";
            elInput3.value="";
        }
    }
})