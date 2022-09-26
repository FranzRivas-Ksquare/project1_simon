// ------------------------- Seting audio effects ------------------------------------
const audioGreen = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
audioGreen.autoplay = true;

const audioRed = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
audioRed.autoplay = true;

const audioYellow = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
audioYellow.autoplay = true;

const audioBlue = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
audioBlue.autoplay = true;

const audioStart = new Audio ("./media/sounds/button-start.mp3");
audioStart.autoplay = true;

const audioWrong = new Audio("./media/sounds/button-wrong.mp3");
audioWrong.autoplay = false;

// --------------------------- Setting var, arr, obj --------------------------------------

const state = {
    win: -1,
    lose: -2,
    start: 0, //Indicates when the game is running
    userPlaying: 1, //When user is cliking
    computerPlaying: 2, //When computer is drawin the patterns
    finish: 3,
};

let fakecount="JS generated!"; //a fakecount to simulate a fake score

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
    difficulty: difficulty,
    message: "Ready to play",
    score: 0,
};

const buttons = ["green", "red", "yellow", "blue"];

//Setting selflight colors
const buttonsProperties = {
    green: {
        colorPressed: "#02ffd1",
        color: "#038C73",
        htmlElemt: document.querySelector(".b-green"),
        value: 0,
        init: function () {
            this.htmlElemt.addEventListener("click", () => {
                if (!game.state != state.computerPlaying) game.userPressed.push(this.value);
                if (!isUSerInputCorretUntilNow()) {
                    audioWrong.play();
                    console.log("green");
                } else {
                    callBackSound(audioGreen);
                }
            });
        }
    },
    red:  {
        colorPressed: "#f94d27",
        color: "#9a250a",
        htmlElemt: document.querySelector(".b-red"),
        value: 1,
        init: function () {
            this.htmlElemt.addEventListener("click", () => {
                if (!game.state != state.computerPlaying) game.userPressed.push(this.value);
                if (!isUSerInputCorretUntilNow()) {
                    audioWrong.play();
                } else {
                    callBackSound(audioRed); console.log("red");
                }
            });
        }
    },
    yellow: {
        colorPressed: "#ffea06",
        color: "#8a7f09",
        htmlElemt: document.querySelector(".b-yellow"),
        value: 2,
        init: function () {
            this.htmlElemt.addEventListener("click", () => {
                if (!game.state != state.computerPlaying) game.userPressed.push(this.value);
                if (!isUSerInputCorretUntilNow()) {
                    audioWrong.play();
                } else {
                    callBackSound(audioYellow); console.log("yellow");
                }
            });
        }
    },

    blue: {
        colorPressed:"#099df9",
        color: "#055b91",
        htmlElemt: document.querySelector(".b-blue"),
        value: 3,
        init: function () {
            this.htmlElemt.addEventListener("click",  () => {
                if (!game.state != state.computerPlaying) game.userPressed.push(this.value);
                if (!isUSerInputCorretUntilNow()) {
                    audioWrong.play();
                } else {
                    callBackSound(audioBlue); console.log("blue");
                }
            });
        }
    },
};

//Getting 1 random color to add...
function randomButtonColor(){
    const color =  buttons[Math.floor(Math.random() * 4)];
    const buttonColor =  buttonsProperties[color];
    return buttonColor;
}

//Basic function to make de pc highligh a rndon color
function computerPressRndColor(){
    const rndBtnColor = randomButtonColor();

    const { htmlElemt } = rndBtnColor; 
    const lastClassName = htmlElemt.className;
    htmlElemt.className =  `${htmlElemt.className}-active`;
    setTimeout(()=>{
        htmlElemt.className = lastClassName;
    }, 1000);
    console.log(htmlElemt);
};

//Bsc fnc to take a count and display it in th count screen
function getCount(currentcount){
    document.querySelector("#count").textContent = currentcount;
};

//Bsc fnc to take nmbr of lives and display it in LIVES
function getLives(currentLives){
    document.querySelector("#lives").textContent = currentLives;
};

//Bsc fnc to take an argument and display it in historie
function getHistory(currenthistory){
    document.querySelector(".historie").textContent = currenthistory;
};

function isUSerInputCorretUntilNow () {
    console.log("user Pressed: ", game.userPressed);
    return game.userPressed.some((value, index) => game.computerPressed[index] == value)
}
function resetInputs(array = []) {
    array = [];
}

function callBackSound(audioObj) {
    audioObj.load();
    audioObj.play();
};

//Initializing our colors to highligh
buttonsProperties.green.init();
buttonsProperties.red.init();
buttonsProperties.yellow.init();
buttonsProperties.blue.init();

const buttonStart = document.querySelector("#circle");
buttonStart.addEventListener("click", function() { 
    callBackSound(audioStart);
    game.state =  state.computerPlaying;
    game.level = 1;
    if (game.state) {
        game.state = false;
    } else {
        game.state = true;
    };
});

//-----Setting events-----

const buttonGreen = document.querySelector(".b-green");
buttonGreen.addEventListener("click", function () { callBackSound(audioGreen);  });
const buttonRed = document.querySelector(".b-red");
buttonRed.addEventListener("click", function () { callBackSound(audioRed);  });
const buttonYellow = document.querySelector(".b-yellow");
buttonYellow.addEventListener("click", function(){ callBackSound(audioYellow);  });
const buttonBlue = document.querySelector(".b-blue");
buttonBlue.addEventListener("click", function(){ callBackSound(audioBlue);  });

/*
const buttonStart = document.querySelector("#circle");
buttonStart.addEventListener("click", function(){ 
    callBackSound(audioStart);
    if (game.state) {
        game.state = false;
    } else {
        game.state = true;
    };
});
*/
const menuStart = document.querySelector("#start");
menuStart.addEventListener("click", function(){ 
    callBackSound(audioStart);
    if (game.state) {
        game.state = false;
    } else {
        game.state = true;
    };
});

const easy = document.querySelector("#easy");
easy.addEventListener("click", function(){
    game.difficulty = difficulty.easy;
    console.log(game.difficulty)
});
const normal = document.querySelector("#normal");
normal.addEventListener("click", function(){
    game.difficulty = difficulty.normal;
    console.log(game.difficulty)
});
const hard = document.querySelector("#hard");
hard.addEventListener("click", function(){
    game.difficulty = difficulty.hard;
    console.log(game.difficulty)
});

//--End of setting events--

let count = 0;

function main () {

    //Async Programming like a for infinity loop without blocking my page.
    setInterval( async function () {
        // computerPressRndColor(randomButtonColor());
        // console.log(randomButtonColor());
        // console.log(game);

        switch (game.state) {
            case state.userPlaying:
                const isUserCorrectNow = isUSerInputCorretUntilNow(); //Read the current inputs, in case that user do a mistake it throw false
                console.log("isCorrect: ", isUserCorrectNow);
                if(!isUserCorrectNow) {
                    game.computerPressed = [];
                    game.userPressed = [];
                    game.state =  state.computerPlaying;
                    game.message = "You lose";
                    game.sendMessage = true;
                    game.level = 1;
                    game.state = state.start;
                } else if (isUserCorrectNow) {
                    game.level++;
                    const updatedLevel = game.level;
                    game.computerPressed = [];
                    game.userPressed = [];
                    game.message = "You won, difficulty update to " + updatedLevel;
                    game.sendMessage = true;
                    game.score = updatedLevel - 1;
                    game.state =  state.computerPlaying;

                }

                if (game.sendMessage == true) {
                    console.log(game.message);
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
        console.log("user: ", game.userPressed);
        console.log("computer: ", game.computerPressed);
        console.log("--------------------------------");
    }, 2000 );

    setTimeout( function () {
        console.log("Async Programming");
    }, 5000);

    //Async Programming like a for infinity loop without blocking my page.
    setInterval( function () {
        if (game.state) {
            computerPressRndColor(randomButtonColor());
        }

        // console.log(randomButtonColor());
    }, 1000 );

};

main();
