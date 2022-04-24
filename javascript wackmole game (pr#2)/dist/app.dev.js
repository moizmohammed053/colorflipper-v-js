"use strict";

var squares = document.querySelectorAll('.square');
var mole = document.querySelector('.mole');
var timeLeft = document.querySelector('#time-left');
var score = document.querySelector('#score');
var startEl = document.getElementById("start-el");
var resetEl = document.getElementById("reset-el");
var result = 0;
var hitPosition;
var currentTime = 60;
var timerId = null;

function startgame() {
  function randomSquare() {
    squares.forEach(function (square) {
      square.classList.remove('mole');
    });
    var randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
  }

  squares.forEach(function (square) {
    square.addEventListener('mousedown', function () {
      if (square.id == hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    });
  });

  function moveMole() {
    timerId = setInterval(randomSquare, 700);
  }

  moveMole();

  function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert('GAME OVER! Your final score is ' + result);
    }
  }

  var countDownTimerId = setInterval(countDown, 1000);
}

function reset() {
  currentTime = 0;
}

reset();