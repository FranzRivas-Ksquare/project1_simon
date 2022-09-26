

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

//------------Events-----------

//--For clicking and moving mouse
//green
const firstGrn = document.querySelector('#firstGrn');

firstGrn.addEventListener('click', function()
{
    firstGrn.setAttribute('class', 'light');
});

firstGrn.addEventListener('mouseenter', function()
{
    firstGrn.setAttribute('class', 'mouseover');
});

firstGrn.addEventListener('mouseleave', function()
{
    firstGrn.removeAttribute('class', 'mouseover')
});


//red
const secondRed = document.querySelector('#secondRed');

secondRed.addEventListener('click', function()
{
    secondRed.setAttribute('class', 'light');
});

secondRed.addEventListener('mouseenter', function()
{
    secondRed.setAttribute('class', 'mouseover');
});

secondRed.addEventListener('mouseleave', function()
{
    secondRed.removeAttribute('class', 'mouseover')
});


//blue
const thirdBlu = document.querySelector('#thirdBlu');

thirdBlu.addEventListener('click', function()
{
    thirdBlu.setAttribute('class', 'light');
});

thirdBlu.addEventListener('mouseenter', function()
{
    thirdBlu.setAttribute('class', 'mouseover');
});

thirdBlu.addEventListener('mouseleave', function()
{
    thirdBlu.removeAttribute('class', 'mouseover')
});

//yellow
const fourthYlw = document.querySelector('#fourthYlw');

fourthYlw.addEventListener('click', function()
{
    fourthYlw.setAttribute('class', 'light');
});

fourthYlw.addEventListener('mouseenter', function()
{
    fourthYlw.setAttribute('class', 'mouseover');
});

fourthYlw.addEventListener('mouseleave', function()
{
    fourthYlw.removeAttribute('class', 'mouseover')
});



const start = document.querySelector('start');
start.addEventListener('click', function(){
    document.querySelector("#count").textContent = "esto es un evento";
});