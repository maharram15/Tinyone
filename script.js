window.onscroll = function() {
    scrollwd();
}

function scrollwd() {
    let scroll = document.documentElement.scrollTop;
    let height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height1) * 100;
    let n = document.getElementById('myBar');
    myBar.style.width = scrolled + "%";
}
console.log(scrollwd)