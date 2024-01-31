function reveal() {
    setTimeout(() => {
        document.getElementsByClassName('filter')[0].style.opacity = '1';
    }, 300);
    setTimeout(() => {
        document.getElementsByTagName('main')[0].innerHTML = '';
    }, 700);
}