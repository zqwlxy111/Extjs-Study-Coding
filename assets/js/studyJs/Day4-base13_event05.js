
/** @MethodName:
 * @Description: 为Ext的UI组件绑定事件
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/6/0006  11:24
 *
 */

Ext.onReady(function () {

    // 1. 直接在组件内部添加listeners配置项
    /*var win = Ext.create('Ext.Window', {
        title: 'ui组件的事件实例1',
        width:400,
        height:300,
        renderTo:Ext.getBody(),
        tbar: [{
            text: '点击我',
            id:'aa'
        }],
        listeners:{     // 在这个配置项对象中添加事件即可
            show:function () {
                alert("我被展示了。。。");
            },
            close:function () {
                alert("我被关闭了。。。");
            },
            render:function () {       // 在渲染的时候就会调用这个方法
                alert("我被渲染出来了。。。（组件渲染的时候执行的事件）");
            },
            click:{     // 给window组件内部的组件创建click事件
                element: 'body',
                fn:function () {
                    alert("点击了body。。。");
                }
            }
        }
    });
    win.show();*/

    // 2. 使用组件的引用为组件绑定一些事件
    var win = Ext.create('Ext.Window', {
        title: 'ui组件的事件实例2',
        width:400,
        height:300,
        renderTo:Ext.getBody(),
    });
    // win.on('show',function () {
    //     alert('我被展示出来了。。。');
    // })
    win.on({
        show:function () {
            alert('我被展示了。。。');
        },
        close:function () {
            alert('我被关闭了。。。');
        }
    });
    win.show();

});