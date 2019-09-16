/** @MethodName: Ext.menu.Menu
 * @Description: 菜单栏
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/16/0016  14:29
 *
 */

Ext.onReady(function () {
    // 新建工具栏对象
    var tool = Ext.create('Ext.toolbar.Toolbar', {
        renderTo: Ext.getBody(),
        width: '100%'
    });
    // 新建菜单对象
    var colorPicker = Ext.create('Ext.menu.ColorPicker', {
        value: '000000'
    });
    var dateMenu = Ext.create('Ext.menu.DatePicker', {
        handler: function(dp, date){
            Ext.Msg.alert('Date Selected', 'You selected ' + Ext.Date.format(date, 'M j, Y'));
        }
    });
    var submenu1 = Ext.create('Ext.menu.Menu', {
        shadow: 'drop',
        items: [
            {text: '新建子word文件', menu: colorPicker},
            {text: '新建子excel文件', menu: dateMenu},
            {text: '新建子ppt文件'}
        ]
    });
    var menu1 = Ext.create('Ext.menu.Menu', {
        shadow: 'drop',
        items: [
            {
                text: '新建word文件',
                menu: submenu1,
                iconCls: 'createFile'
            },
            {
                text: '新建excel文件', iconCls: 'createFile'
            },
            {
                text: '新建ppt文件', iconCls: 'createFile'
            }
        ]
    });
    var menu2 = Ext.create('Ext.menu.Menu', {
        shadow: 'drop',
        items: [
            {text: '删除word文件'},
            {text: '删除excel文件'},
            {text: '删除ppt文件'}
        ]
    });
    var menu3 = Ext.create('Ext.menu.Menu', {
        shadow: 'drop',
        items: [
            {text: '保存word文件'},
            {text: '保存excel文件'},
            {text: '保存ppt文件'}
        ]
    });
    // toolBar 添加属性配置
    tool.add([
        {
            text: '新建文件',
            // handler: btnClick,
            iconCls: 'createFile',
            menu: menu1
        }, {
            text: '删除文件',
            handler: btnClick,
            iconCls: 'deleteFile',
            menu: menu2
        }, {
            text: '保存文件',
            handler: btnClick,
            iconCls: 'saveFile',
            menu: menu3
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
        // alert(btn.text)
    }

    // 启用工具栏
    Ext.get('enable').on('click', function () {
        tool.enable();
    });
    // 禁用工具栏
    Ext.get('disable').on('click', function () {
        tool.disable();
    })
});