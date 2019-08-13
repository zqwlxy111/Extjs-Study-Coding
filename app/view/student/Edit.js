Ext.define('Yvan.view.student.List', {
    extend: 'Ext.window.Window',
    alias: 'widget.studentlist', // 设置这个组件的别名
    title: '修改学生信息',
    layout: 'fit',
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
            text:'保存',
            action:'save'
        },{
            text: '取消',
            scope:this,
            handler: this.close
        }];
        // 定义数据源
        this.store = {
            fields: ['id', 'name', 'age', 'sex'],
            data: [
                {id: 1, name: 'libinglin', age: 18, sex: 'male'},
                {id: 2, name: 'zhuqiuwen', age: 18, sex: 'female'},
            ]
        };
        // 定义表格的列和数据源的字段名一一对应
        this.columns = [
            {header: '编号', dataIndex: 'id', flex: 1},
            {header: '姓名', dataIndex: 'name', flex: 1},
            {header: '年龄', dataIndex: 'age', flex: 1},
            {header: '性别', dataIndex: 'sex', flex: 1},
        ];
        // 一定要调用下面这句话 -- 调用父类做渲染
        this.callParent(arguments);
    }
});