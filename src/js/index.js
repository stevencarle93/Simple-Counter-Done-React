import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let counter_DigOne = 0
let counter_DigTwo = 0
let counter_DigThree = 0
let counter_DigFour = 0
let counter_DigFive = 0
let counter_DigSix = 0

function countValidation() {
    if (counter_DigOne < 9) counter_DigOne++
    else if (counter_DigTwo < 9){
        counter_DigOne = 0
        counter_DigTwo++
    }
    else if (counter_DigThree < 9){
        counter_DigOne = 0
        counter_DigTwo = 0
        counter_DigThree++
    }
    else if (counter_DigFour < 9){
        counter_DigOne = 0
        counter_DigTwo = 0
        counter_DigThree = 0
        counter_DigFour++
    }
    else if (counter_DigFive < 9){
        counter_DigOne = 0
        counter_DigTwo = 0
        counter_DigThree = 0
        counter_DigFour = 0
        counter_DigFive++
    }
    else if (counter_DigSix < 9){
        counter_DigOne = 0
        counter_DigTwo = 0
        counter_DigThree = 0
        counter_DigFour = 0
        counter_DigFive = 0
        counter_DigSix++
    }
}

setInterval(() => {
    
    countValidation()

    ReactDOM.render(<Home 
        digit_One = {counter_DigOne}
        digit_Two = {counter_DigTwo}
        digit_Three = {counter_DigThree}
        digit_Four = {counter_DigFour}
        digit_Five = {counter_DigFive}
        digit_Six = {counter_DigSix}/>, document.querySelector("#app"))
}, 1000);
