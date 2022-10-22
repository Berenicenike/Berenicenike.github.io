function goTo(evt, path){
    console.log('navigation started');

    let target = null;
    let href = null;

    if(path){
        href = path;
    }

    else{
        evt.preventDefault();
        href = evt.target.href.split('/')[3];
    }

    target = document.getElementById(href).offsetTop;

    window.scrollTo({
        top: target - 140,
        behavior: 'smooth'
    });
}
let links = document.querySelector('#menu');
console.log(links);
links.forEach( function(link) {
    link.addEventListener('click', goTo);
});