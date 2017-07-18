function findImage(img) {
    var l = null;
    $.getJSON({"https://www.googleapis.com/customsearch/v1?q=Taylor+Swift&cx=" + keys.SEARCH_ENGINE_ID + "&num=10&searchType=image&key=" + keys.API_KEY, function(data) {
        return l = data.items[Math.floor(10*Math.random())].link;
    });
    return l;
}

function specifySize(i) {
    var ratio = i.width / i.height;
    function ssr(x, y) {
        return Math.sqrt(Math.pow(i.width-x, 2) + Math.pow(i.height-y, 2));
    }
//    if ssr(
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        var w = imgs[i].width;
        var h = imgs[i].height;
        imgs[i].src = findImage(imgs[i]);
        imgs[i].width = w;
        imgs[i].height = h;
    }
}

var ratios = [9 / 16, 5 / 8, 3 / 4, 4 / 5, 1 / 1, 5 / 4, 4 / 3, 8 / 5, 16 / 9];
window.onload = replaceImages();
