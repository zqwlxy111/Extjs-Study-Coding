Ext.onReady(function () {
    // 普通弹出框
    /*Ext.Msg.alert('我是标题', 'This is 内容', function () {
        console.log(this);
    },this);*/
    // 确认框
    /*Ext.Msg.confirm('我是标题','This is 内容',function (op) {
        // op == yes | no
        if (op == 'yes'){
            alert("yes")
        }else {
            alert("no")
        }
    })*/
    // 输入框
    /*Ext.Msg.prompt('我是标题','请输入',function (op,value) {
        // op == ok | cancel
        if (op == 'ok'){
            alert('ok')
            alert(value) // 输入框输入的值
        }else {
            alert('cancel')
        }
    },this,false,'libingln') // false代表的是是否开启多行*/
    // 等待框
    /*Ext.Msg.wait('waitting a few miniutes','我是标题',{
        interval: 500,          // 非常快地移动! 循环的时间
        duration: 5000,         // 总时长
        increment: 150,           // 执行进度条的次数
        text: 'Updating...',    // 进度条上的文字
        scope: this,
        animate:true,           // 更新渲染时提供动画效果
        fn: function(){
            alert("执行完毕")
        }
    })*/
    // show方法
    /*Ext.Msg.show({
        title: '我是自定义的提示框',
        msg: '请输入内容',
        width: 300,
        buttons: Ext.Msg.YESNOCANCEL,
        multiline: true,
        // fn: saveAddress,
        animateTarget: 'addAddressBtn',
        icon: Ext.Msg.WARNING
    });*/
});