function findImage(img) {
    var w = img.width;
    var h = img.height;
    $.getJSON("https://www.googleapis.com/customsearch/v1?q=Taylor+Swift+imagesize:" + specifySize(img) + "&cx=" + keys.SEARCH_ENGINE_ID + "&num=10&searchType=image&key=" + keys.API_KEY,
            function(data) {
                img.src = data.items[Math.floor(10*Math.random())].link;
                img.width = w;
                img.height = h;
            });
}

function specifySize(img) {
    var ratio = img.width / img.height;
    var difference = Math.pow(ratio-1, 2);
    var k = 1;
    for (key in ratios) {
        var newDiff = Math.pow(ratio-key, 2);
        if (newDiff < difference) {
            difference = newDiff;
            k = key;
        }
    }
    return ratios[k];
    //return (100*Math.ceil(w/100)).toString() + "x" + (100*Math.ceil(h/100)).toString();
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        findImage(imgs[i]);
    }
}

var ratios = {}
ratios[9 / 16] = "1080x1920";
ratios[5 / 8] = "500x800";
ratios[3 / 4] = "768x1024";
ratios[4 / 5] = "1024x1280";
ratios[1 / 1] = "2048x2048";
ratios[5 / 4] = "1280x1024";
ratios[4 / 3] = "1920x1440";
ratios[8 / 5] = "3840x2400";
ratios[16 / 9] = "1920x1080";
window.onload = replaceImages();
