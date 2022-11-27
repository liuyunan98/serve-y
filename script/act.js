function act() {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const jsonFile = JSON.parse(this.responseText);
            displayAct(jsonFile);
        } else if (status == 404) {
            window.alert("服务器连接拥堵，请稍后~")
        } else {
        }
    };

    xmlhttp.open("GET", "../data/act.json", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xmlhttp.send();
}

function displayAct(obj) {
    let index = 0;
    for (let o in obj) {
        index++;
        document.getElementById('act').innerHTML +=
            '<div id="department_more" class="commonDiv commonBack backPosition-55">\n' +
            '    <div class="title">活动</div>\n' +
            '    <div class="department_title">' + obj[o].title + '</div>\n' +
            '    <div class="actInfoDiv">\n' +
            '        <div class="departmentIconDiv">\n' +
            '            <a href="' + obj[o].link + '"><img src="' + obj[o].imgUrl + '" alt="" class="act_img"></a>\n' +
            '        </div>\n' +
            '        <div class="actInfo">\n' +
            '            <div class="actInfoTitle">上线时间 ' + obj[o].time + '</div>\n' +
            '            <div class="actLink"><a href="' + obj[o].link + '">去看看</a></div>\n' +
            '        </div>\n' +
            '    </div>'
    }
}
