function convert(s) {
    return s.replace(/university of california, berkeley|uc berkeley|ucberkeley|berkeley| cal /gi, "The Number One Public University in the World");
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].src = "http://az616578.vo.msecnd.net/files/2016/06/09/636010490078615374-141787448_cover.jpg";
    }
}

window.onload = replaceImages();
