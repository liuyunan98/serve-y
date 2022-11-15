let statu = false, statuForUl = statu,
    tip_netcount = "学号(录取通知书、饭卡上面的学号,开学时已统一注册开通)",
    tip_chushimima = "身份证号或护照号后6位（字母和符号均为半角小写）",
    tip_startjifei = "当前套餐生效+上网余额足够+套餐本周期内首次成功登录账号并上网",
    tip_changecelue = "套餐生效期间不得随意修改，即便修改也需下个周期才能生效，请谨慎操作。如遇特殊情况需立即生效，请关注“云大移动校园网”公众号聊天打字咨询，或点击下方入口进行预约变更",
    tip_tuifei = "移动校园网宽带账号充值成功后余额不可清退，请在交费过程中注意确认交费套餐及金额，另外缴费可能存在延迟，请尽量避免多次缴费",
    tip_mianfei = "欠费或者未订购任何收费套餐，认证成功后可访问校内资源和图书馆免费资源，详情可在图书馆官网查看",
    tip_onecardrecharge = "当一卡通余额不足时需先给一卡通账户充值，可到校园内一卡通充值点进行现金充值，或在微信中搜索'云大一卡通'小程序充值"

window.alert = alert;

function alert(data) {
    var alert_bg = document.createElement('div');
    alert_box = document.createElement('div'),
        alert_text = document.createElement('div'),
        alert_btn = document.createElement('div'),
        textNode = document.createTextNode(data ? data : ''),
        btnText = document.createTextNode('知道啦~');

    // 控制样式
    css(alert_bg, {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'background-color': 'rgba(0, 0, 0, 0.1)',
        'z-index': '999999999'
    });

    css(alert_box, {
        'width': '96%',
        'max-width': '96%',
        'font-size': 'medium',
        'line-height': '24px',
        'text-align': 'left',
        'background-color': '#fff',
        'border-radius': '15px',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
    });

    css(alert_text, {
        'padding': '30px 16px',
        'border-bottom': '1px solid #ddd',
        'color': '#0a3a0a'
    });

    css(alert_btn, {
        'padding': '8px 0',
        'text-align': 'center',
        'color': 'green',
        'cursor': 'pointer'
    });

    alert_text.appendChild(textNode);
    alert_btn.appendChild(btnText);
    alert_box.appendChild(alert_text);
    alert_box.appendChild(alert_btn);
    alert_bg.appendChild(alert_box);

    document.getElementsByTagName('body')[0].appendChild(alert_bg);

    alert_btn.onclick = function () {
        alert_bg.parentNode.removeChild(alert_bg);
    }
}

function css(targetObj, cssObj) {
    var str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
    for (var i in cssObj) {
        str += i + ':' + cssObj[i] + ';';
    }
    targetObj.style.cssText = str;
}


function judgeDisplay(item) {
    let item_words = item + '_display',
        item_words_document = document.getElementById('serve_display');
    switch (item_words) {
        case 'zifei_display':
            item_words_document.innerHTML = '<div id="zifei_display"><div class="ulForItemShow">\n' +
                '                <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'zifei_display\')">资费介绍</span></div>\n' +
                '                <div class="Div_liForItemShow"><li class="liForItemShow" onclick="alert(tip_startjifei)">开始计费条件</li>\n' +
                '                <div class="liForItemShow" onclick="alert(tip_mianfei)">校内免费资源</div></div>\n' +
                '                <img src="img/pic.svg" referrerpolicy="no-referrer" class="imgForShouce">' +
                '                <p class="ulForItemShow_info">\n' +
                '                    所有在职教师、在读同学的上网账号已在报道时开通，无需另行申请；其他人员需符合要求后提交开通申请。<br>\n' +
                '                </p>\n' +
                '            </div></div>';
            break;

        case 'internet_display':
            item_words_document.innerHTML = '<div id="internet_display"><div class="ulForItemShow">\n' +
                '                <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'internet_display\')">认证上网</span></div>\n' +
                '                <div class="Div_liForItemShow"><li class="liForItemShow"><a href="https://app.yinxiang.com/fx/63538ac5-a479-4908-8c61-95d08b8e922d">上网方式介绍</a></li>\n' +
                '                <div class="liForItemShow" onclick="alert(tip_netcount)">校园网账号</div>\n' +
                '                <div class="liForItemShow" onclick="alert(tip_chushimima)">初始密码</div>\n' +
                '                <div class="liForItemShow"><a href="http://itc.ynu.edu.cn/info/1013/1178.htm">短信找回密码</a></div>\n' +
                '                <div class="liForItemShow"><a href="http://itc.ynu.edu.cn/info/1008/1242.htm">强密码规则</a></div>\n' +
                '                <div class="liForItemShow"><a href="https://app.yinxiang.com/fx/cc1bcf0f-80ed-4f01-9c2b-6656ccfe6d2e">自服务修改密码</a></div>\n' +
                '                <div class="liForItemShow"><a href="http://113.55.14.8">自服务改密入口</a></div></div>\n' +
                '                <p class="ulForItemShow_info">\n' +
                '                    1.自服务修改密码需要在校园网范围内，连接校园网才可修改<br>\n' +
                '                    2.所有在读同学的账号均在入学前开通，如遇到休学、入伍或其他原因导致的账号过期情况，请提供学籍证明并联系信息技术中心处理，电话:65031141<br>\n' +
                '                </p>\n' +
                '            </div></div>';
            break;

        case 'recharge_display':
            item_words_document.innerHTML = '<div id="recharge_display"><div class="ulForItemShow">\n' +
                '                <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'recharge_display\')">网费充值</span></div>\n' +
                '                <div class="Div_liForItemShow"><li class="liForItemShow"><a href="https://app.yinxiang.com/fx/a84d911f-faba-424f-bcf9-63b1cfb23cf8">选套餐说明</a></li>\n' +
                '                <div class="liForItemShow"><a href="https://app.yinxiang.com/fx/82be2f8a-2aaf-4d71-97e4-089c3ee5e69b">一卡通缴网费流程</a></div>\n' +
                '                <div class="liForItemShow"><a href="https://app.yinxiang.com/fx/9c8e906e-a048-444f-bc5c-0e4c743fbb3a">自服务缴网费流程</a></div>\n' +
                '                <div class="liForItemShow" onclick="alert(tip_onecardrecharge)">一卡通余额充值流程</div>\n' +
                '                <div class="liForItemShow"><a href="https:selfsrv.ynu.edu.cn">自服务缴费入口</a></div></div>\n' +
                '                <div class="liForItemShowImgDiv"><img src="../img/onecrad_miniPro.png" alt="" class="liForItemShow_img">\n' +
                '                <div class="li_info">长按图片识别小程序码</div></div>\n' +
                '                <p class="ulForItemShow_info">\n' +
                '                    1. 校园网账号默认只有校内网络访问权限，无法访问外网，所以需要选择校园网套餐并缴纳网费<br>\n' +
                '                    2. 网费充值需通过一卡通系统，且只能为自己缴费<br>' +
                '                    3. 使用自服务缴费时也需要一卡通余额足够才可充值成功！连接校园网后才可进入，流量无法访问！<br>' +
                '                    4. 小程序使用问题请联系信息中心一卡通服务部：65033382 ' +
                '                </p>\n' +
                '            </div></div>';
            break;
        case 'refund_display':
            item_words_document.innerHTML = '<div id="refund_display"><div class="ulForItemShow">\n' +
                '                <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'refund_display\')">改套退费</span></div>\n' +
                '                <div class="Div_liForItemShow"><li class="liForItemShow" onclick="alert(tip_tuifei)">退费规则</li>' +
                '                <div class="liForItemShow" onclick="alert(tip_changecelue)">改套规则</div>\n' +
                '                <div class="liForItemShow"><a href="https://u2idi114qf.jiandaoyun.com/f/60d1fe921216b70008e05e07">修改套餐入口</a></div></div>\n' +
                '                <p class="ulForItemShow_info">\n' +
                '                    1.修改套餐有3种方式：打电话、公众号留言、点击"修改套餐入口"填写提交等。<br>\n' +
                '                    2.如遇到放假前转套餐高峰期或客服不在线等情况，电话可能会占线无法接通，此时推荐从"修改套餐入口"提交，我们收到后会及时处理！<br>\n' +
                '                </p>\n' +
                '            </div></div>';
            break;
        case 'problem_display':
            item_words_document.innerHTML = '<div id="problem_display"><div class="ulForItemShow">\n' +
                '                <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'problem_display\')">故障报修</span></div>\n' +
                '                <div class="Div_liForItemShow"><li class="liForItemShow"><a href="https://u2idi114qf.jiandaoyun.com/f/5f6962cef444cd00065eff3e">呈贡网络报修</a></li>\n' +
                '                <div class="liForItemShow"><a href="https://u2idi114qf.jiandaoyun.com/f/5f684d75a3a12300065e968b">东陆网络报修</a></div></div>\n' +
                '                <p class="ulForItemShow_info">\n' +
                '                    1.如无法上网、能搜到YNU信号但是连不上、网速慢、网络质量差、某一个网站上不去等...<br>\n' +
                '                    2.提交之后，请注意接收我们的来电或短信，我们会在工作时间为您处理并和您联系\n' +
                '                </p>\n' +
                '            </div></div>';
            break;
        case 'fankui_display':
            item_words_document.innerHTML = '<div id="fankui_display"><div class="ulForItemShow">\n' +
                '                <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'fankui_display\')">建议反馈</span></div>\n' +
                '                <div class="Div_liForItemShow"><div class="liForItemShow"><a href="https://u2idi114qf.jiandaoyun.com/f/5f6852a62815b50006e32c4c">我要投诉</a></div>\n' +
                '                <div class="liForItemShow"><a href="https://u2idi114qf.jiandaoyun.com/f/5f685559fd7e890006b26bb2">我想建议</a></div></div>\n' +
                '                <p class="ulForItemShow_info">\n' +
                '                    感谢您的支持！我们一直在不定期地升级校园网硬件设施，提升校园网使用体验，当您遇到故障或者需要投诉时，您可以先联系我们的客服及技术人员帮助您，以排除因您操作不当或设置问题带来的不佳体验。投诉、建议等入口您可以在本页的反馈服务中找到，感谢您一直以来的支持和理解，我们将仔细阅读您的投诉和建议，积极改进！' +
                '                </p>\n' +
                '            </div></div>';
            break;
        case 'wechat_display':
            item_words_document.innerHTML = '<div id="fankui_display"><div class="ulForItemShow">\n' +
                '                <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'fankui_display\')">校园网公众号</span></div>\n' +
                '                <p class="ulForItemShow_info">\n' +
                '                    微信公众号“云大移动校园网”，是中国移动面向我校收费版校园网的学生用户群体的订阅号。运营维护收费版校园网络，负责校园网套餐及资费解释、校园网相关活动解释、校园网络费用收取、宿舍区校园网络故障维护、宿舍网络备件损坏维护等相关事宜。\n' +
                '                </p>\n' +
                '                <div class="liForItemShowImgDiv"><img src="img/mobile.jpg" alt="" class="liForItemShow_img">\n' +
                '                <div class="li_info">长按图片识别二维码</div></div>\n' +

                '                <p class="ulForItemShow_info">\n' +
                '                    微信公众号“云大信息化”，是云南大学信息技术中心面向我校全体师生的微信订阅号，是信息化服务的移动端快捷入口<br>\n' +
                '                </p>\n' +
                '                <div class="liForItemShowImgDiv"><img src="img/itc.jpg" alt="" class="liForItemShow_img">\n' +
                '                <div class="li_info">长按图片识别二维码</div></div>\n' +
                '                <p class="ulForItemShow_info tip">\n' +
                '                   与校园网套餐资费相关的所有业务均由‘移动校园网’负责！信息技术中心主要负责上网账号本身的问题，如账号开通、账号绑定手机、账号过期解锁(休学、退伍等导致过期)等事项！请同学们分清单位业务归属，否则自己的网络问题可能无法及时解决！' +
                '                </p>\n' +
                '            </div></div>';
            break;
        default:
            alert('请点击服务')
    }

    if (statu === false) {
        item_words_document.style.display = 'none';
    } else if (statu === true) {
        moveItemDiv()
        item_words_document.style.width = '85%';
        item_words_document.style.height = 'auto';
        item_words_document.style.display = 'block';
    }
}

//此处的参数item指的是服务图标的id,也就是服务名的id，其id后不带”_show“
function displayItem(item) {
    if (statuForUl === true) {
        //借助disOrNotDis()方法，来判断当前点击元素的下级名为 "当前元素名_show" 的元素的显示状态
        judgeDisplay(item);
        statu = statuForUl = false;
    } else if (statuForUl === false) {
        statu = statuForUl = true;
        judgeDisplay(item);
    }
}

// 关闭侧边弹窗
function closeItem(item) {
    item = document.getElementById(item);
    item.style.display = 'none';
    moveBackItemDiv(0);
}

// function inf() {
//     window.alert("老师们、同学们，暑假期间我们只在正常工作日时段处理线上工单！给您带来不便敬请谅解！")
// }

let itemDiv = ['searchBar', 'swiper', 'zifei', 'question', 'tool', 'itc', 'footer'], itemLength = itemDiv.length, i;

function moveItemDiv() {
    if (window.screen.width < 476) {
        for (i = 0; i < itemLength; i++) {
            document.getElementById(itemDiv[i]).style.animation = " itemDivMove 300ms ease-in";
            document.getElementById(itemDiv[i]).style.opacity = "0.5";
            document.getElementById(itemDiv[i]).style.transform = "translateX(90%)";
            console.log("当前样式：itemDivMove");
        }
    } else {
        for (i = 0; i < itemLength; i++) {
            document.getElementById(itemDiv[i]).style.animation = " itemDivMoveLargeScreen 300ms ease-in";
            document.getElementById(itemDiv[i]).style.opacity = "0.5";
            document.getElementById(itemDiv[i]).style.transform = "translateX(100%)";
            console.log("当前样式：itemDivMoveLargeScreen");
        }
    }
}

// 对于点击服务按钮或清空按钮通用，分为是否为顶部topSearchBar附加itemDivMoveBack属性
function moveBackItemDiv(itemIndex) {
    for (i = itemIndex; i < itemLength; i++) {
        document.getElementById(itemDiv[i]).style.animation = " itemDivMoveBack 300ms ease-in";
        document.getElementById(itemDiv[i]).style.opacity = "1.0";
        document.getElementById(itemDiv[i]).style.transform = "translateX(0)";
        console.log("当前样式：itemDivMoveBack");
    }
}

let questionDiv = document.getElementById("display_question");
let answerDiv = document.getElementById("display_answer");
let closeDiv = document.getElementById("question_close");

// 点按图标后效果
function showBorder(word) {
    let li = ['usual', 'type', 'article'];
    for (let index in li) {
        let arr = li[index];
        if (word === arr) {
            document.getElementById(li[index]).style.animation = "upAndDown 300ms ease-out"
            document.getElementById(li[index]).style.borderBottom = "1px solid orange"
            document.getElementById(li[index]).style.boxShadow = "1px 1px 6px orange"
        } else if (word != arr) {
            document.getElementById(li[index]).style.animation = ""
            document.getElementById(li[index]).style.borderBottom = "none"
            document.getElementById(li[index]).style.boxShadow = "none"
        }
    }
}

// 一级问题：拼凑内容
function makeContent(key) {
    showBorder(key);
    // 数据获取到前先显示加载动画
    questionDiv.innerHTML = '<div class="loadingAnimation"><i class="fa fa-spinner fa-spin fa-2x fa-fw"></i><span class="sr-only">Loading...</span></div>'
    getQuestionAndAnswer(key, 'First');
}

// 一级问题：响应点击操作
function show(helpType) {
    answerDiv.innerHTML = '';
    questionDiv.innerHTML = '';
    switch (helpType) {
        case 'usual':
            makeContent("usual")
            break;
        case 'type':
            makeContent("type")
            break;
        case 'article':
            makeContent("article")
            break;
        default:
    }
    closeDiv.innerHTML = '<li class="li_close" onclick="questionDiv_close()"><i class="fa fa-angle-double-up fa-lg" aria-hidden="true"></i></li>'
}

// 收起：收起所有问题及答案盒子
function questionDiv_close() {
    showBorder()
    questionDiv.innerHTML = ""
    answerDiv.innerHTML = ''
    closeDiv.innerHTML = ''
}

// 二级问题：填充二级盒子
function showSecondQuestion(type) {
    switch (type) {
        case "postage":
            array = getQuestionAndAnswer('type', 'Second').postage.answer
            handleSecAnswer()
            break;
        case "pro":
            array = getQuestionAndAnswer('type', 'Second').pro.answer
            handleSecAnswer()
            break;
        case "net":
            array = getQuestionAndAnswer('type', 'Second').net.answer
            handleSecAnswer()
            break;
        case "complaint":
            array = getQuestionAndAnswer('type', 'Second').complaint.answer
            handleSecAnswer()
            break;
        case "skill":
            array = getQuestionAndAnswer('type', 'Second').skill.answer
            handleSecAnswer()
            break;
        case "other":
            array = getQuestionAndAnswer('type', 'Second').other.answer
            handleSecAnswer()
            break;
        default:
    }
}

// 处理二级问题内容
function handleSecAnswer() {
    //clear the secQuestion' box
    questionDiv.innerHTML = "";
    let index_sec = 0;
    answerDiv.innerHTML = '<ul style="background: unset;height: auto">';
    for (let j in array) {
        // console.log('answer:', array[j])
        // console.log('sec question：',array[j].secQuestion)
        // console.log('sec kind：',array[j].secKind)
        // console.log('sec answer：',array[j].secAnswer)
        if (array[j].secKind === 'url') {
            index_sec++;
            document.getElementById("display_answer").innerHTML += '<li class="li_question"><a href="' + array[j].secAnswer + '">' + index_sec + '.' + array[j].secQuestion + '</a></li>';
        } else if (array[j].secKind === 'tip') {
            index_sec++;
            document.getElementById("display_answer").innerHTML += '<li class="li_question" onclick="alert(\'' + array[j].secAnswer + '\')">' + index_sec + '.' + array[j].secQuestion + '</li>';
        } else {
        }
    }
    answerDiv.innerHTML += '</ul>';
}
