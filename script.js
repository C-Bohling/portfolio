function expand(event) {
    console.log('expanding');
    const about = event.target.nextElementSibling;
    event.target.classList.toggle('active');
    if (about.style.maxHeight) {
        about.style.maxHeight = null;
    } else {
        about.style.maxHeight = about.scrollHeight + 'px';
    }
} 

const expandHeaders = document.getElementsByClassName('expand-header');
console.log(expandHeaders);

for (let header of expandHeaders) {
    header.onclick = expand;
}