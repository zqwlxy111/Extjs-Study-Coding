Ext.define('Yvan.view.student.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.studentedit', // 设置这个组件的别名
    title: '修改学生信息',
    layout: 'fit', // 布局
    autoShow: true, //  只要这个组件一渲染就显示
    initComponent: function () {  // 在这个组件还没创建出来前执行以下的函数
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: '姓名'
            },
                {
                    xtype: 'textfield',
                    name: 'age',
                    fieldLabel: '年龄'
                },
                {
                    xtype: 'textfield',
                    name: 'sex',
                    fieldLabel: '性别'
                }
            ]
        }];
        this.buttons = [{
            text: '保存',
            action: 'save'
        }, {
            text: '取消',
            scope: this, // 将this指向form而不是buttons的this，buttons的this没有close函数
            handler: this.close   // 不要加 ()
        }];
        // 务必执行下面的这段代码！重要！
        this.callParent(arguments)
    }
});