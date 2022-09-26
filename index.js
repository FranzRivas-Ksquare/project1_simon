//Global counters
let playing=false; //To know if some game is being played
let PCturn=false; //To know if pc is playing
let lives=3; //to count left lives
let level=0; //To know actual level
let left=20; //To know how many levels (not vary wgen a game is being played)
let pressed=0; //To store the pressed button (may be not necesary)
let correct=0; //To store and compare the correct value

//-------------------------------------
//HERE GOES THE INITIALIZATION FOR SOUNDS
//-----PLEASE BE CAREFUL WHEN ADDING-----
//---------------FEATURES----------------
//---------------------------------------

let fakevalue="js generated";

//--------------Functions-------------

// TODO: Take a count and display it in th count screen
function getCount(currentcount){
    document.querySelector("#count").textContent = currentcount;
};

// TODO: Take number of lives and display it in LIVES
function getLives(currentLives){
    document.querySelector("#lives").textContent = currentLives;
};

// TODO: Take an argument and display it in history
function getHistory(currenthistory){
    document.querySelector(".historie").textContent = currenthistory;
};

//TODO: to turn on the button light taking an argument
function lightOn(btncolor){
btncolor.setAttribute('class', 'light');
};

//TODO: to put the preselected dimmed color in its button
function dimmOver(btncolor){
    btncolor.setAttribute('class', 'mouseover');
    };

//TODO: to remove the preselected dimmed color from its button
function removeDimm(btncolor){
    btncolor.removeAttribute('class', 'mouseover');
    };



//----SIMON AUX FUNCTIONS-----
function startgame()
{
    level=1;
    left=20;
    lives=3;
    playing=true;
    getHistory("Game would Strt");
    getLives(lives);
    getCount(level);
}

function stopgame()
{
    level=0;
    left=20;
    lives=3;
    playing=false;
    getHistory("Game would STOP");
    getLives("NO GAME");
    getCount(level);
    
}



//--SIMN AUX FUNCTIONS---

//------------Events-----------

//--For clicking and moving mouse
//---green
const firstGrn = document.querySelector('#firstGrn');

firstGrn.addEventListener('click', function()
{
    if(playing==false){
        lightOn(firstGrn);
    }
});

firstGrn.addEventListener('mouseenter', function()
{
    dimmOver(firstGrn);
});

firstGrn.addEventListener('mouseleave', function()
{
    removeDimm(firstGrn);
});


//---red
const secondRed = document.querySelector('#secondRed');

secondRed.addEventListener('click', function()
{
    lightOn(secondRed);
});

secondRed.addEventListener('mouseenter', function()
{
    dimmOver(secondRed);
});

secondRed.addEventListener('mouseleave', function()
{
    removeDimm(secondRed);
});


//---blue
const thirdBlu = document.querySelector('#thirdBlu');

thirdBlu.addEventListener('click', function()
{
    lightOn(thirdBlu);
});

thirdBlu.addEventListener('mouseenter', function()
{
    dimmOver(thirdBlu);
});

thirdBlu.addEventListener('mouseleave', function()
{
    removeDimm(thirdBlu);
});

//---yellow
const fourthYlw = document.querySelector('#fourthYlw');

fourthYlw.addEventListener('click', function()
{
    lightOn(fourthYlw);
});

fourthYlw.addEventListener('mouseenter', function()
{
    dimmOver(fourthYlw);
});

fourthYlw.addEventListener('mouseleave', function()
{
    removeDimm(fourthYlw);
});

//---Circle

const circle = document.querySelector('#circle');

circle.addEventListener('click', function()
{
    level=0;

    if(playing==false){
        lightOn(circle);
        getHistory("Game Started");
        playing=true;
    }

    else if (playing==true){
        getHistory("Game Reestarted");
    }
    
});

circle.addEventListener('mouseenter', function()
{
    dimmOver(circle);
});

circle.addEventListener('mouseleave', function()
{
    removeDimm(circle);
});

//---Start

const start = document.querySelector('#start');
start.addEventListener('click', function(){

    lightOn(start);
    level=0;

    if(playing==false){
        startgame();
    }
    
    if(playing==true){
        getHistory("Game Stoped");
        playing=false;
    }
});

start.addEventListener('mouseleave', function(){
removeDimm(start);
});
