function findImage(img) {
    $.getJSON("https://www.googleapis.com/customsearch/v1?q=Taylor+Swift+imagesize:" + specifySize(img) + "&cx=" + keys.SEARCH_ENGINE_ID + "&num=10&searchType=image&key=" + keys.API_KEY, function(data) {
        return data.items[Math.floor(10*Math.random())].link;
    });
}

function specifySize(i) {
    function ssr(x, y) {
        return Math.sqrt(Math.pow(i.width-x, 2) + Math.pow(i.height-y, 2));
    }
    if ssr(
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].src = findImage(imgs[i]);
    }
}

window.onload = replaceImages();
