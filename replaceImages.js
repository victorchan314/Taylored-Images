function findImage(img) {
    $.getJSON("https://www.googleapis.com/customsearch/v1?q=Taylor+Swift&cx=" + keys.SEARCH_ENGINE_ID + "&num=1&searchType=image&key=" + keys.API_KEY, function(data) {
        console.log(data.items[0].link);
        //return data.items[0].link;

    });
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].src = findImage(imgs[i]);
    }
}

window.onload = replaceImages();
