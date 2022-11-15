// 轮播图json数据长度
let swiperJsonLength = 0, slideStep = 2, slideTime, swiper_flag = true;
// 一級提取
function loopSearchAndWrite(json) {
    // 进入question_usual提取, 索引为问题序号
    questionDiv.innerHTML = '<ul style="background: unset;height: auto">';
    let index = 0;
    for (let q in json) {
        // arr[q]即为question，kind，answer组成的json对象
        // console.log('q:', q)
        switch (json[q].kind) {
            case "url":
                if (json[q].title) {
                    swiperJsonLength++;
                    // 存在标题，为轮播图类型的回传数据
                    document.getElementById("swiperUlContent").innerHTML += '<li class="swiper_li">\n' +
                        '            <div class="swiperImgDiv">\n' +
                        '                <a href="' + json[q].link + '"><img src="' + json[q].imgUrl + '" class="swiperImg"></a></div>\n' +
                        '            <div class="swiperImgInfo">' + json[q].title + '</div></li>\n'
                } else {
                    swiper_flag = false;
                    index++;
                    questionDiv.innerHTML += '<li class="li_question"><a href="' + json[q].answer + '">' + index + '.' + json[q].question + '</a></li>';
                }
                break;
            case "tip":
                swiper_flag = false;
                index++
                questionDiv.innerHTML += '<li class="li_question" onclick="alert(\'' + json[q].answer + '\')">' + index + '.' + json[q].question + '</li>';
                break;
            case "secondLevel":
                swiper_flag = false;
                questionDiv.innerHTML += '<li class="type_question" onclick="showSecondQuestion(\'' + q + '\')">' + json[q].question + '</li>';
                break;
            case "article":
                swiper_flag = false;
                index++
                questionDiv.innerHTML += '<li class="aritcle_question"><a href="' + json[q].answer + '">' + index + '.' + json[q].question + '</a></li>';
                break;
            default:
                swiper_flag = false;
        }
    }
    questionDiv.innerHTML += '</ul>';

    // 避免点按问题帮助模块时重置轮播动画
    if (swiper_flag) {
        slideTime = slideStep * swiperJsonLength
        document.getElementById("swiperUlContent").style.animation = 'swiper_' + swiperJsonLength + 'pic ' + slideTime + 's ease-out infinite'
    }
}

var commonJsonFile = {};

function getQuestionAndAnswer(buttonType, questionLevel) {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log('successfully!')
            const jsonFile = JSON.parse(this.responseText);
            if (questionLevel === 'First') {
                loopSearchAndWrite(jsonFile);
            } else if (questionLevel === 'Second') {
                // 二级问题暂不处理
            }
            commonJsonFile = jsonFile
        } else if (status == 404) {
            // console.log('error！no such file!')
            window.alert("服务器连接拥堵，请稍后~")
        } else {

        }
    };
    switch (buttonType) {
        case "usual":
            xmlhttp.open("GET", "./data/question_usual.json", true);
            break;
        case "type":
            xmlhttp.open("GET", "./data/question_type.json", true);
            break;
        case "article":
            xmlhttp.open("GET", "./data/question_article.json", true);
            break;
        case "slide":
            xmlhttp.open("GET", "./data/slide.json", true);
            break;
        default:
    }
    xmlhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xmlhttp.send();
    return commonJsonFile
}
