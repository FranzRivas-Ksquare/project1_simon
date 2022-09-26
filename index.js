// --------------------------- Setting up audio --------------------------------------
const audioGreen = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const audioRed = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const audioYellow = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const audioBlue = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const audioStart = new Audio ("./media/sounds/button-start.mp3");
const audioWrong = new Audio("./media/sounds/button-wrong.mp3");

audioGreen.autoplay = true;
audioRed.autoplay = true;
audioYellow.autoplay = true;
audioBlue.autoplay = true;
audioStart.autoplay = true;
audioWrong.autoplay = false;

// --------------------------- Setting var, arr, obj --------------------------------------

const state = {
    win: 0,
    lose: -1,
    start: false, //Indicates when the game is running
    userTurn: false, //When user is cliking
    computerTurn: true, //When computer is drawin the patterns
    finish: false,
};

const difficulty = {
    easy: "easy",
    normal: "normal",
    hard: "hard",
};

const game =  {
    level: 1,
    difficulty: difficulty,
    state: state.start,
    cpuSelect: [],
    userSelect: [],
    score: 0,
    message: "Ready to play",
};

const buttons = ["green", "red", "yellow", "blue"];

const patronLogic = (element, value, name, audio) => {
    element.addEventListener("click", () => {
        if (userTurn) game.userSelect.push(value);
        if (!answerValidation()) {
            audioWrong.play();
            console.log(name);
        } else {
            callBackSound(audio);
        }
    });
};

//Setting selflight colors
const buttonsProperties = {
    green: {
        name: "green",
        audio: audioGreen,
        colorPressed: "#02ffd1",
        color: "#038C73",
        htmlElemt: document.querySelector(".b-green"),
        value: 0,
        init: function () {
            patronLogic(this.htmlElemt, this.value, this.name, this.audio)
        }
    },
    red:  {
        name: "red",
        audio: audioRed,
        colorPressed: "#f94d27",
        color: "#9a250a",
        htmlElemt: document.querySelector(".b-red"),
        value: 1,
        init: function () {
            patronLogic(this.htmlElemt, this.value, this.name, this.audio)
        }
    },
    yellow: {
        name: "yellow",
        audio: audioYellow,
        colorPressed: "#ffea06",
        color: "#8a7f09",
        htmlElemt: document.querySelector(".b-yellow"),
        value: 2,
        init: function () {
            patronLogic(this.htmlElemt, this.value, this.name, this.audio)
        }
    },

    blue: {
        name: "blue",
        audio: audioBlue,
        colorPressed:"#099df9",
        color: "#055b91",
        htmlElemt: document.querySelector(".b-blue"),
        value: 3,
        init: function () {
            patronLogic(this.htmlElemt, this.value, this.name, this.audio)
        }
    },
};

// -------------------------------  functions -------------------------------------------------


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


// --------------------------- GAME  functions ---------------------------------------

// Random color generetor
function randomButtonColor(){
    let color =  buttons[Math.floor(Math.random() * 4)];
    return buttonsProperties[color];
};

// Make the cpu highligh a randon color
function computerPressRndColor(){
    let { htmlElemt } = randomButtonColor(); 
    let lastClassName = htmlElemt.className;
    htmlElemt.className =  `${htmlElemt.className}-active`;
    setTimeout(()=>{
        htmlElemt.className = lastClassName;
    }, 1000);
    console.log(htmlElemt);
};

function answerValidation () {
    console.log(`user Pressed: ${game.userSelect}`);
    return game.userSelect.some((value, index) => game.cpuSelect[index] == value);
};

function resetInputs(array) {
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

//-----Setting events-----

const buttonGreen = document.querySelector(".b-green");
buttonGreen.addEventListener("click", function () { callBackSound(audioGreen);  });
const buttonRed = document.querySelector(".b-red");
buttonRed.addEventListener("click", function () { callBackSound(audioRed);  });
const buttonYellow = document.querySelector(".b-yellow");
buttonYellow.addEventListener("click", function(){ callBackSound(audioYellow);  });
const buttonBlue = document.querySelector(".b-blue");
buttonBlue.addEventListener("click", function(){ callBackSound(audioBlue);  });

const menuStart = document.querySelector("#start");
menuStart.addEventListener("click", function(){ 
    callBackSound(audioStart);
    if (game.state) {
        game.state = false;
    } else {
        game.state = true;
    };
});

const buttonStart = document.querySelector("#circle");
buttonStart.addEventListener("click", function() { 
    callBackSound(audioStart);
    game.level = 1;
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

        switch (game.state) {
            case state.userPlaying:
                const isUserCorrectNow = answerValidation(); //Read the current inputs, in case that user do a mistake it throw false
                console.log("isCorrect: ", isUserCorrectNow);
                if(!isUserCorrectNow) {
                    game.cpuSelect = [];
                    game.userSelect = [];
                    game.state =  state.computerPlaying;
                    game.message = "You lose";
                    game.sendMessage = true;
                    game.level = 1;
                    game.state = state.start;
                } else if (isUserCorrectNow) {
                    game.level++;
                    const updatedLevel = game.level;
                    game.cpuSelect = [];
                    game.userSelect = [];
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
                if (game.cpuSelect.length < game.level){
                    const rdnBtmColor =  randomButtonColor()
                    await computerPressRndColor(rdnBtmColor);
                    game.cpuSelect.push(rdnBtmColor.value); //When computers click a button it is stored in global
                    console.log(game);
                    //TODO: Ommit user interations with user
                } else {
                    game.state = state.userPlaying;
                }

                break;
        }
        console.log("user: ", game.userSelect);
        console.log("computer: ", game.cpuSelect);
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
