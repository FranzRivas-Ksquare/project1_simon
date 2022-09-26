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
// ------------------------- Seting audio effects ------------------------------------

const audioStart = new Audio ("./media/sounds/button-start.mp3");
audioStart.autoplay = true;

const audioWrong = new Audio("./media/sounds/button-wrong.mp3");
audioWrong.autoplay = false;

// Game content for finity state machine

let fakevalue="js generated";

//--------------Functions-------------
const state = {
    win: -1,
    lose: -2,
    start: false, //Indicates when the game is running
    userPlaying: 1, //When user is cliking
    computerPlaying: 2, //When computer is drawin the patterns
    finish: 3,
    stop: 100,
};

const difficulty = {
    easy: "easy",
    normal: "normal",
    hard: "hard",
};

//Game settings
const game =  {
    level: 1,
    state: state.start,
    isStarted: false,
    computerPressed: [],
    userPressed: [],
    message: "Ready to play",
    score: 0,
    difficulty: difficulty.easy,
    lives: 3,
}

const buttons = ["green", "red", "yellow", "blue"];
//Setting buttonsProperties like html element and its value
function callBackListener(){
    this.htmlElemt.addEventListener("click", () => {
        if (game.state == state.userPlaying){
            game.userPressed.push(this.value);
            const isCorrect = isUSerInputCorretUntilNow();
            if (!isCorrect) {
                audioWrong.play();
                game.lives--;
                game.userPressed.pop();
            } else {
                this.audio.play();
            }
        }
    });
}
const buttonsProperties = {
    green: {
        colorPressed: "#02ffd1",
        color: "#038C73",
        htmlElemt: document.querySelector("#firstGrn"),
        audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        value: 0,
        init: callBackListener,
    },
    red:  {
        colorPressed: "#f94d27",
        color: "#9a250a",
        htmlElemt: document.querySelector("#secondRed"),
        value: 1,
        audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        init: callBackListener,
    },
    yellow: {
        colorPressed: "#ffea06",
        color: "#8a7f09",
        htmlElemt: document.querySelector("#fourthYlw"),
        audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
        value: 2,
        init: callBackListener
    },

    blue: {
        colorPressed:"#099df9",
        color: "#055b91",
        htmlElemt: document.querySelector("#thirdBlu"),
        audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
        value: 3,
        init: callBackListener
    },
};

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

// Gets a randon buttonProperty (htmlComponent)
function randomButtonColor(){
    const color =  buttons[Math.floor(Math.random() * 4)];
    const buttonColor =  buttonsProperties[color];
    return buttonColor;
}

// Mimic a button pressed
function computerPressRndColor(rndBtnColor){
    const { htmlElemt } = rndBtnColor; 
    const lastClassName = htmlElemt.className;
    htmlElemt.className =  `${htmlElemt.className}-active`;
    setTimeout(()=>{
        htmlElemt.className = lastClassName;
    }, 1000);
    console.log(htmlElemt);
}

// Check if it correct
function isUSerInputCorretUntilNow () {
    for(let i = 0; i < game.userPressed.length; i++) {
        if (game.userPressed[i] !==  game.computerPressed[i]){
            return false;
        }
    }
    return true;
}


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
    if(game.state == state.start){
        lightOn(circle);
        getHistory("Game Started");
        playing=true;
        game.state =  state.computerPlaying;
        game.level = 1;
        callBackSound(audioStart);
    }

    else if (playing==true){
        getHistory("Game Reestarted");
        // game.state = state.stop;
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


//Initializing our colors to highligh
buttonsProperties.green.init();
buttonsProperties.red.init();
buttonsProperties.yellow.init();
buttonsProperties.blue.init();


let count = 0;

function main () {
    //Async Programming like a for infinity loop without blocking my page.
    setInterval( async function () {
        switch (game.state) {
            case state.userPlaying:
                
                if (game.lives >= 1 ) {
                    const isUserCorrectNow = isUSerInputCorretUntilNow(); //Read the current inputs, in case that user do a mistake it throw false
                    if ((game.userPressed.length == game.computerPressed.length) &&  game.userPressed.length != 0 && isUserCorrectNow) {
                            game.level++;
                            const updatedLevel = game.level;
                            game.computerPressed = [];
                            game.userPressed = [];
                            game.message = "You won, level to " + updatedLevel;
                            game.sendMessage = true;
                            game.score = updatedLevel - 1;
                            game.state =  state.computerPlaying;
                    }
                } else {
                    console.log("perdiendo brooooo");
                            game.computerPressed = [];
                            game.userPressed = [];
                            game.message = "You lose";
                            game.sendMessage = true;
                            game.level = 1;
                            game.state = state.start;
                }

                if (game.sendMessage == true) {
                    console.log(game.message);
                    getHistory(game.message);
                    game.sendMessage = false; 
                }   
                break;
            case state.computerPlaying:
                if (game.computerPressed.length < game.level){
                    const rdnBtmColor =  randomButtonColor()
                    await computerPressRndColor(rdnBtmColor);
                    game.computerPressed.push(rdnBtmColor.value); //When computers click a button it is stored in global
                    console.log(game);
                    //TODO: Ommit user interations with user
                } else {
                    game.state = state.userPlaying;
                }

                break;
        }
        if (game.state != start.stop) {
            getLives(game.lives);
            console.log("user: ", game.userPressed);
            console.log("computer: ", game.computerPressed);
            console.log("--------------------------------");
        }
    }, 100 );
};

main();