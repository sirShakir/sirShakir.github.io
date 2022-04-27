var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var widthMain = document.getElementById('main').offsetWidth;
var heightMain = document.getElementById('main').offsetHeight;

canvas.width = widthMain;//window.innerWidth * .78;
canvas.height =heightMain;// window.innerHeight;

var squareWidth = canvas.width / 7;
var squareHeight = canvas.height / 4;

