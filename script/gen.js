function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generate() {
    let url = "./data/dict.json";
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            // console.log(json);
            let subject = choice(json['subject']);
            let predicate = choice(json['predicate']);
            let object = choice(json['object']);
            let attribute = choice(json['attribute']);
            let adverbial_1 = choice(json['adverbial-1']);
            let adverbial_2 = choice(json['adverbial-2']);
            let html = '';
            html += `<div class='adverbial'>${adverbial_1}</div>`;
            html += `，`;
            html += `<div class='subject'>${subject}</div>`;
            html += `<div class='adverbial'>${adverbial_2}</div>`;
            html += `<div class='predicate'>${predicate}</div>`;
            html += `<div class='attribute'>${attribute}</div>`;
            html += `<div class='object'>${object}</div>`;
            html += `。`;
            document.getElementById("sentence").innerHTML = html;
        }
    }
}