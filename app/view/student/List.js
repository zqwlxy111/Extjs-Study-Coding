Ext.define('Yvan.view.student.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.studentlist', // 设置这个组件的别名
    title: '学生信息列表',
    // 引用store
    store:'Students',
    initComponent: function () {  // 在这个组件还没创建出来前执行以下的函数
        /*// 定义数据源
        this.store = {
            fields: ['id','name','age','sex'],
            data: [
                {id:1,name:'libinglin',age:18,sex:'male'},
                {id:2,name:'zhuqiuwen',age:18,sex:'female'},
            ]
        };*/
        var store = Ext.getStore('Students');
        store.load(function(records){
            console.log(records);
        });
        this.store=store;
        // 定义表格的列和数据源的字段名一一对应
        this.columns = [
            {header:'编号',dataIndex:'id',flex:1},
            {header:'姓名',dataIndex:'name',flex:1},
            {header:'年龄',dataIndex:'age',flex:1},
            {header:'性别',dataIndex:'sex',flex:1},
        ];
        // 一定要调用下面这句话 -- 调用父类做渲染
        this.callParent(arguments);
    }
});