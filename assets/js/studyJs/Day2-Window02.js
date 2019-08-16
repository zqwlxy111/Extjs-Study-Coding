Ext.onReady(function () {

    //  exam001 -- 点击一个按钮，打开一个窗体window重复创建的问题
    /*var btn = Ext.get('Yvan');      // 这个元素是经过Ext包装的Dom对象，这个不是一个真正的dom对象 alert(btn.dom.value)
    btn.on('click', function () {
        if (!Ext.getCmp(yvanWindow)) {
            var yvanWindow = Ext.create('Ext.window.Window', {
                id: 'yvanWindow',   // 如果你给组件一个id，那么这个组件就会被Ext所管理
                title: "window",
                width: 200,
                height: 300,
                renderTo: Ext.getBody()
            }).show()
        }
    });*/

    var win = Ext.create('Ext.window.Window', {
        // id: 'yvanWindow',   // 如果你给组件一个id，那么这个组件就会被Ext所管理
        title: "window",
        width: 200,
        height: 300,
        renderTo: Ext.getBody(),
        closeAction: 'hide'     // 默认是destroy
    });
    Ext.get('Yvan').on('click',function () {
        win.show()
    })

});