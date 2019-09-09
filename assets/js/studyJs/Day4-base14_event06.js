
/** @MethodName: Ext.util.Observable
 * @Description: 自定义事件类
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/6/0006  11:24
 *
 */

Ext.onReady(function () {

    //Ext.util.Observable 自定义事件类

    // 1. 最简单的自定义事件
    /*var win = Ext.create('Ext.Window',{
        title: '简单的自定义事件',
        width:400,
        height:300,
        renderTo: Ext.getBody(),
        listeners:{
            show:function () {
                win.fireEvent('myEvent');
            }
        }
    });
    // 1. 添加事件类型
    win.addEvents('myEvent');
    // 2. 添加事件监听
    win.on('myEvent',function () {
        alert('myEvent...');
    })
    win.show();*/

    // 2. 单次运行监听器的使用，single配置项在组件中的用途
    /*var win = Ext.create('Ext.Window',{
        title: '简单的自定义事件',
        width:400,
        height:300,
        renderTo: Ext.getBody(),
        listeners: {
            render: function () {
                alert("我仅仅只被渲染了一次！。。。");
            },
            single: true, // 当前这个事件监听执行一次之后就自动销毁了
            delay:3000    // 延迟执行监听事件
        }
    });
    win.show();*/

    // 3. 对于事件的挂起和恢复实例
    /*var btn1 = Ext.create('Ext.Button',{
        text: '挂起',
        handler:function () {
            btn3.suspendEvents();
        },
        renderTo:Ext.getBody()
    });
    var btn2 = Ext.create('Ext.Button',{
        text: '恢复',
        handler:function () {
            btn3.resumeEvents();
        },
        renderTo:Ext.getBody()
    });
    var btn3 = Ext.create('Ext.Button', {
        text: '按钮',
        listeners: {
            mouseover: function () {
                alert('执行了。。。');
            }
        },
        renderTo: Ext.getBody()
    });*/

    // 4. 事件的转发机制
    var win = Ext.create('Ext.Window',{
        title: '事件的转发',
        renderTo: Ext.getBody(),
        width:300,
        height:200,
        listeners:{
            myEvent:function () {
                alert("我是自己定义的事件。。。");
            }
        }
    });
    var btn1 = Ext.create('Ext.Button',{
        text: '我是按钮',
        handler:function () {
            btn1.fireEvent('myEvent');   // 此时btn1拥有这个事件，即可触发这个事件
        },
        renderTo:Ext.getBody()
    });
    win.show();
    win.relayEvents(btn1, ['myEvent']);   // 转发这个事件给btn1
});