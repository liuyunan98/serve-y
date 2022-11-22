var serve;
serve = {
    呈贡校园网报修: {
        serveLink: "https://u2idi114qf.jiandaoyun.com/f/5f6962cef444cd00065eff3e",
        serveType: "netpro"
    }, 东陆校园网报修: {
        serveLink: "https://u2idi114qf.jiandaoyun.com/f/5f684d75a3a12300065e968b",
        serveType: "netpro"
    }, 电脑息屏后网络掉线怎么办: {
        serveLink: "https://app.yinxiang.com/fx/9bebcc3a-817f-4072-9977-443900500d2e",
        serveType: "netpro"
    }, 校园网反馈: {
        serveLink: "https://u2idi114qf.jiandaoyun.com/f/5f685559fd7e890006b26bb2",
        serveType: "service"
    }, 校园网投诉: {
        serveLink: "https://u2idi114qf.jiandaoyun.com/f/5f6852a62815b50006e32c4c",
        serveType: "service"
    }, 苹果设备进不去认证页: {
        serveLink: "https://app.yinxiang.com/fx/b5503fe2-b2b6-4b67-ba60-83c5fa89887f",
        serveType: "netpro"
    }, 网络频繁掉线: {
        serveLink: "https://app.yinxiang.com/fx/fe627115-2816-4c38-8400-fe260751d259",
        serveType: "netpro"
    }, 认证后无法上网: {
        serveLink: "https://app.yinxiang.com/fx/8844dc90-d164-4264-9364-aac14bab3358",
        serveType: "netpro"
    }, 认证页进不去: {
        serveLink: "https://app.yinxiang.com/fx/9e494d5f-db6c-4bc4-84ad-7e65d5bae79d",
        serveType: "netpro"
    }, 上网账号开通: {
        serveLink: "http://www.itc.ynu.edu.cn/info/1004/1211.htm",
        serveType: "jiaocheng"
    }, 上网账号绑手机: {
        serveLink: "https://jiandaoyun.com/f/5b0cbe28e7d0143a005810a4",
        serveType: "service"
    }, 上网账号找回密码: {
        serveLink: "http://itc.ynu.edu.cn/info/1013/1178.htm",
        serveType: "jiaocheng"
    }, 网口维修: {
        serveLink: "https://u2idi114qf.jiandaoyun.com/f/60d1fe40bb599a0009c4a375",
        serveType: "waiqin"
    }, 套餐更改: {
        serveLink: "https://u2idi114qf.jiandaoyun.com/f/60d1fe921216b70008e05e07",
        serveType: "service"
    }, 短信找回上网密码: {
        serveLink: "http://itc.ynu.edu.cn/info/1013/1178.htm",
        serveType: "jiaocheng"
    }, 上网强密码说明: {
        serveLink: "http://itc.ynu.edu.cn/info/1008/1242.htm",
        serveType: "jiaocheng"
    }, 自服务修改密码说明: {
        serveLink: "https://app.yinxiang.com/fx/cc1bcf0f-80ed-4f01-9c2b-6656ccfe6d2e",
        serveType: "jiaocheng"
    }, 自服务修改密码入口: {
        serveLink: "https://113.44.14.8",
        serveType: "service"
    }, 选套餐流程: {
        serveLink: "https://app.yinxiang.com/fx/a84d911f-faba-424f-bcf9-63b1cfb23cf8",
        serveType: "jiaocheng"
    }, 网络故障提交: {
        serveLink: "https://jiandaoyun.com/f/5b0e4b40ebd6f565fe338b7e",
        serveType: "service"
    }, 网络代理使用教程: {
        serveLink: "http://itc.ynu.edu.cn/info/1013/1179.htm",
        serveType: "jiaocheng"
    }, 无感知服务怎么使用: {
        serveLink: "https://app.yinxiang.com/fx/30a0e0c6-33ae-45cc-b55b-e7c38e0065b8",
        serveType: "jiaocheng"
    }, 校园网怎么使用: {
        serveLink: "https://app.yinxiang.com/fx/63538ac5-a479-4908-8c61-95d08b8e922d",
        serveType: "jiaocheng"
    }, 移动校园网客服分机1: {
        serveLink: "15798851915",
        serveType: "tel"
    }, 移动校园网客服分机2: {
        serveLink: "15798853308",
        serveType: "tel"
    }, 移动校园网客服分机3: {
        serveLink: "18468009562",
        serveType: "tel"
    }, 动力中心: {
        serveLink: "0871-65931713",
        serveType: "tel"
    }, 通讯中心: {
        serveLink: "0871-65033108",
        serveType: "tel"
    }
};
let serviceDiv = document.getElementById("service");
let waiqinDiv = document.getElementById("waiqin");
let jiaochengDiv = document.getElementById("jiaocheng");
let netproDiv = document.getElementById("netpro");
let filesDiv = document.getElementById("files");
let telDiv = document.getElementById("tel");
let noResultDiv = document.getElementById("noResult");

function autoClearResultDiv() {
    serviceDiv.innerHTML = "";
    waiqinDiv.innerHTML = "";
    jiaochengDiv.innerHTML = "";
    netproDiv.innerHTML = "";
    filesDiv.innerHTML = "";
    telDiv.innerHTML = "";
    noResultDiv.innerHTML = "";
    document.getElementById('serviceNum').innerHTML = "";
    document.getElementById('waiqinNum').innerHTML = "";
    document.getElementById('jiaochengNum').innerHTML = "";
    document.getElementById('netproNum').innerHTML = "";
    document.getElementById('filesNum').innerHTML = "";
    document.getElementById('telNum').innerHTML = "";
    document.getElementById('serviceNum').innerHTML = "";
}

function killServeDoor() {
    document.getElementById("swiper").style.opacity = "0";
    document.getElementById("swiper").style.height = "0";
    document.getElementById("doorAndTollAndOther").style.display = "none";
}

function displayServeDoor() {
    document.getElementById("swiper").style.height = "120px";
    document.getElementById("swiper").style.opacity = "1.0";
    document.getElementById("doorAndTollAndOther").style.display = "block";
    document.getElementById("doorAndTollAndOther").style.height = "auto";
    document.getElementById("doorAndTollAndOther").style.opacity = "1.0";
}

function autoClear(inputContent) {
    if (inputContent === "") {
        autoClearResultDiv();
        displayServeDoor();
    }
}

function clearInput() {
    autoClearResultDiv();
    document.getElementById('myInput').value = "";
    displayServeDoor();
    moveBackItemDiv(1)
}

let serviceNum, waiqinNum, jiaochengNum, netProNum, filesNum, telNum;

function writeResult(serveType, resultText) {
    if (serveType == "service") {
        serviceDiv.innerHTML += resultText;
        serviceNum += 1;
        document.getElementById('serviceNum').innerHTML = "共 " + serviceNum + " 条相关服务";
    } else if (serveType == "waiqin") {
        waiqinDiv.innerHTML += resultText;
        waiqinNum++;
        document.getElementById('waiqinNum').innerHTML = "共 " + waiqinNum + " 条线下服务";
    } else if (serveType == "jiaocheng") {
        jiaochengDiv.innerHTML += resultText;
        jiaochengNum++;
        document.getElementById('jiaochengNum').innerHTML = "共 " + jiaochengNum + " 条相关教程";
    } else if (serveType == "netpro") {
        netproDiv.innerHTML += resultText;
        netProNum++;
        document.getElementById('netproNum').innerHTML = "共 " + netProNum + " 条相关结果";
    } else if (serveType == "files") {
        filesDiv.innerHTML += resultText;
        filesNum++;
        document.getElementById('filesNum').innerHTML = "共 " + filesNum + " 条相关结果";
    } else if (serveType == "tel") {
        telDiv.innerHTML += resultText;
        telNum++;
        document.getElementById('telNum').innerHTML = "查到 " + telNum + " 条电话号码";
    }
}

function search() {
    serviceNum = 0, waiqinNum = 0, jiaochengNum = 0, netProNum = 0, filesNum = 0, telNum = 0;
    killServeDoor();
    autoClearResultDiv();
    let haveResult = false, inputFilter, title;
    inputFilter = document.getElementById('myInput').value.toUpperCase();

    function fixResult() {
        for (title in serve) {
            let resultText = "";
            if (inputFilter !== "") {
                if (title.toUpperCase().indexOf(inputFilter) > -1) {
                    haveResult = true;
                    if (serve[title].serveType == "tel") {
                        resultText += "<li class='" + serve[title].serveType + "'><a href=tel:" + serve[title].serveLink + " class='result'>" + title + "</a><br><span class='telNum'>" + serve[title].serveLink + "</span><a href=tel:" + serve[title].serveLink + " class='result'><button class='callButton'>呼 叫</button></a></li>";
                        console.log(resultText)
                    } else {
                        resultText += "<li class='" + serve[title].serveType + "'><a href=" + serve[title].serveLink + " class='result'>" + title + "</a></li>";
                    }
                    writeResult(serve[title].serveType, resultText);
                } else {
                }
            } else if (inputFilter === "") {
                autoClear(inputFilter)
            }
        }
        return haveResult;
    }

    switch (true) {
        case inputFilter.toUpperCase().indexOf("宿舍") > -1:
            inputFilter = '公寓';
            break;
        case inputFilter.toUpperCase().indexOf("宿") > -1:
            inputFilter = '公寓';
            break;
        default:
    }

    if (fixResult() === false) {
        if (inputFilter !== "") {
            noResultDiv.innerHTML = "<img src='img/noResult.png' class='noResultImg'> <br>没有找到哎~ 换个词儿试试吧";
        }
    }
}
