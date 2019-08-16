/**
     *      window Group对象操作 window组
            重点分析:该实例主要目的针对于特殊需求进行具体的实现,利用
            windowGroup去操作多个窗体同步执行某些任务,这有点类似于
            javascript里的组合模式,原理就是上级负责换行一个动作但并不
            真正去执行,而是分别传递给所有的下级组件去具体执行
            register
            hideAll
            each
 */
Ext.onReady(function () {

    // exam003: 用window Group操作多个window窗口
    var winGroup = new Ext.WindowGroup();
    for (var i = 1; i <= 5; i++) {
        var win = Ext.create('Ext.Window',{
            title: '第'+i+'窗口',
            id:'win_'+i,
            width:300,
            height:300,
            renderTo:Ext.getBody()
        });
        win.show();
        winGroup.register(win);     // 把窗体对象注册给ZIndexManager
    }
    // Extjs快速创建btn
    var btn1 =Ext.create('Ext.button.Button',{
        text:'我是按钮1 -- 全部隐藏',
        style:'margin-top:50px',
        renderTo: Ext.getBody(),
        handler:function (btn) {
            winGroup.hideAll();     // 隐藏所有被管理起来的window组件
        }
    });
    var btn2 =Ext.create('Ext.button.Button',{
        text:'我是按钮2 -- 全部显示',
        style:'margin-top:50px;margin-left:50px',
        renderTo: Ext.getBody(),
        handler:function (btn) {
            winGroup.each(function (cmp) {
                cmp.show();         // 显示所有隐藏的window组件
            })
        }
    });
    var btn3 =Ext.create('Ext.button.Button',{
        text:'我是按钮3 -- 把窗口3排在最前面',
        style:'margin-top:50px;margin-left:50px',
        renderTo: Ext.getBody(),
        handler:function (btn) {
            var winAc = winGroup.get('win_3');
            winGroup.bringToFront(winAc)
        }
    })
    var btn4 =Ext.create('Ext.button.Button',{
        text:'我是按钮4 -- 把窗口5排在最后面',
        style:'margin-top:50px;margin-left:50px',
        renderTo: Ext.getBody(),
        handler:function (btn) {
            var winAc = winGroup.get('win_5');
            winGroup.sendToBack(winAc)
        }
    })


});