// JavaScript Document
console.log("hi");

function verhoogAantal(type) {
    const el = document.getElementById(`aantal-${type}`);
    let aantal = parseInt(el.textContent);
    el.textContent = aantal + 1;
}