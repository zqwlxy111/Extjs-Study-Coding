/** @MethodName: Ext.dom.Event
 * @Description:
 * @Return:
 * @Author: Yvan
 * @Date: 2019/8/23/0023  15:07
 *
 */
/*
Ext.onReady(function () {

    Ext.create('Ext.panel.Panel', {
        title: 'panel',
        width:200,
        height:200,
        renderTo: Ext.getBody(),
        html:''
    })

});*/

// 对于事件的传播机制： 1. 捕获  2. 目标（命中） 3. 冒泡  --- (事件传播：true：捕获 / false：冒泡)

window.onload = function () {
    var inp = document.createElement('input');
    inp.id = 'inp1';
    inp.value = '点击';
    inp.type = 'button';
    inp.addEventListener('click', function (event) {
        alert('input执行...');
        event.stopPropagation();
    },false);

    var div = document.createElement('div');
    div.addEventListener('click',function () {
        alert('div执行了...');
    },false);

    document.body.addEventListener('click',function () {
        alert('body执行了...');
    },false);
    document.body.appendChild(div);
    div.appendChild(inp);
};