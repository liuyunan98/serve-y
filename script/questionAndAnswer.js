let statu = false, statuForUl = statu,
    tip_netcount = "上网账号在字面上等于学号，即录取通知书、饭卡上面的学号，新生在报到入学时上网账号已经过后台系统自动批量注册开通。如因休学、延毕、退伍等情况导致账号过期被禁用，请联系信息技术中心延期，工作时间：早8:30-11:30，晚14:00-17:00，电话：0871-65031141。",
    tip_chushimima = "上网账号初始密码为身份证号或护照号后6位（字母和符号均为半角小写），此密码是系统自动生成的。若在上网认证时提示密码错误，如果上网账号已经绑定了手机号，点击'忘记密码'进入后可通过短信重设密码。如果暂未绑定手机，请在微信公众号'云大信息化'菜单'师生服务'中提交'上网账号绑定手机号'的申请，需要经人工绑定后你才可通过短信改密码。",
    tip_startjifei = "开始计费的条件为：1.当前套餐已经生效。2.上网余额足够(大于等于你选择的套餐资费标准)。3.套餐本周期内首次成功登录账号并上网。三个条件同时满足才开始计费，扣费采取的是周期内不扣费，周期最后一天统一扣费原则，期间必须保证余额足够。",
    tip_changecelue = "上网套餐有效期内不得随意自行修改，即便自行修改了，也会下个周期才能生效，请谨慎操作。如遇特殊情况需立即生效，需要联系客服后台操作。可关注“云大移动校园网”公众号聊天打字咨询客服，也可拨打电话咨询客服，或点击此页面的'修改套餐入口'提交变更。三种方式任选，效果无差异。",
    tip_tuifei = "上网账号充值成功后余额不可清退，请在交费过程中注意确认所选套餐及缴费金额。另外缴费可能存在延迟，偶尔会因网络卡顿导致页面的缴费成功信息未及时提示，请检查是否缴费成功及一卡通账户流水是否正确，尽量避免重复缴费。",
    tip_mianfei = "上网账号默认情况下是未订购任何收费套餐的，即套餐显示'校内资源免费'。套餐正常但余额小于套餐金额标准时，上网账号处于欠费状态。以上两种情况，上网账号登录成功后仅可访问校内资源和图书馆免费资源。免费资源详情信息可在图书馆官网查看。",
    tip_onecardrecharge = "上网账号缴费充值是通过云大一卡通的余额扣费的。所以当一卡通余额不足时需先给一卡通账户充值，可到校园内一卡通充值点进行现金充值，或在微信中搜索'云大一卡通'小程序充值。"
var sw_data = [], sw_status, sw_statusText;
window.alert = alert;

function alert(data) {
    let alert_bg = document.createElement('div'),
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
        'background-color': 'rgba(0, 0, 0, 0.4)',
        'z-index': '999999999'
    });
    css(alert_box, {
        'width': '90%',
        'max-width': '90%',
        'font-size': 'large',
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
        'padding': '30px 30px',
        'border-bottom': '1px solid #1296db',
        'color': '#0a3a0a',
        'line-height': '34px'
    });
    css(alert_btn, {
        'padding': '10px 0',
        'text-align': 'center',
        'font-weight': 'bold',
        'color': '#1296db',
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
            item_words_document.innerHTML =
                '<div id="zifei_display">' +
                '   <div class="ulForItemShow">\n' +
                '       <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'zifei_display\')">资费介绍</span></div>\n' +
                '       <div class="Div_content">' +
                '           <div class="Div_liForItemShow">' +
                '               <div class="liForItemShow liForItemShow_tip" onclick="alert(tip_startjifei)">开始计费条件</div>\n' +
                '               <div class="liForItemShow liForItemShow_tip" onclick="alert(tip_mianfei)">校内免费资源</div>' +
                '           </div>\n' +
                '           <img src="img/pic.svg" referrerpolicy="no-referrer" class="imgForShouce">' +
                '           <p class="ulForItemShow_info">\n' +
                '               所有在职教师、在读同学的上网账号已在报道时开通，无需另行申请；其他人员需符合要求后提交开通申请。<br>\n' +
                '           </p>\n' +
                '       </div>' +
                '   </div>' +
                '</div>';
            break;


        case 'internet_display':
            item_words_document.innerHTML =
                '<div id="internet_display">' +
                '   <div class="ulForItemShow">\n' +
                '       <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'internet_display\')">认证上网</span></div>\n' +
                '       <div class="Div_content">' +
                '           <div class="Div_liForItemShow">' +
                '               <div class="liForItemShow liForItemShow_tip"><a href="https://app.yinxiang.com/fx/63538ac5-a479-4908-8c61-95d08b8e922d">上网方式介绍</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_tip" onclick="alert(tip_netcount)">校园网账号</div>\n' +
                '               <div class="liForItemShow liForItemShow_tip" onclick="alert(tip_chushimima)">初始密码</div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="http://itc.ynu.edu.cn/info/1013/1178.htm">短信找回密码</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="http://itc.ynu.edu.cn/info/1008/1242.htm">强密码规则</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://app.yinxiang.com/fx/cc1bcf0f-80ed-4f01-9c2b-6656ccfe6d2e">自服务修改密码</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="http://113.55.14.8">自服务改密入口</a></div>' +
                '           </div>\n' +
                '           <p class="ulForItemShow_info">\n' +
                '               1.自服务修改密码需要在校园网范围内，连接校园网才可修改<br>\n' +
                '               2.所有在读同学的账号均在入学前开通，如遇到休学、入伍或其他原因导致的账号过期情况，请提供学籍证明并联系信息技术中心处理，电话:65031141<br>\n' +
                '           </p>\n' +
                '       </div>' +
                '   </div>' +
                '</div>';
            break;

        case 'recharge_display':
            item_words_document.innerHTML =
                '<div id="recharge_display">' +
                '   <div class="ulForItemShow">\n' +
                '       <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'recharge_display\')">网费充值</span></div>\n' +
                '       <div class="Div_content">' +
                '           <div class="Div_liForItemShow">' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://app.yinxiang.com/fx/a84d911f-faba-424f-bcf9-63b1cfb23cf8">选套餐说明</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://app.yinxiang.com/fx/82be2f8a-2aaf-4d71-97e4-089c3ee5e69b">一卡通缴网费流程</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://app.yinxiang.com/fx/9c8e906e-a048-444f-bc5c-0e4c743fbb3a">自服务缴网费流程</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_tip" onclick="alert(tip_onecardrecharge)">一卡通余额充值流程</div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https:selfsrv.ynu.edu.cn">自服务缴费入口</a></div>' +
                '           </div>\n' +
                '           <div class="liForItemShowImgDiv"><img src="img/onecrad_miniPro.png" alt="" class="liForItemShow_img">\n' +
                '               <div class="li_info">长按图片识别小程序码</div>' +
                '           </div>\n' +
                '           <p class="ulForItemShow_info">\n' +
                '               1. 校园网账号默认只有校内网络访问权限，无法访问外网，所以需要选择校园网套餐并缴纳网费<br>\n' +
                '               2. 网费充值需通过一卡通系统，且只能为自己缴费<br>' +
                '               3. 使用自服务缴费时也需要一卡通余额足够才可充值成功！连接校园网后才可进入，流量无法访问！<br>' +
                '               4. 小程序使用问题请联系信息中心一卡通服务部：65033382 ' +
                '           </p>\n' +
                '       </div>' +
                '   </div>' +
                '</div>';
            break;


        case 'refund_display':
            item_words_document.innerHTML =
                '<div id="refund_display">' +
                '   <div class="ulForItemShow">\n' +
                '       <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'refund_display\')">改套退费</span></div>\n' +
                '       <div class="Div_content">' +
                '           <div class="Div_liForItemShow">' +
                '               <div class="liForItemShow liForItemShow_tip" onclick="alert(tip_tuifei)">退费规则</div>' +
                '               <div class="liForItemShow liForItemShow_tip" onclick="alert(tip_changecelue)">改套规则</div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://u2idi114qf.jiandaoyun.com/f/60d1fe921216b70008e05e07">修改套餐入口</a></div>' +
                '           </div>\n' +
                '           <p class="ulForItemShow_info">\n' +
                '               1.修改套餐有3种方式：打电话、公众号留言、点击"修改套餐入口"填写提交等。<br>\n' +
                '               2.如遇到放假前转套餐高峰期或客服不在线等情况，电话可能会占线无法接通，此时推荐从"修改套餐入口"提交，我们收到后会及时处理！<br>\n' +
                '           </p>\n' +
                '       </div>' +
                '   </div>' +
                '</div>';
            break;


        case 'problem_display':
            item_words_document.innerHTML =
                '<div id="problem_display">' +
                '   <div class="ulForItemShow">\n' +
                '       <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'problem_display\')">故障报修</span></div>\n' +
                '       <div class="Div_content">' +
                '           <div class="Div_liForItemShow">' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://u2idi114qf.jiandaoyun.com/f/5f6962cef444cd00065eff3e">呈贡网络报修</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://u2idi114qf.jiandaoyun.com/f/5f684d75a3a12300065e968b">东陆网络报修</a></div>' +
                '           </div>\n' +
                '           <p class="ulForItemShow_info">\n' +
                '               1.如无法上网、能搜到YNU信号但是连不上、网速慢、网络质量差、某一个网站上不去等...<br>\n' +
                '               2.提交之后，请注意接收我们的来电或短信，我们会在工作时间为您处理并和您联系\n' +
                '           </p>\n' +
                '       </div>' +
                '   </div>' +
                '</div>';
            break;


        case 'fankui_display':
            item_words_document.innerHTML =
                '<div id="fankui_display">' +
                '   <div class="ulForItemShow">\n' +
                '       <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'fankui_display\')">建议反馈</span></div>\n' +
                '       <div class="Div_content">' +
                '           <div class="Div_liForItemShow liForItemShow_link"><div class="liForItemShow"><a href="https://u2idi114qf.jiandaoyun.com/f/5f6852a62815b50006e32c4c">我要投诉</a></div>\n' +
                '               <div class="liForItemShow liForItemShow_link"><a href="https://u2idi114qf.jiandaoyun.com/f/5f685559fd7e890006b26bb2">我想建议</a></div>' +
                '           </div>\n' +
                '           <p class="ulForItemShow_info">\n' +
                '               感谢您的支持！我们一直在不定期地升级校园网硬件设施，提升校园网使用体验，当您遇到故障或者需要投诉时，您可以先联系我们的客服及技术人员帮助您，以排除因您操作不当或设置问题带来的不佳体验。投诉、建议等入口您可以在本页的反馈服务中找到，感谢您一直以来的支持和理解，我们将仔细阅读您的投诉和建议，积极改进！' +
                '           </p>\n' +
                '       </div>' +
                '   </div>' +
                '</div>';
            break;


        case 'wechat_display':
            item_words_document.innerHTML =
                '<div id="fankui_display">' +
                '   <div class="ulForItemShow">\n' +
                '       <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'fankui_display\')">校园网公众号</span></div>\n' +
                '       <div class="Div_content">' +
                '           <p class="ulForItemShow_info">\n' +
                '               微信公众号“云大移动校园网”，是中国移动面向我校收费版校园网的学生用户群体的订阅号。运营维护收费版校园网络，负责校园网套餐及资费解释、校园网相关活动解释、校园网络费用收取、宿舍区校园网络故障维护、宿舍网络备件损坏维护等相关事宜。\n' +
                '           </p>\n' +
                '           <div class="liForItemShowImgDiv"><img src="img/mobile.jpg" alt="" class="liForItemShow_img">\n' +
                '               <div class="li_info">长按图片识别二维码</div>' +
                '           </div>\n' +
                '           <p class="ulForItemShow_info">\n' +
                '               微信公众号“云大信息化”，是云南大学信息技术中心面向我校全体师生的微信订阅号，是信息化服务的移动端快捷入口<br>\n' +
                '           </p>\n' +
                '           <div class="liForItemShowImgDiv"><img src="img/itc.jpg" alt="" class="liForItemShow_img">\n' +
                '               <div class="li_info">长按图片识别二维码</div>' +
                '           </div>\n' +
                '           <p class="ulForItemShow_info tip">\n' +
                '               与校园网套餐资费相关的所有业务均由‘移动校园网’负责！信息技术中心主要负责上网账号本身的问题，如账号开通、账号绑定手机、账号过期解锁(休学、退伍等导致过期)等事项！请同学们分清单位业务归属，否则自己的网络问题可能无法及时解决！' +
                '           </p>\n' +
                '       </div>' +
                '   </div>' +
                '</div>';
            break;

        case 'sw_display':
            monitor();
            break;

        default:
            alert('请点击服务')
    }

    if (statu) {
        item_words_document.style.width = '100%';
        item_words_document.style.height = '85%';
        item_words_document.style.display = 'block';
        moveItemDiv()
    } else if (!statu) {
        item_words_document.style.display = 'none'
    }
}

//此处的参数item指的是服务图标的id,也就是服务名的id，其id后不带”_show“
function displayItem(item) {
    if (statuForUl) {
        //借助disOrNotDis()方法，来判断当前点击元素的下级名为 "当前元素名_show" 的元素的显示状态
        judgeDisplay(item);
        statu = !statuForUl;
    } else if (!statuForUl) {
        statu = !statuForUl;
        judgeDisplay(item);
    }
}

// 关闭侧边弹窗
function closeItem(item) {
    item = document.getElementById(item);
    item.style.display = 'none';
    moveBackItemDiv(0);
}

function inf() {
    window.alert("老师们、同学们，暑假期间我们只在正常工作日时段处理线上工单！给您带来不便敬请谅解！")
}

let itemDiv = ['searchBar', 'swiper', 'zifei', 'question', 'tool', 'itc', 'footer'],
    itemLength = itemDiv.length,
    i;
let body = document.getElementById("body");

function moveItemDiv() {
    document.getElementById("searchBar").style.display = 'none';
    body.style.height = "100px";
    body.style.animation = "bodyMove 300ms ease-in-out";
    body.style.padding = "80px 30px";
    body.style.boxSizing = "border-box";
    body.style.overflowY = "hidden";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#1296cd";
}

function moveBackItemDiv(itemIndex) {
    document.getElementById("searchBar").style.display = 'block'
    body.style.backgroundImage = "url('img/back_yd.jpg')";
    body.style.backgroundColor = "unset";
    body.style.animation = "bodyBack 300ms ease-in-out";
    body.style.padding = "0";
    body.style.overflowY = "scroll";

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
            // document.getElementById(li[index]).style.boxShadow = "1px 1px 6px orange"
        } else if (word != arr) {
            document.getElementById(li[index]).style.animation = ""
            document.getElementById(li[index]).style.borderBottom = "none"
            // document.getElementById(li[index]).style.boxShadow = "none"
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
    closeDiv.innerHTML = '<li class="li_close" onclick="questionDiv_close()"><i class="fa fa-angle-double-up fa-2x" aria-hidden="true"></i></li>'
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

// failure和complete部分可不写
function monitor() {
    let flag = 'fail';

    $.ajax({
        type: "GET",
        url: "https://studsrv-itc.ynu.edu.cn/api/r",
        dataType: "json",

        success: function (result) {
            // console.log('success:', result)
            flag = 'success'
        },

        fail: function (err) {
            // console.log('err:', err)
        },

        complete: function (data) {
            if (data.status != '200') alert('服务端通信失败，请稍后再试！');

            sw_data = data.responseJSON;
            // console.log('拉取到数据：', data)

            sw_statusText = data.statusText;
            let content = '';
            let serveDiv = document.getElementById('serve_display');

            content =
                '<div id="sw_display">' +
                '   <div class="ulForItemShow">\n' +
                '        <div class="Div_ulForItemShow_title"><span class="ulForItemShow_title" onclick="closeItem(\'sw_display\')">呈贡校区机房情况</span></div>\n';

            if (data.status && data.status == '200') {
                content += '<div class="success_bottom"></div>'
            } else if (data.status != '200') {
                content += '<div class="fail_bottom"></div>'
            }

            content +=
                '        <div class="Div_content">' +
                '           <div class="status">' + '数据获取标识：' + '<div class="' + flag + '">' + flag + '</div>' + ' | 接口状态：' + '<div class="' + sw_statusText + '">' + sw_statusText + '</div></div>' +
                '           <p class="ulForItemShow_info" style="padding: 4px 12px">\n' +
                '               服务端数据定时获取。蓝色代表机房所有交换机组状态正常，楼栋网络正常。红色代表有交换机发生故障，对应楼栋的部分房间网络会中断。\n' +
                '           </p>\n' +
                '           <div class="Div_sw">';

            if (data.status && data.status == '200') {
                for (let index in sw_data) {
                    // console.log('提取数据：', sw_data[index])
                    content +=
                        '           <div class="sw ' + sw_data[index].intact + '">' +
                        '               <span class="sw_position">' + sw_data[index].position + '</span>' +
                        '           </div>';
                }
            } else if (data.status != '200') {
                // 补写一个</div>标签，防止grid布局影响图片盒子的显示
                content +=
                    '           </div><div class="liForItemShowImgDiv"><img src="../img/noResult.png" alt="" class="liForItemShow_img" style="width: 65%">\n' +
                    '               <div class="li_info" style="font-size:medium">服务端繁忙，请稍等1分钟左右再试！</div>' +
                    '           </div>\n'
            }

            serveDiv.innerHTML = content;
        }
    });
}

