/** @MethodName: Ext.EventManage
 * @Description: 封装浏览器自带的事件，并且解决了浏览器差异的问题
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/5/0005  14:32
 *
 */

var MyExt = {};

// 封装浏览器自带的事件，屏蔽浏览器之间的差异
MyExt.EventManager = {
    // 添加监听
    addListener: function (el,ename,fn,useCaptrue) {
        if (el.addEventListener){
            el.addEventListener(ename, fn, useCaptrue);
        }else if (el.attachEvent){
            el.attachEvent('on' + ename, fn);
        }
    },
    // 移除监听
    removeListener:function (el,ename,fn,useCaptrue) {
        if (el.addEventListener){
            el.removeEventListener(ename, fn, useCaptrue);
        }else if (el.attachEvent){
            el.detachEvent('on' + ename, fn);
        }
    }
};

MyExt.EventManager.on = MyExt.EventManager.addListener;
MyExt.EventManager.un = MyExt.EventManager.removeListener;

window.onload = function () {

    var inp = document.getElementsByTagName('input')[0];
    MyExt.EventManager.on(inp, 'click', function () {
        alert("我执行了。。。");
    },false)
};