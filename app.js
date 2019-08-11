Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Yvan', // 代表的是一个全局的命名空间
    appFolder: 'app', // 代表之后会动态加载一些js，命名为放mvc的文件夹的名字

    launch: function () { // Ext启动文件，需要在index.html里面引入
        Ext.create('Ext.container.Viewport', {
            layout: 'fit', // 充满整个屏幕
            items: [{
                xtype: 'panel',
                title: '标题',
                html: '内容'
            }]
        });
    }
});