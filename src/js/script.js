"use strict";

const mainContent = document.querySelector("#main");
const rating = document.querySelector(".rating");
const ratingitem = document.querySelectorAll(".ratingitem");
const submitBtn = document.querySelector(".btn-submit");
let selected_rate;

const xxx=rating.addEventListener("click", (e) => {
    for (const i of ratingitem) {
        i.classList.remove("selected")
    };
    e.target.classList.toggle("selected")
    return selected_rate = e.target.innerText
});

submitBtn.onclick = function () {
    if (selected_rate == undefined) {
        alert("Please rate before submit!")
    } else {
        let html = `
        <div class="container thanksContainer">
            <div class="img-wrapper">
                <img src="./src/img/illustration-thank-you.svg" aria-label="hidden">
            </div>
            <div class="selected_text">You selected <span class="selected_rate">${selected_rate}</span> out of 5</div>
            <div class="thankyou">Thank You</div>
            <p class="thank_text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            <button type="submit" onclick=rateAgain() class="btn rateAgain">RATE AGAIN</button>
        </div>
        `
        mainContent.innerHTML = html
    }
};












