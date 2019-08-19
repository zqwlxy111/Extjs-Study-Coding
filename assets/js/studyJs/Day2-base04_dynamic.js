/**
 * ExtJS扩展原生Javascript
 -Ext.Object
 -Ext.Number
 -Ext.String
 -Ext.Array
 -Ext.Function
 -Ext.Date
 -Ext.Error
 */
Ext.onReady(function () {

    // window
    /*Ext.create('Ext.window.Window', {
        title: '我是一个窗口',
        height: 400,
        width: 300,
        constrain: true,
        modal: true,
        html: '我是窗体的内容！！！',
        renderTo:Ext.getBody()
    }).show();*/

    // Ext MVC
    // 自己定义的一个类
    /*Ext.define('MyWindow', {
        extend: 'Ext.window.Window',  // 继承Ext的window类
        title: '我是一个窗口',
        height: 400,
        width: 300,
        constrain: true,
        modal: true,
        html: '我是窗体的内容！！！',
        renderTo: Ext.getBody()
    });
    var w1 = Ext.create('MyWindow');
    var w2 = Ext.create('MyWindow', {
        title: '我是w2'
    });
    w1.show();
    w2.show();*/

    //      动态加载一个js文件
    /*   第一步：在extjs目录下创建文件夹：ux ，在这个文件夹下建立自己的组件所对应的js文件
         第二步：在extjs/ux编写自己扩展的组件
         第三步：启用ext动态加载的机制，并设置要加载的路径
         第四步：创建类的实例并使用  */
    Ext.Loader.setConfig({
        enabled: true,
        paths:{
            myux: 'extjs/ux'
        }
    });
    Ext.create('extjs.ux.MyWindow').show();

});