function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return '-1';
}
function setStyle(id, stylename, styleval) {
    document.getElementById(id).style[stylename] = styleval;
}
function unsetStyle(id, stylename) {
    document.getElementById(id).removeAttribute(stylename);
}
(function () {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month == 12 && day == 13) {
        setStyle("html", "-webkit-filter", "grayscale(100%)");
        setStyle("html", "-moz-filter", "grayscale(100%)");
        setStyle("html", "-ms-filter", "grayscale(100%)");
        setStyle("html", "-o-filter", "grayscale(100%)");
        setStyle("html", "filter", "grayscale(100%)");
    }
})();