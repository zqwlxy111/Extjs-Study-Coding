Ext.onReady(function () {
    /*Ext.create('Ext.window.Window', {
        title: 'Hello',
        height: 200,
        width: 400,
        layout: 'fit',
        items: {  // Let's put an empty grid in just to illustrate fit layout
            xtype: 'grid',
            border: false,
            columns: [{header: 'World'}],                 // 仅仅用来显示一个头部。没有数据，
            store: Ext.create('Ext.data.ArrayStore', {}) // 一个假的空的数据存储
        }
    }).show()*/
    //  Ext.create方法相当于创建一个实例对象
    Ext.create('Ext.window.Window',{
        title: '我的第一个window组件',
        width:  400,
        height: 300,
        layout: 'fit',
        constrain: true,                // 限制窗口不超出浏览器边界
        constrainHeader: true,          // 限制窗口标题不超出浏览器边界
        modal:true,                     // 设置一个模态窗口
        plain:false,                    // 设置窗口透明背景
        autoScroll:true,                // 添加滚动条
        icon:'assets/img/add.png',      // 字符串参数，图片路径
        iconCls:'',                     // css样式
        html:'<div>Yvan for Libinglin</div>',        // 添加html
        renderTo:Ext.getBody(),
    }).show();

});
