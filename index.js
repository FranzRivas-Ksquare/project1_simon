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

//------------Events-----------

//--For clicking and moving mouse
//---green
const firstGrn = document.querySelector('#firstGrn');

firstGrn.addEventListener('click', function()
{
    lightOn(firstGrn);
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



const start = document.querySelector('start');
start.addEventListener('click', function(){
    document.querySelector("#count").textContent = "esto es un evento";
});
