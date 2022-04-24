"use strict";

function generate() {
  var quotes = {
    " - Oliver Tombo": '"The fight for freedom must go on until it is won; until our country is free and happy and peaceful as part of the community of man, we cannot rest"',
    "- Mary Astell": '"If all men are born free, how is it that all women are born slaves?"',
    "- Nenia Campbell": '"You want to be free. You also want to be mine. You cant be both"',
    "-Lauren DeStefano, Fever": '“But there’s no such thing as free. There are only different and more horrible ways to be enslaved.”',
    "-Carol Burnett": '“When you have a dream, you’ve got to grab it and never let go.”',
    "-Audrey Hepburn": ' “Nothing is impossible. The word itself says ‘I’m possible!"',
    "-Michael Altshuler": '"“The bad news is time flies. The good news is you’re the pilot.”"'
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}