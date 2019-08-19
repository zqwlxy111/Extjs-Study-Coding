// 注意define的命名，一定要严格按照包层次路径去点写
Ext.define('extjs.ux.MyWindow', {
    extend: 'Ext.window.Window',  // 继承Ext的window类
    title: '我是动态加载进来的组件',
    height: 400,
    width: 300,
    constrain: true,
    modal: true,
    html: '我是窗体的内容！！！',
    renderTo: Ext.getBody()
});