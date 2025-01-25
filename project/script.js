let img = document.querySelectorAll('img')
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        localStorage.image = img[i].src;
        location.href= "frag.html";
    }
    
}