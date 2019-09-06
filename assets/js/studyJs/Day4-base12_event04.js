
/** @MethodName: Ext.EventManage
 * @Description: Ext系统事件(把浏览器自带的事件做个封装，目的是屏蔽浏览器之间的差异问题)
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/6/0006  10:57
 *
 */

Ext.onReady(function () {

    // on添加事件监听   un移除事件监听

    var inp = document.createElement('input');
    inp.type = 'button';
    inp.id = 'inp1';
    inp.value = '点击触发EventManage';
    document.body.appendChild(inp);

    var eInp = Ext.get('inp1');
    /*var firstOn = Ext.EventManager.on(eInp,'click',function () {
        alert("EventManage 事件触发。。。");
    },false);
    firstOn.un();
    var firstOn = Ext.EventManager.on(eInp,'click',function () {
        alert("EventManage 事件再次触发。。。");
    },false)*/

    // 三种绑定事件的方式:
    // Ext.EventManager.on(el, ename, fn);
    // Ext.EventManager.on(el, {ename1: fn1, ename2: fn2})
    // Ext.EventManager.on(el, {ename1: {fn:fun}), ename2: {fn:fun}});

    // 绑定多个事件
    Ext.EventManager.on(eInp,{'click':function () {
            alert("我被点击了。。。");
        },'mouseout':function () {
            alert("有鼠标离开了。。。");
        }})
});