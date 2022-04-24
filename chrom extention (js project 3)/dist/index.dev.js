"use strict";

var myLeads = [];
var inputEl = document.getElementById("input-el");
var inputBtn = document.getElementById("input-btn");
var ulEl = document.getElementById("ul-el");
var deleteBtn = document.getElementById("delete-btn");
var leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
var tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  var listItems = "";

  for (var i = 0; i < leads.length; i++) {
    listItems += "\n            <li>\n                <a target='_blank' href='".concat(leads[i], "'>\n                    ").concat(leads[i], "\n                </a>\n            </li>\n        ");
  }

  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});