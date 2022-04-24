"use strict";

var countEl = document.getElementById("count-el");
var saveEl = document.getElementById("save-el");
var count = "i am hungry";

function increment() {
  count += 1;
  countEl.innerHTML = count;
}

function save() {
  var countstr = count + " - ";
  saveEl.innerHTML += countstr;
  countEl.innerHTML = count = 0;
}