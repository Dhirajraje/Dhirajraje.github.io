var detailWindow = document.getElementById('main-card');
var cards = document.getElementsByClassName('detail-card');
var cardIds = ['showcase', 'resume', 'skills', 'contact'];
var closeButton = document.getElementsByClassName('close');
var content = document.body.innerHTML;

function isBetween(min,max,val){
    if(val>=min&&val<=max)
        return true;
    else
        return false;
}
function resizeMsg(){
    var errorMsg = "<div id='Error-Msg'>We currently support aspect ratios between 1.73 to 2.35, So kindly resize your window or Rotate your phone.</div>";
    if(!isBetween(1.73,2.35,window.innerWidth/window.innerHeight)){
        document.body.removeChild(document.body.firstChild);
        document.body.innerHTML = errorMsg;
    }
    else
        if(document.body.innerHTML == errorMsg)
            window.close;
    console.log(document.body);
}

// window size issue

resizeMsg();

window.addEventListener('resize',()=>{
    resizeMsg();
})

// Close Window

function closeWindowCompletely(card) {
    detailWindow.style.left = '37.5%';
    card.style.left = '37.5%';
}

function closeWindow(card) {
    card.style.left = '25%';
}
for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', () => {
        event.preventDefault();
        for (var i = 0; i < cards.length; i++)
            closeWindowCompletely(cards[i]);
    })
}

//open window

function openWindow(card) {
    detailWindow.style.left = '25%';
    card.style.left = '50%';

}

document.getElementById('showcase').addEventListener('click', () => {
    for (var i = 0; i < cards.length; i++)
        closeWindow(cards[i]);
    openWindow(cards[0]);
})

document.getElementById('resume').addEventListener('click', () => {
    for (var i = 0; i < cards.length; i++)
        closeWindow(cards[i]);
    openWindow(cards[1]);
})

document.getElementById('skills').addEventListener('click', () => {
    for (var i = 0; i < cards.length; i++)
        closeWindow(cards[i]);
    openWindow(cards[2]);
})

document.getElementById('contact').addEventListener('click', () => {
    for (var i = 0; i < cards.length; i++)
        closeWindow(cards[i]);
    openWindow(cards[3]);
})

// Download resume

document.getElementsByClassName('button')[4].addEventListener('click', () => {
    event.preventDefault();
    window.open('Assets/Resume.pdf', '_blank');
})

// Contanct details

document.getElementById('Email').addEventListener('click', () => {
    event.preventDefault();
    window.open('mailto:dhirajraje113@gmail.com', '_blank');
})

document.getElementById('Mobile').addEventListener('click', () => {
    event.preventDefault();
    window.open('tel:+91 9923454467', '_blank');
})

document.getElementById('LinkedIn').addEventListener('click', () => {
    event.preventDefault();
    window.open('https://google.com', '_blank');
})

document.getElementById('Github').addEventListener('click', () => {
    event.preventDefault();
    window.open('https://github.com/Dhirajraje', '_blank');
})

document.getElementById('Facebook').addEventListener('click', () => {
    event.preventDefault();
    window.open('http://google.com', '_blank');
})

document.getElementById('Instagram').addEventListener('click', () => {
    event.preventDefault();
    window.open('http://google.com', '_blank');
})