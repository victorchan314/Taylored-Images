function findImage(i) {
    return "http://az616578.vo.msecnd.net/files/2016/06/09/636010490078615374-141787448_cover.jpg"
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].src = findImage(imgs[i]);
    }
}

window.onload = replaceImages();
