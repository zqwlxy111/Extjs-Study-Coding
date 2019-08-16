Ext.onReady(function () {

    //  exam002 -- 在window中添加子组件，并讲解常用查找组件的方式
    /*    var win1 = new Ext.window.Window({
            title: '添加子组件示例',
            width: '20%',
            height: 400,
            draggable: false, // 不允许拖拽
            resizable: false, // 不允许改变大小
            closable: false,  // 不显示关闭按钮
            collapsible: true, // 显示折叠按钮，可折叠
            // bodyStyle: 'padding:10px',
            // html: '<div>我是内容</div>',
            padding: 10,
            renderTo: Ext.getBody(),
            items: [{
                xtype:'panel',
                width:'100%',
                height:'100%',
                // padding: 5,
                html:'我是面板的内容'
            },{
                xtype: 'button',
                html: '我是按钮',
                handler:function (btn) {
                    alert("我被点击了! 按钮内容： == "+btn.text)
                }
            }]
        });
        win1.show();*/

    var win2 = new Ext.window.Window({
        title: '操作组件的形式',
        id:'Yvan-window',
        width: '35%',
        height: 400,
        tbar: [             //  表示在当前组件的top位置加一个工具条
                            //  寻找父组件的三种方式
            {
                xtype: 'button', text: '我是tbar按钮1', handler: function (btn) {
                    // 只要是组件都会有up和down方法，表示向上或者向下查找
                    alert("我是按钮1")
                    alert(btn.up('window').title);
                }
            },
            {
                xtype: 'button', text: '我是tbar按钮2', handler: function (btn) {
                    alert("我是按钮2");
                    alert(Ext.getCmp('Yvan-window').title)
                }
            },
            {
                xtype: 'button', text: '我是tbar按钮3', handler: function (btn) {
                    alert("我是按钮3")
                    alert(btn.ownerCt.ownerCt.title)
                }
            },
        ],
        renderTo: Ext.getBody(),

    });
    win2.show();

});