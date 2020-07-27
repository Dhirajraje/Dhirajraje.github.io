var detailWindow = document.getElementById('main-card');
var cards = document.getElementsByClassName('detail-card');
var cardIds = ['showcase', 'resume', 'skills', 'contact'];
var closeButton = document.getElementsByClassName('close');
// Close Window

function closeWindowCompletely(card) {
    detailWindow.style.left = '37.5%';
    card.style.left = '37.5%';
    console.log(card.style.left);
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