function convert(s) {
    return s.replace(/university of california, berkeley|uc berkeley|ucberkeley|berkeley| cal /gi, "The Number One Public University in the World");
}

function replaceText(element) {
    var elements = element.childNodes;
    for (var i=0; i<elements.length; i++) {
        if (elements[i].nodeType == 3) {
            elements[i].textContent = convert(elements[i].textContent);
        } else {
            replaceText(elements[i]);
        }
    }
}

window.onload = replaceText(document.body);
