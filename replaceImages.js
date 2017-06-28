function findImage(i) {
    $.get("https://www.google.com/search?hl=en&site=imghp&tbm=isch&source=hp&biw=1280&bih=620&q=taylor+swift+imagesize%3D" + i.width + "x" + i.height + "&gs_l=img.3...32.3729.0.3889.30.27.0.0.0.0.151.1909.21j5.26.0....0...1.1.64.img..4.16.1206...0.5Q6eknT9PLw", function(data, status) {
        var images = $("img");
        for (var i = 0; i < images.length; i++) {
            var s = images[i].src;
            console.log(s);
            if (s.startsWith("data")) {
                alert(s);
            }
        }
        return "http://az616578.vo.msecnd.net/files/2016/06/09/636010490078615374-141787448_cover.jpg"
    });
}

function replaceImages() {
    var imgs = document.getElementsByTagName("img");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].src = findImage(imgs[i]);
    }
}

window.onload = replaceImages();
