setTimeout(() => {
    window.onload=function () {
        
        if(document.getElementById('linkIcon')){
            document.getElementById("linkIcon").onclick = () =>{
                window.open("http://ark-share-dev.dev.burgeononline.com");
            }
        }
        if(document.getElementById('vBg')){
            document.getElementById("vBg").onclick = () =>{ 
                var maskBlock = document.getElementsByClassName("mask")[0];
                    maskBlock.style.display = "flex";
            }
        }
        if(document.getElementById('close')){
            document.getElementById("close").onclick = () =>{
                var maskBlock = document.getElementsByClassName("mask")[0];
                    maskBlock.style.display = "none";
            }
        }
        if(document.getElementById('scroll')){
            document.getElementById("scroll").onload = (() =>{            
                var box = document.getElementById("scroll");
                var begin = document.getElementById("block-img1");
                var tab2=document.getElementById("block-img2");
                tab2.innerHTML = begin.innerHTML;
                var beginw = begin.offsetWidth;
            
                var timer = window.setInterval(function(){
                box.scrollLeft++;
                var curLeft = box.scrollLeft;
                    if(curLeft >= beginw){
                        box.scrollLeft = 0;
                    }
                },20);
            })()
        }
    }
}, 100)


