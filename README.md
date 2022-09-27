# Project I

Welcome! This repo contains helpful information and starter files for your project, just fork this repo and go to town!

## Team members

Write here the names, career path and email of the members of the team

## Assignation 

Please use this format for your User Stories assignations

| User Stories     | John Doe | Jane Doe |
| ---------------- | :--: | ---: |
| Add US text here |  X   |      |
| Add US text here |      |    X |
| Add US text here |  X   |      |

# Live demo

Please include here a link to your [live demo](url_here_please)

# Requeriments
You need to use the same version of node that we use in class and no external dependices can be used. This means no frameworks or libraries.

# How to play
pls, add this!!!!!!

# UserStory 3, 4, and, 5
This was programmed using a state machine, and even handdlers to update
game obj.

```javascript
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
```
Each button html was created as a "prop" entity on a buttonProperties object that contains all meta information related with it-self.
e.g.

```javascript
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
        ...
```
So, we got each element by the game.

Also, we programed a function that gets a random html button properties an mimic the computer press button

```javascript
function randomButtonColor()
function computerPressRndColor(rndBtnColor)
```
randomButtonColor deliver a random html button that computerPressRndColor use to mimic the clicking using styles in css

The full logic is supported like a finite state machine thart controlls the current state in base of game object on a setInterval in order to not block the html web page and eventListener on buttons (See the code to get a full context on this).
```javascript
function main () {
    //Async Programming like a for infinity loop without blocking my page.
    setInterval( async function () {
        switch (game.state) {
            case state.userPlaying:
                if (game.lives >= 1 ) {...
                } else {...
                }
                if (game.sendMessage == true) {...
                }
                break;
            case state.computerPlaying:...
            }
            if (game.state != start.stop) { ...
            }
        }
    }, 1000 );
};
```
So everithing a button is clicled the events excuted is checking if the answer provided is correct
```javascript
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
                this.htmlElemt.classList.remove(this.htmlElemt.className);
            }
        }
    });
}

```
According with the audios we added to buttonsProperties a object that point to the audio stored in s3 aws

```javascript
const buttonsProperties = {
    green: {
        colorPressed: "#02ffd1",
        color: "#038C73",
        htmlElemt: document.querySelector("#firstGrn"),
        audio: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        value: 0,
        init: callBackListener,
    },
    ...
};
```
