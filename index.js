//Global counters
let playing=false; //To know if some game is being played
let PCturn=false; //To know if pc is playing
let lives=3; //to count left lives
let level=0; //To know actual level
let left=20; //To know how many levels (not vary wgen a game is being played)
let pressed=0; //To store the pressed button (may be not necesary)
let correct=0; //To store and compare the correct value
let dificult=2;

//dummy variables


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
    switch(dificult){
        case 1:{getHistory("STARTED EASY");
    break;}
        case 2:{getHistory("STARTED NORMAL");
    break;}
        case 3:{getHistory("STARTED HARD");
    break;}
        case 4:{getHistory("DARK SOULS MODE");
    break;}  
    }
    
    level=1;
    left=4;
    lives=3;
    playing=true;
    getLives(lives);
    getCount(level);
    /*gameArray=HERE GOES A FUNCTION THAT TAKES A LENGTH and returns a 
    random array of numbers from (1-4) of N LENGHT (1 argument)*/
    gameArray=[2,3,4,5]; //Tutorial array
}

function stopgame()
{
    level=0;
    left=20;
    playing=false;
    getHistory("STOPPED");
    getLives("NO GAME");
    getCount("0");
    
}

function restartgame()
{
    switch(dificult){
        case 1:{getHistory("reset EASY");
    break;}
        case 2:{getHistory("reset NORMAL");
    break;}
        case 3:{getHistory("reset HARD");
    break;}
        case 4:{getHistory("reset MODE");
    break;}  
    }

    level=1;
    left=4;
    lives=1; //Setted 1 live to see a change
    playing=true;
    gameArray=[1,3,2,1];
    getLives(lives);
    getCount(level);
}

function printCrrntSec(arr, turn)
{

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
    lightOn(circle);

    if(playing==false){
        startgame();
    }

    else if (playing==true){
        restartgame()
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

    if(playing==false){
        startgame();
    }
    
    else if(playing==true){
        stopgame();
    }
});

start.addEventListener('mouseleave', function(){
removeDimm(start);
});

//Dificult buttons
const easy = document.querySelector('#easy');
easy.addEventListener('click', function(){
getHistory('easy-pressed');
dificult=1; 
});

const normal = document.querySelector('#normal');
normal.addEventListener('click', function(){
getHistory('normal-pressed');
dificult=2; 
});

const hard = document.querySelector('#hard');
hard.addEventListener('click', function(){
getHistory('hard-pressed');
dificult=3; 
});

//---end of events---//
