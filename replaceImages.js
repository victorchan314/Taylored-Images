function findImage(img) {
    $.getJSON("https://www.googleapis.com/customsearch/v1?q=Taylor+Swift&cx=" + keys.SEARCH_ENGINE_ID + "&num=10&searchType=image&key=" + keys.API_KEY, function(data) {
        return data.items[Math.floor(10*Math.random())].link;
    });
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].src = findImage(imgs[i]);
    }
}

window.onload = replaceImages();
