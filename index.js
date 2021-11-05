function closeDrawer(){
    var drawer = document.querySelector('.drawer');
    drawer.style.left = '-100%';
    var arrow = document.querySelector('.arrow');
    arrow.style.display = 'block';
}

function openDrawer(){
    var drawer = document.querySelector('.drawer');
    drawer.style.left = '0%';
    var arrow = document.querySelector('.arrow');
    arrow.style.display = 'none';
}

function scrollToId(id){
    document.scrollTo(id);
}