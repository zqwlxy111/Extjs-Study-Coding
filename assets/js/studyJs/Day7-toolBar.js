/** @MethodName: Ext.ToolBar
 * @Description: 工具栏
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/16/0016  11:04
 *
 */

Ext.onReady(function () {

    var tool = Ext.create('Ext.toolbar.Toolbar', {
        renderTo: Ext.getBody(),
        width: '100%'
    });
    // toolBar 添加属性配置
    tool.add([
        {
            text: '新建文件',
            handler: btnClick,
            iconCls: 'createFile'
        }, {
            text: '删除文件',
            handler: btnClick,
            iconCls: 'deleteFile'
        }, {
            text: '保存文件',
            handler: btnClick,
            iconCls: 'saveFile'
        },
        '-',
        {
            xtype: 'textfield',
            hideLabel: true,
            width: 300
        },
        '->',
        '<a href="http://www.zqwlxy.cn">点击跳转到Yvan官网</a>\n',
        'Yvan以后会很强大'
    ]);

    function btnClick(btn) {
        alert(btn.text)
    }
    // 启用工具栏
    Ext.get('enable').on('click',function () {
        tool.enable();
    });
    // 禁用工具栏
    Ext.get('disable').on('click',function () {
        tool.disable();
    })
});