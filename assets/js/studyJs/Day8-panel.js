/** @MethodName: Ext.panel.Panel
 * @Description: 面板
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/16/0016  11:04
 *
 */

Ext.onReady(function () {

    var panel = Ext.create('Ext.panel.Panel', {
        title: 'panel面板',
        id: 'panels',
        // renderTo: Ext.get('panel'),
        width: 1000,
        height: 300,
        collapsed: false,
        collapsible: true,
        tbar: [
            {
                text: '查询'
            }
        ],
        bbar: [
            {
                text: '退出'
            }
        ],
        // 工具栏
        tools: [
            {
                id: 'toggle',

            },
            {
                id: 'close'
            },
            {
                id: 'maximize'
            },
            {
              id:'minimize'
            },
            {
                type: 'help',
                handler: function () {
                    // 此处显示帮助的逻辑
                }
            },
            {
                id:'restore'
            },
            {
                id:'pin'
            },
            {
                id:'left'
            },
            {
                id:'right'
            },
            {
                id:'up'
            },
            {
                type:'down'
            },
            {
                id:'plus'
            },
            {
                id:'search'
            },
            {
                id:'print'
            },
            {
                id:'refresh'
            },
            {
                id:'save'
            },
            {
                id:'expand'
            }
        ],
        html:'这是panel的面板体',
        // contentEl:'panel-content',
        // autoLoad: '/Extjs-Study-Coding/index.html',
        // 存放组件
        items:[
            {
                xtype: 'datefield',
                fieldLabel: '出生日期'
            },
            {
                xtype: 'textfield',
                fieldLabel: '文本输入框'
            },
            {
                xtype: 'timefield',
                fieldLabel:'时间选择'
            },
            {
                xtype: 'timefield',
                fieldLabel:'时间选择'
            },
            {
                xtype: 'timefield',
                fieldLabel:'时间选择'
            },
            {
                xtype: 'timefield',
                fieldLabel:'时间选择'
            },
            {
                xtype: 'timefield',
                fieldLabel:'时间选择'
            },
            {
                xtype: 'timefield',
                fieldLabel:'时间选择'
            },
            {
                xtype: 'timefield',
                fieldLabel:'时间选择'
            }
        ],
        autoScroll: true
    });

    var win = Ext.create('Ext.Window', {
        title: '注册panel',
        width: 1020,
        height: 320,
        items: [panel],
        renderTo: Ext.getBody(),
    });

    win.show();
});