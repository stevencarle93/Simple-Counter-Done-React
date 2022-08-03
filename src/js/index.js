import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let counterOne = 0
let counterTwo = 0
let counterThree = 0
let counterFour = 0
let counterFive = 0
let counterSix = 0

function countValidation() {
    if (counterOne < 9) counterOne++
    else if (counterTwo < 9){
        counterOne = 0
        counterTwo++
    }
    else if (counterThree < 9){
        counterOne = 0
        counterTwo = 0
        counterThree++
    }
    else if (counterFour < 9){
        counterOne = 0
        counterTwo = 0
        counterThree = 0
        counterFour++
    }
    else if (counterFive < 9){
        counterOne = 0
        counterTwo = 0
        counterThree = 0
        counterFour = 0
        counterFive++
    }
    else if (counterSix < 9){
        counterOne = 0
        counterTwo = 0
        counterThree = 0
        counterFour = 0
        counterFive = 0
        counterSix++
    }
}

setInterval(() => {
    
    countValidation()

    ReactDOM.render(<Home 
        digitOne = {counterOne}
        digitTwo = {counterTwo}
        digitThree = {counterThree}
        digitFour = {counterFour}
        digitFive = {counterFive}
        digitSix = {counterSix}/>, document.querySelector("#app"))
}, 1000);
