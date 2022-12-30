function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function copy() {
    document.getElementById("copy").select();
    document.execCommand("Copy");
    alert("复制成功！");
}
let history = '';
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
            let predicate = rnd ? choice(json['predicate']) : json['predicate'][0];
            let object = rnd ? choice(json['object']) : json['object'][0];
            let attribute = rnd ? choice(json['attribute']) : json['attribute'][0];
            let adverbial_1 = rnd ? choice(json['adverbial-1']) : json['adverbial-1'][0];
            let adverbial_2 = rnd ? choice(json['adverbial-2']) : json['adverbial-2'][0];
            let html = '';
            html += `<div class='sentence'>`;
            html += `<div class='adverbial'>${adverbial_1}</div>`;
            html += `，`;
            html += `<div class='subject'>${subject}</div>`;
            html += `<div class='adverbial'>${adverbial_2}</div>`;
            html += `<div class='predicate'>${predicate}</div>`;
            html += `<div class='attribute'>${attribute}</div>`;
            html += `<div class='object'>${object}</div>`;
            html += `。`;
            html += `</div>`;
            if(rnd) {
                setStyle('regenerate', 'disabled', '');
                let adv1 = 1, sub = 1, adv2 = 1, pre = 1, att = 1, obj = 1;
                setTimeout(function () { adv1 = 0; }, 2000);
                setTimeout(function () { sub = 0; }, 4000);
                setTimeout(function () { adv2 = 0; }, 6000);
                setTimeout(function () { pre = 0; }, 8000);
                setTimeout(function () { att = 0; }, 10000);
                setTimeout(function () { obj = 0; }, 12000);
                let intv = setInterval(function() {
                    let subject_t = sub ? choice(json['subject']) : subject;
                    let predicate_t = pre ? choice(json['predicate']) : predicate;
                    let object_t = obj ? choice(json['object']) : object;
                    let attribute_t = att ? choice(json['attribute']) : attribute;
                    let adverbial_1_t = adv1 ? choice(json['adverbial-1']) : adverbial_1;
                    let adverbial_2_t = adv2 ? choice(json['adverbial-2']) : adverbial_2;
                    let html_t = '';
                    html_t += `<div class='sentence'>`;
                    html_t += `<div class='adverbial'>${adverbial_1_t}</div>`;
                    html_t += `，`;
                    html_t += `<div class='subject'>${subject_t}</div>`;
                    html_t += `<div class='adverbial'>${adverbial_2_t}</div>`;
                    html_t += `<div class='predicate'>${predicate_t}</div>`;
                    html_t += `<div class='attribute'>${attribute_t}</div>`;
                    html_t += `<div class='object'>${object_t}</div>`;
                    html_t += `。`;
                    html_t += `</div>`;
                    document.getElementById("display-area").innerHTML = html_t;
                }, 100);
                setTimeout(function () {
                    clearInterval(intv);
                    document.getElementById("display-area").innerHTML = html;
                    history += `<li class='list'>`;
                    history += html;
                    history += `</li>`;
                    let historyHtml = '';
                    historyHtml += `历史记录：`;
                    historyHtml += `<ol>`;
                    historyHtml += history;
                    historyHtml += `</ol>`;
                    document.getElementById("history").innerHTML = historyHtml;
                    document.getElementById("copy").innerText = document.getElementById("history").innerText;
                    unsetStyle('regenerate', 'disabled');
                }, 12000);
            }
            else {
                setStyle('regenerate', 'disabled', '');
                document.getElementById("display-area").innerHTML = html;
                history += `<li class='list'>`;
                history += html;
                history += `</li>`;
                let historyHtml = '';
                historyHtml += `历史记录：`;
                historyHtml += `<ol>`;
                historyHtml += history;
                historyHtml += `</ol>`;
                document.getElementById("history").innerHTML = historyHtml;
                document.getElementById("copy").innerText = document.getElementById("history").innerText;
                unsetStyle('regenerate', 'disabled');
            }
        }
    }
}