setTimeout(function () {
  const UA = window.navigator.userAgent.toLowerCase();
  const isEdge = UA && UA.indexOf('edge/') > 0;
  const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isFF = UA && UA.match(/firefox\/(\d+)/);
  console.log(isFF);
  if (isChrome || isFF) {
    document.getElementsByTagName("title")[0].text = "ARK";
    var highLightId = '';
    var headTitleBox = document.getElementsByClassName("nav-site nav-site-internal")[0];
    var textTitle1 = "企业定制服务";
    var textTitle2 = "生态产品";
    var textTitle3 = "支持和下载";
    var textTitle4 = "联系我们";
    var useDocument = "使用文档";
    
    var newText1 = document.createTextNode(textTitle1);
    var newGraf1 = document.createElement("div");//第一个导航栏的结点
    newGraf1.setAttribute("id", "title1")
    newGraf1.appendChild(newText1);
    headTitleBox.appendChild(newGraf1);
    
    var newSpanIcon1 = document.createElement("i");//icon标签结点
    newSpanIcon1.setAttribute("id", "spanIcon")
    newSpanIcon1.className = "iconfont iconmd-arrow-dropdown";
    newGraf1.appendChild(newSpanIcon1);
    newSpanIcon1.style.display = "none";
    
    newGraf1.onmouseover = function () {
      title1Dom.style.backgroundColor = "#F4F4F4"
    }
    newGraf1.onmouseleave = function () {
      title1Dom.style.backgroundColor = "white"
    }
    
    var newText2 = document.createTextNode(textTitle2);
    var newGraf2 = document.createElement("div");
    newGraf2.setAttribute("id", "title2")
    newGraf2.appendChild(newText2);
    headTitleBox.appendChild(newGraf2);
    
    var newSpanIcon2 = document.createElement("i");//icon标签结点
    newSpanIcon2.setAttribute("id", "spanIcon2")
    newSpanIcon2.className = "iconfont iconmd-arrow-dropdown";
    newGraf2.appendChild(newSpanIcon2);
    newSpanIcon2.style.display = "none";
    
    newGraf2.onmouseover = function () {
      title2Dom.style.backgroundColor = "#F4F4F4"
    }
    newGraf2.onmouseleave = function () {
      title2Dom.style.backgroundColor = "white"
    }
    
    var useDocumentNode = document.createTextNode(useDocument);
    var useDocumentGraf = document.createElement("div");
    useDocumentGraf.setAttribute("id", "useDocumentDom");
    useDocumentGraf.appendChild(useDocumentNode);
    headTitleBox.appendChild(useDocumentGraf);
    
    var useDocumentIcon = document.createElement("i");//icon标签结点
    useDocumentIcon.setAttribute("id", "useDocumentIconId")
    useDocumentIcon.className = "iconfont iconmd-arrow-dropdown";
    useDocumentGraf.appendChild(useDocumentIcon);
    useDocumentIcon.style.display = "none";
    
    useDocumentGraf.onmouseover = function () {
      useDocumentGraf.style.backgroundColor = "#F4F4F4"
    }
    useDocumentGraf.onmouseleave = function () {
      useDocumentGraf.style.backgroundColor = "white"
    }
    
    var newText3 = document.createTextNode(textTitle3);
    var newGraf3 = document.createElement("div");
    newGraf3.setAttribute("id", "title3")
    newGraf3.appendChild(newText3);
    headTitleBox.appendChild(newGraf3);
    
    var newSpanIcon3 = document.createElement("i");//icon标签结点
    newSpanIcon3.setAttribute("id", "spanIcon3")
    newSpanIcon3.className = "iconfont iconmd-arrow-dropdown";
    newGraf3.appendChild(newSpanIcon3);
    newSpanIcon3.style.display = "none";
    
    newGraf3.onmouseover = function () {
      title3Dom.style.backgroundColor = "#F4F4F4"
    }
    newGraf3.onmouseleave = function () {
      title3Dom.style.backgroundColor = "white"
    }
    
    var newText4 = document.createTextNode(textTitle4);
    var newGraf4 = document.createElement("div");
    newGraf4.setAttribute("id", "title4")
    newGraf4.appendChild(newText4);
    headTitleBox.appendChild(newGraf4);
    
    var newSpanIcon4 = document.createElement("i");//icon标签结点
    newSpanIcon4.setAttribute("id", "spanIcon4")
    newSpanIcon4.className = "iconfont iconmd-arrow-dropdown";
    newGraf4.appendChild(newSpanIcon4);
    newSpanIcon4.style.display = "none";
    
    newGraf4.onmouseover = function () {
      title4Dom.style.backgroundColor = "#F4F4F4"
    }
    newGraf4.onmouseleave = function () {
      title4Dom.style.backgroundColor = "white"
    }
    
    var title1Dom = document.getElementById('title1');
    var title1Flag = true;
    
    function titleOpenBefor80(titleDom, titleBox) {
      /*打开二级菜单*/
      if (titleBox != null) {
        titleBox.style.display = 'block';
        titleBox.style.borderTop = "1px solid #bdc3c7"
        titleBox.style.boxShadow = "0px 2px 3px rgba(0,0,0,.2)"
      }
    }
    function titleOpenAfter80(titleDom, titleBox) {
      /*打开二级菜单*/
      if (titleBox != null) {
        titleBox.style.display = 'block';
        titleBox.style.borderTop = "1px solid #bdc3c7"
        titleBox.style.boxShadow = "0px 2px 3px rgba(0,0,0,.2)"
      }
    }
    
    function titleCloseBefore80(titleDom, titleBox) {

      if (titleBox != null) {
        titleBox.style.display = 'none';
        titleBox.style.borderTop = "none"
      }
    }
    
    function titleCloseAfter80(titleDom, titleBox) {
      if (titleBox != null) {
        titleBox.style.display = 'none';
        titleBox.style.borderTop = "none"
      }
    }
    
    title1Dom.onclick = function () {
      var scroll1 = document.documentElement.scrollTop;
      if (title1Flag) {
        highLightId = 'title1';
        newSpanIcon2.style.display = "none";
        newSpanIcon3.style.display = "none";
        newSpanIcon4.style.display = "none";
        useDocumentIcon.style.display = "none";
        title1Flag = !title1Flag;
        title2Flag = true;
        title3Flag = true;
        title4Flag = true;
        useDocumentFlag = true;
        newSpanIcon1.style.display = "block";
        if (scroll1 < 80) {
          titleOpenBefor80(title1Dom, titleBox1);
          titleCloseBefore80(title2Dom, titleBox2);
          titleCloseBefore80(title3Dom, titleBox3);
          titleCloseBefore80(title4Dom, titleBox4);
          titleCloseBefore80(useDocumentDom1, useDocumentBox);
        } else {
          titleOpenAfter80(title1Dom, titleBox1);
          titleCloseAfter80(title2Dom, titleBox2);
          titleCloseAfter80(title3Dom, titleBox3);
          titleCloseAfter80(title4Dom, titleBox4);
          titleCloseAfter80(useDocumentDom1, useDocumentBox);
        }
      } else {
        title1Flag = !title1Flag;
        if (scroll1 < 80) {
          titleCloseBefore80(title1Dom, titleBox1);
        } else {
          titleCloseAfter80(title1Dom, titleBox1);
        }
        newSpanIcon1.style.display = "none";
      }
    };
    
    var titleBox1 = document.createElement("div");
    titleBox1.setAttribute("id", "titleBox1");
    newGraf1.appendChild(titleBox1);
    titleBox1.style.display = 'none';
    
    titleBox1.innerHTML = '<div class="secondTitle" id="wait"><div class="secondTitle1">敬请期待</div></div>';
    
    wait.onmouseover = function () {
      wait.style.backgroundColor = "#F4F4F4"
    }
    
    wait.onmouseleave = function () {
      wait.style.backgroundColor = "white"
    }
    
    var titleBox2 = document.createElement("div");
    titleBox2.setAttribute("id", "titleBox2");
    newGraf2.appendChild(titleBox2);
    titleBox2.style.display = 'none';
    var url = 'http://localhost:3000/';
    titleBox2.innerHTML = '<div class="secondTitle" id="arkui"><div class="secondTitle2">ARK UI</div><div class="secondContent2">模块化解决方案</div><!--</a>--></div>' +
      '<div class="secondTitle" id="arkshare"><div class="secondTitle2">ARK Share</div><div class="secondContent2">共享、交流组件分享社区</div></div>' +
      '<div class="secondTitle" id="arkdesign"><div class="secondTitle2">ARK Design</div><div class="secondContent2">界面从构思到落地一站式服务</div></div>' +
      '<div class="secondTitle" id="jflow"><div class="secondTitle2">JFlow</div><div class="secondContent2">项目级流程管理器</div></div>' +
      '<div class="secondTitle" id="spac"><div class="secondTitle2">SPAC</div><div class="secondContent2">单应用构造器</div></div>'
    
    var arkuidom = document.getElementById('arkui');
    arkuidom.onclick = function () {
      window.open("http://47.99.229.124:8097/index.html#/");
    }
    
    arkuidom.onmouseover = function () {
      arkuidom.style.backgroundColor = "#F4F4F4"
    }
    
    arkuidom.onmouseleave = function () {
      arkuidom.style.backgroundColor = "white"
    }
    
    var arksharedom = document.getElementById('arkshare');
    arksharedom.onclick = function () {
      window.open("http://ark-share-dev.dev.burgeononline.com/TouristPage");
    }
    
    arksharedom.onmouseover = function () {
      arksharedom.style.backgroundColor = "#F4F4F4"
    }
    
    arksharedom.onmouseleave = function () {
      arksharedom.style.backgroundColor = "white"
    }
    
    var arkdesigndom = document.getElementById('arkdesign');
    arkdesigndom.setAttribute("title", "敬请期待");
    
    arkdesigndom.onmouseover = function () {
      arkdesigndom.style.backgroundColor = "#F4F4F4"
    }
    
    arkdesigndom.onmouseleave = function () {
      arkdesigndom.style.backgroundColor = "white"
    }
    
    var jflowdom = document.getElementById('jflow');
    jflowdom.setAttribute("title", "敬请期待")
    
    jflowdom.onmouseover = function () {
      jflowdom.style.backgroundColor = "#F4F4F4"
    }
    
    jflowdom.onmouseleave = function () {
      jflowdom.style.backgroundColor = "white"
    }
    
    var spacdom = document.getElementById('spac');

    spacdom.setAttribute("title", "敬请期待");
    spacdom.onmouseover = function () {
      spacdom.style.backgroundColor = "#F4F4F4"
    }
    
    spacdom.onmouseleave = function () {
      spacdom.style.backgroundColor = "white"
    }
    
    var title2Dom = document.getElementById('title2');
    var title2Flag = true;
    title2Dom.onclick = function () {
      var scroll1 = document.documentElement.scrollTop;
      if (title2Flag) {
        highLightId = 'title2';
        newSpanIcon1.style.display = "none";
        newSpanIcon3.style.display = "none";
        newSpanIcon4.style.display = "none";
        useDocumentIcon.style.display = "none";
        title1Flag = true;
        title3Flag = true;
        title4Flag = true;
        useDocumentFlag = true;
        title2Flag = !title2Flag;
        newSpanIcon2.style.display = "block";
        if (scroll1 < 80) {
          titleOpenBefor80(title2Dom, titleBox2);
          titleCloseBefore80(title1Dom, titleBox1);
          titleCloseBefore80(title3Dom, titleBox3);
          titleCloseBefore80(title4Dom, titleBox4);
          titleCloseBefore80(useDocumentDom1, useDocumentBox);
        } else {
          titleOpenAfter80(title2Dom, titleBox2);
          titleCloseAfter80(title1Dom, titleBox1);
          titleCloseAfter80(title3Dom, titleBox3);
          titleCloseAfter80(title4Dom, titleBox4);
          titleCloseAfter80(useDocumentDom1, useDocumentBox);
        }
      } else {
        if (scroll1 < 80) {
          titleCloseBefore80(title2Dom, titleBox2);
        } else {
          titleCloseAfter80(title1Dom, titleBox2);
        }
        title2Flag = !title2Flag;
        newSpanIcon2.style.display = "none";
      }
    };
    
    var useDocumentBox = document.createElement("div");
    useDocumentBox.setAttribute("id", "useDocumentBoxId");
    useDocumentGraf.appendChild(useDocumentBox);
    useDocumentBox.style.display = 'none';
    
    useDocumentBox.innerHTML =
      '<div class="secondTitle" id="burgeonR3Docu"><div class="secondTitle2">Burgeon R3</div><div class="secondContent2">简单、易用单应用构造器</div></div>'+
      '<div class="secondTitle" id="arkShareDocu"><div class="secondTitle2">ARK Share</div><div class="secondContent2">前端组件资源共享平台</div><!--</a>--></div>' +
      '<div class="secondTitle" id="arkCliDocu"><div class="secondTitle2">ARK Cli</div><div class="secondContent2">前端开发工具</div></div>' +
      '<div class="secondTitle" id="arkDingtalkDocu"><div class="secondTitle2">ARK Dingtalk</div><div class="secondContent2">基于钉钉应用的移动端组件库</div></div>' +
      '<div class="secondTitle" id="arkDesignDocu"><div class="secondTitle2">ARK Design</div><div class="secondContent2">服务于企业级产品的设计语言</div></div>' +
      '<div class="secondTitle" id="jflowDocu"><div class="secondTitle2">JFlow</div><div class="secondContent2">项目级流程管理器</div></div>';
     
    
    var useDocumentDom1 = document.getElementById('useDocumentDom');
    var useDocumentFlag = true;
    
    var arkShareDocu = document.getElementById("arkShareDocu");
    arkShareDocu.onclick = function () {
      window.location.href = window.origin+"/docs/ARK-Share";
    }
    arkShareDocu.onmouseover = function () {
      arkShareDocu.style.backgroundColor = "#F4F4F4"
    }
    arkShareDocu.onmouseleave = function () {
      arkShareDocu.style.backgroundColor = "white"
    }
    var arkCliDocu = document.getElementById("arkCliDocu");
    arkCliDocu.onclick = function () {
      window.location.href = window.origin+"/docs/ARK-CLI";
    }
    arkCliDocu.onmouseover = function () {
      arkCliDocu.style.backgroundColor = "#F4F4F4"
    }
    
    arkCliDocu.onmouseleave = function () {
      arkCliDocu.style.backgroundColor = "white"
    }
    var arkDingtalkDocu = document.getElementById("arkDingtalkDocu");
    arkDingtalkDocu.onclick = function () {
      window.location.href = window.origin+"/docs/ARK-DingTalk";
    }
    arkDingtalkDocu.onmouseover = function () {
      arkDingtalkDocu.style.backgroundColor = "#F4F4F4"
    }
    arkDingtalkDocu.onmouseleave = function () {
      arkDingtalkDocu.style.backgroundColor = "white"
    }
    var arkDesignDocu = document.getElementById("arkDesignDocu");
    arkDesignDocu.onclick = function () {
      window.location.href = window.origin+"/docs/ARK-Design";
    }
    arkDesignDocu.onmouseover = function () {
      arkDesignDocu.style.backgroundColor = "#F4F4F4"
    }
    arkDesignDocu.onmouseleave = function () {
      arkDesignDocu.style.backgroundColor = "white"
    }
    var burgeonR3Docu = document.getElementById("burgeonR3Docu");
    burgeonR3Docu.onclick = function () {
      window.location.href = window.origin+"/docs/R3-API";
    }
    burgeonR3Docu.onmouseover = function () {
      burgeonR3Docu.style.backgroundColor = "#F4F4F4"
    }
    burgeonR3Docu.onmouseleave = function () {
      burgeonR3Docu.style.backgroundColor = "white"
    }
    var jflowDocu = document.getElementById("jflowDocu");
    jflowDocu.onclick = function () {
      window.location.href = window.origin+"/docs/JFlowPlugin-Version";
    }
    jflowDocu.onmouseover = function () {
      jflowDocu.style.backgroundColor = "#F4F4F4"
    }
    jflowDocu.onmouseleave = function () {
      jflowDocu.style.backgroundColor = "white"
    }
    useDocumentDom1.onclick = function () {
      var scroll1 = document.documentElement.scrollTop;
      if (useDocumentFlag) {
        highLightId = 'useDocumentDom';
        newSpanIcon1.style.display = "none";
        newSpanIcon2.style.display = "none";
        newSpanIcon4.style.display = "none";
        newSpanIcon3.style.display = "none";
        title2Flag = true;
        title1Flag = true;
        title4Flag = true;
        title3Flag = true;
        useDocumentFlag = !useDocumentFlag;
        useDocumentIcon.style.display = "block";
        if (scroll1 < 80) {
          titleOpenBefor80(useDocumentDom1, useDocumentBox);
          titleCloseBefore80(title2Dom, titleBox2);
          titleCloseBefore80(title1Dom, titleBox1);
          titleCloseBefore80(title4Dom, titleBox4);
          titleCloseBefore80(title3Dom, titleBox3);
        } else {
          titleOpenAfter80(useDocumentDom1, useDocumentBox);
          titleCloseAfter80(title2Dom, titleBox2);
          titleCloseAfter80(title1Dom, titleBox1);
          titleCloseAfter80(title4Dom, titleBox4);
          titleCloseAfter80(title3Dom, titleBox3);
        }
      } else {
        if (scroll1 < 80) {
          titleCloseBefore80(useDocumentDom1, useDocumentBox);
        } else {
          titleCloseAfter80(useDocumentDom1, useDocumentBox);
        }
        useDocumentFlag = !useDocumentFlag;
        useDocumentIcon.style.display = "none";
      }
    };
    
    var titleBox3 = document.createElement("div");
    titleBox3.setAttribute("id", "titleBox3");
    newGraf3.appendChild(titleBox3);
    titleBox3.style.display = 'none';
    
    titleBox3.innerHTML = '<div class="secondTitle" id="socialTalk"><div class="secondTitle3">社区论坛</div><div class="secondContent3">分享</div></div>' +
      '<div class="secondTitle" id="downAndState"><div class="secondTitle3">下载和说明</div><div class="secondContent3">ARK官方资源下载</div></div>';
    
    var socialTalkdom = document.getElementById('socialTalk');
    socialTalkdom.onmouseover = function () {
      socialTalkdom.style.backgroundColor = "#F4F4F4"
    }
    
    socialTalkdom.onmouseleave = function () {
      socialTalkdom.style.backgroundColor = "white"
    }
    
    socialTalkdom.setAttribute("title", "敬请期待");
    
    var downAndStatekdom = document.getElementById('downAndState');
    downAndStatekdom.onmouseover = function () {
      downAndStatekdom.style.backgroundColor = "#F4F4F4"
    }
    
    downAndStatekdom.onmouseleave = function () {
      downAndStatekdom.style.backgroundColor = "white"
    }
    
    downAndStatekdom.setAttribute("title", "敬请期待");
    
    var title3Dom = document.getElementById('title3');
    var title3Flag = true;
    
    title3Dom.onclick = function () {
      var scroll1 = document.documentElement.scrollTop;
      if (title3Flag) {
        highLightId = 'title3';
        newSpanIcon1.style.display = "none";
        newSpanIcon2.style.display = "none";
        newSpanIcon4.style.display = "none";
        useDocumentIcon.style.display = "none";
        title2Flag = true;
        title1Flag = true;
        title4Flag = true;
        useDocumentFlag = true;
        title3Flag = !title3Flag;
        newSpanIcon3.style.display = "block";
        if (scroll1 < 80) {
          titleOpenBefor80(title3Dom, titleBox3);
          titleCloseBefore80(title2Dom, titleBox2);
          titleCloseBefore80(title1Dom, titleBox1);
          titleCloseBefore80(title4Dom, titleBox4);
          titleCloseBefore80(useDocumentDom1, useDocumentBox);
        } else {
          titleOpenAfter80(title3Dom, titleBox3);
          titleCloseAfter80(title2Dom, titleBox2);
          titleCloseAfter80(title1Dom, titleBox1);
          titleCloseAfter80(title4Dom, titleBox4);
          titleCloseAfter80(useDocumentDom1, useDocumentBox);
        }
      } else {
        if (scroll1 < 80) {
          titleCloseBefore80(title3Dom, titleBox3);
        } else {
          titleCloseAfter80(title3Dom, titleBox3);
        }
        title3Flag = !title3Flag;
        newSpanIcon3.style.display = "none";
      }
    };
    
    var titleBox4 = document.createElement("div");
    titleBox4.setAttribute("id", "titleBox4");
    newGraf4.appendChild(titleBox4);
    titleBox4.style.display = 'none';
    titleBox4.innerHTML =
      '<div class="twoWeiCode"></div><div class="codeState">使用QQ扫码识别</div>';
    
    var title4Dom = document.getElementById('title4');
    var title4Flag = true;
    title4Dom.onclick = function () {
      var scroll1 = document.documentElement.scrollTop;
      var srcollLeft = document.body.clientWidth;
      if (srcollLeft < 1290) {
        if (document.getElementById("titleBox4") != null) {
          document.getElementById("titleBox4").style.left = "-147px";
        }
      } else {
        if (document.getElementById("titleBox4") != null) {
          document.getElementById("titleBox4").style.left = "0px";
        }
      }
      if (title4Flag) {
        highLightId = 'title4';
        newSpanIcon1.style.display = "none";
        newSpanIcon2.style.display = "none";
        newSpanIcon3.style.display = "none";
        useDocumentIcon.style.display = "none";
        title2Flag = true;
        title3Flag = true;
        title1Flag = true;
        useDocumentFlag = true;
        title4Flag = !title4Flag;
        newSpanIcon4.style.display = "block";
        if (scroll1 < 80) {
          titleOpenBefor80(title4Dom, titleBox4);
          titleCloseBefore80(title2Dom, titleBox2);
          titleCloseBefore80(title3Dom, titleBox3);
          titleCloseBefore80(title1Dom, titleBox1);
          titleCloseBefore80(useDocumentDom1, useDocumentBox);
        } else {
          titleOpenAfter80(title4Dom, titleBox4);
          titleCloseAfter80(title2Dom, titleBox2);
          titleCloseAfter80(title3Dom, titleBox3);
          titleCloseAfter80(title1Dom, titleBox1);
          titleCloseAfter80(useDocumentDom1, useDocumentBox);
        }
      } else {
        newSpanIcon4.style.display = "none";
        title4Flag = !title4Flag;
        titleBox4.style.display = 'none';
      }
    };
    
    if (title4Flag && title2Flag && title3Flag && title1Flag && useDocumentFlag) {
      highLightId = '';
    }
    document.getElementsByTagName("body")[0].addEventListener('click', outClick);
    function outClick(event) {
      if (event.target.id != 'title1' && event.target.id != 'title2' && event.target.id != 'title3' && event.target.id != 'title4' && event.target.id != 'useDocumentDom') {
        title2Flag = true;
        title3Flag = true;
        title1Flag = true;
        title4Flag = true;
        useDocumentFlag = true;
        newSpanIcon4.style.display = "none";
        newSpanIcon1.style.display = "none";
        newSpanIcon2.style.display = "none";
        newSpanIcon3.style.display = "none";
        useDocumentIcon.style.display = "none";
        var scroll1 = document.documentElement.scrollTop;
        if (scroll1 < 80) {
          titleCloseBefore80(title4Dom, titleBox4);
          titleCloseBefore80(title2Dom, titleBox2);
          titleCloseBefore80(title3Dom, titleBox3);
          titleCloseBefore80(title1Dom, titleBox1);
          titleCloseBefore80(useDocumentDom1, useDocumentBox);
        } else {
          titleCloseAfter80(title4Dom, titleBox4);
          titleCloseAfter80(title2Dom, titleBox2);
          titleCloseAfter80(title3Dom, titleBox3);
          titleCloseAfter80(title1Dom, titleBox1);
          titleCloseAfter80(useDocumentDom1, useDocumentBox);
        }
      }
    }
    
    var scroll = document.documentElement.scrollTop;
    if (scroll > 250) {
      if (document.getElementsByClassName("copyBox")[0] != null) {
        document.getElementsByClassName("copyBox")[0].style.display = "none";
      }
    }
    window.addEventListener('scroll', menu);/*监听滚动*/
    function menu() {
      newSpanIcon4.style.display = "none";
      newSpanIcon1.style.display = "none";
      newSpanIcon2.style.display = "none";
      newSpanIcon3.style.display = "none";
      useDocumentIcon.style.display = "none";
      var scroll = document.documentElement.scrollTop;//获取滚动的高度
      if (scroll > 250) {
        if (document.getElementsByClassName("CopyShowSmall")[0] != null) {
          document.getElementsByClassName("CopyShowSmall")[0].style.display = "none"
        }
      } else {
        if (document.getElementsByClassName("CopyShowSmall")[0] != null) {
          document.getElementsByClassName("CopyShowSmall")[0].style.display = "flex"
        }
      }
      if (scroll > 320) {
        if (document.getElementsByClassName("CopyShowMain")[0] != null) {
          document.getElementsByClassName("CopyShowMain")[0].style.display = "none"
          document.getElementsByClassName("copyBox")[0].style.display = "none";
        }
      } else {
        if (document.getElementsByClassName("CopyShowMain")[0] != null) {
          document.getElementsByClassName("CopyShowMain")[0].style.display = "flex"
          document.getElementsByClassName("copyBox")[0].style.display = '';
        }
      }
      if (scroll < 80) {
        titleCloseBefore80(title4Dom, titleBox4);
        titleCloseBefore80(title2Dom, titleBox2);
        titleCloseBefore80(title3Dom, titleBox3);
        titleCloseBefore80(title1Dom, titleBox1);
        titleCloseBefore80(useDocumentDom1, useDocumentBox);
      } else {
        titleCloseAfter80(title4Dom, titleBox4);
        titleCloseAfter80(title2Dom, titleBox2);
        titleCloseAfter80(title3Dom, titleBox3);
        titleCloseAfter80(title1Dom, titleBox1);
        titleCloseAfter80(useDocumentDom1, useDocumentBox);
      }
      title2Flag = true;
      title3Flag = true;
      title1Flag = true;
      title4Flag = true;
      useDocumentFlag = true;
      if (document.getElementsByClassName("titleBox").length > 0) {
        var scrollRelative = document.getElementsByClassName("titleBox")[0].offsetTop;
      }
    }
    
    document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    window.onresize = function () {
      var scrollWindowWidth = document.body.scrollWidth;
      if (scrollWindowWidth < 1100) {
        document.getElementsByTagName("html")[0].style.overflowX = "auto";
      } else {
        document.getElementsByTagName("html")[0].style.overflowX = "hidden";
      }
    }
  } else {
    const divDom = document.createElement("div");
    const divDomBox = document.createElement("div");
    divDom.setAttribute("id","againstIEMask");
    divDomBox.setAttribute("id","againstIEBox");
    /* divDom.innerText = "不支持IE浏览器，请切换到谷歌浏览器浏览";*/
    const bodyDom = document.getElementsByTagName("body")[0];
    bodyDom.style.overflow = 'hidden';
    bodyDom.appendChild(divDomBox);
    divDomBox.appendChild(divDom);
  }
}, 100)

