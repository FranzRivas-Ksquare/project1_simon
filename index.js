//Global counters
let playing=false; //To know if some game is being played
let PCturn=false; //To know if pc is playing
let lives=3; //to count left lives
let lvl=0; //To know actual level
let lastpressed=0; //To store the pressed button (may be not necesary)
let correct=0; //To store and compare the correct value
let dificult=2;
let remain=1; //To know remaining answers to pass level
let gameArray=[];
let toWin=3; //Level needed to win

//dummy variables

//-------Audios
const greenAudio = document.getElementById("greenAudio");
const redAudio = document.getElementById("redAudio");
const yellowAudio = document.getElementById("yellowAudio");
const blueAudio = document.getElementById("blueAudio");
const startAudio = document.getElementById("startAudio");
const wrongAudio = document.getElementById("wrongAudio");
const winnerAudio = document.getElementById("winnerAudio");


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
function play()
{
    for (var i = 0; i < 20; i++) {
        gameArray.push(Math.floor(Math.random() * 4) + 1);
    };

};

function startgame()
{
    switch(dificult){
        case 1:{getHistory("STARTED EASY");
        lives=5
    break;}
        case 2:{getHistory("STARTED NORMAL");
        lives=3
    break;}
        case 3:{getHistory("STARTED HARD");
        lives=1
    break;}
        case 4:{getHistory("DARK SOULS MODE");
    break;}  
    }
    lvl=1;
    remain=1;
    
    lives=3;
    playing=true;
    getLives(lives);
    getCount(lvl);
    /*gameArray=HERE GOES A FUNCTION THAT TAKES A LENGTH and returns a 
    random array of numbers from (1-4) of N LENGHT (1 argument)*/
}

function stopgame()
{
    playing=false;
    getHistory("STOPPED");
    getLives("NO GAME");
    //getCount("NO GAME");
    
}

function Wingame()
{
    playing=false;
    getHistory("YOU WIN");
    getLives("YOU WIN");
    getCount("WINNER");
    
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

    lvl=1;
    remain=1;
    lives=1; //Setted 1 live to see a change
    playing=true;
    //gameArray=[1,3,2,1]; //different array in extra mode
    getLives(lives);
    getCount(lvl);
}


function lvlpassed(){
    lvl++;
    remain=lvl;
    getHistory("Level passed");
    getCount(lvl);
}

function chkAnswer(place){
    if(gameArray[lvl-remain]==lastpressed) //a good answer
        {
            remain--;

            if(remain==0){
                lvlpassed();
                if(lvl>toWin)
                {
                    Wingame();
                }
            }
            else{
                lightOn(place);
                getHistory("Correct!");
            }

        }

    else if(gameArray[lvl-remain]!=lastpressed) //Bad answer
    {
        getHistory("WRONG")
        lives--;
        getLives(lives);
        if(lives==0)
        {
            stopgame();
            getHistory("YOU LOOSE");
        }
        
    }
}


//--SIMN AUX FUNCTIONS---

//------------Events-----------

//--For clicking and moving mouse
//---green
const firstGrn = document.querySelector('#firstGrn');

firstGrn.addEventListener('click', function()
{
    lastpressed=1;
    if(playing==false){
        lightOn(firstGrn); //lightOn(Object)
    }
    //game behavior
    if(playing==true && PCturn==false)
    {
            //Checking last pressed
        chkAnswer(firstGrn);
        
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
    lastpressed=2;
    if(playing==false){
        lightOn(secondRed); //lightOn(Object)
    }
    //game behavior
    if(playing==true && PCturn==false)
    {
            //Checking last pressed
        chkAnswer(secondRed);
        
    }
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
    lastpressed=3;
    if(playing==false){
        lightOn(thirdBlu); //lightOn(Object)
    }
    //game behavior
    if(playing==true && PCturn==false)
    {
            //Checking last pressed
        chkAnswer(thirdBlu);
        
    }
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
    lastpressed=2;
    if(playing==false){
        lightOn(secondRed); //lightOn(Object)
    }
    //game behavior
    if(playing==true && PCturn==false)
    {
            //Checking last pressed
        chkAnswer(secondRed);
        
    }
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
