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

const state = {
    win: -1,
    lose: -2,
    start: 0,
    userPlaying: 1, //When user is cliking
    computerPlaying: 2, //When computer is drawin the patterns
    finish: 3,
}

const buttons = ["green", "red", "yellow", "blue"];
const buttonsProperties = {
    green: {
        colorPressed: "#02ffd1",
        color: "#038C73",
        htmlElemt: document.querySelector(".b-green"),
        value: 0,
        init: function () {
            this.htmlElemt.addEventListener("click", function () { callBackSound(audioGreen); console.log("green");});
        }
    },
    red:  {
        colorPressed: "#f94d27",
        color: "#9a250a",
        htmlElemt: document.querySelector(".b-red"),
        value: 1,
        init: function () {
            this.htmlElemt.addEventListener("click", function () { callBackSound(audioRed); console.log("red"); });
        }
    },
    yellow: {
        colorPressed: "#ffea06",
        color: "#8a7f09",
        htmlElemt: document.querySelector(".b-yellow"),
        value: 2,
        init: function () {
            this.htmlElemt.addEventListener("click", () => { callBackSound(audioYellow); htmlElemt.style.background = this.colorPressed});
        }
    },

    blue: {
        colorPressed:"#099df9",
        color: "#055b91",
        htmlElemt: document.querySelector(".b-blue"),
        value: 3,
        init: function () {
            this.htmlElemt.addEventListener("click", function () { callBackSound(audioBlue); console.log("blue") });
        }
    },
};

const game =  {
    level: 1,
    state: state.start,
    isStarted: false,
    computerPressed: [],
}

function randomButtonColor(){
    const color =  buttons[Math.floor(Math.random() * 4)];
    const buttonColor =  buttonsProperties[color];
    return buttonColor;
}

function computerPressRndColor(rndBtnColor){
    const { htmlElemt } = rndBtnColor; 
    const lastClassName = htmlElemt.className;
    htmlElemt.className =  `${htmlElemt.className}-active`;
    setTimeout(()=>{
        htmlElemt.className = lastClassName;
    }, 1000);
    console.log(htmlElemt);
}

function callBackSound(audioObj) {
    audioObj.load();
    audioObj.play();
}


buttonsProperties.green.init();
buttonsProperties.red.init();
buttonsProperties.yellow.init();
buttonsProperties.blue.init();

const buttonStart = document.querySelector("#circle");
buttonStart.addEventListener("click", function()
{ 
    callBackSound(audioStart);
    game.state =  state.computerPlaying;
    game.level = 1;
});

let count = 0;

function main () {
    //Async Programming like a for infinity loop without blocking my page.
    setInterval( async function () {
        // computerPressRndColor(randomButtonColor());
        // console.log(randomButtonColor());
        console.log(game.state)
        console.log(game.computerPressed)
        switch (game.state) {
            case state.userPlaying:

                break;
            case state.computerPlaying:
                if (game.computerPressed.length < game.level){
                    const rdnBtmColor =  randomButtonColor()
                    await computerPressRndColor(rdnBtmColor);
                    game.computerPressed.push(rdnBtmColor);
                    console.log(game);
                } else {
                    game.state = state.userPlaying;
                }

                break;
        }
    }, 2000 );
};

main();
