Ext.application({  // 相当于一个大型的家族控制器
    requires: ['Ext.container.Viewport'],
    name: 'Yvan', // 代表的是一个全局的命名空间
    appFolder: 'app', // 代表之后会动态加载一些js，命名为放mvc的文件夹的名字
    controllers:[
        'Students' // 对应controller文件夹下面的Students.js
    ],
    launch: function () { // Ext启动文件，需要在index.html里面引入
        console.log("launch triggered");
        Ext.create('Ext.container.Viewport', {
            layout: 'fit', // 充满整个屏幕
            items: [
                // 引用view下面的student的视图
                {xtype:'studentlist'} // 这里是在view里面的视图定义的别名
            ]
        });
    }
});