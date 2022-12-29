function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generate(rnd) {
    let url = "./data/dict.json";
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            // console.log(json);
            let subject = rnd ? choice(json['subject']) : json['subject'][0];
            let predicate = rnd ? choice(json['predicate']) : json['subject'][0];
            let object = rnd ? choice(json['object']) : json['subject'][0];
            let attribute = rnd ? choice(json['attribute']) : json['subject'][0];
            let adverbial_1 = rnd ? choice(json['adverbial-1']) : json['subject'][0];
            let adverbial_2 = rnd ? choice(json['adverbial-2']) : json['subject'][0];
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