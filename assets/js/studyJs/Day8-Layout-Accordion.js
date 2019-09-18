/** @MethodName: Accordion
 * @Description: Ext Accordion布局
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/18/0018  11:00
 *
 */

Ext.onReady(function () {

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            children: [
                {
                    text: "用户管理", expanded: true, children:
                        [
                            {text: "添加用户", leaf: true},
                            {text: "修改用户", leaf: true},
                            {text: "删除用户", leaf: true},
                            {text: "查询用户", leaf: true}
                        ]
                },
            ]
        }
    });

    var autoPanel = Ext.create('Ext.panel.Panel', {
        title: 'auto面板布局',
        width: 180,
        height: 300,
        layout: {
            type: 'accordion',
            activeOnTop: false,       // 是否总是使展开的面板处于顶端
        },
        items: [
            {
                xtype: 'panel',
                title: '用户管理',
                items: [
                    {
                        xtype: 'treepanel',
                        border: 0,
                        store: store,
                        rootVisible: false,
                    }
                ]
            },
            {
                xtype: 'panel',
                title: '成绩管理',
                items: [
                    {
                        xtype: 'treepanel',
                        border: 0,
                        root: {
                            text: '成绩管理',
                            expanded:true,
                            children: [
                                {
                                    text: '查询成绩', expanded: true, children: [
                                        {text: 'A', leaf: true},
                                        {text: 'B', leaf: true}
                                    ]
                                },
                                {text: '删除成绩', leaf: true}
                            ]
                        },
                        // rootVisible: false,
                    }
                ]
            },
            {
                xtype: 'panel',
                title: '课程管理',
                items: [
                    {
                        xtype: 'treepanel',
                        border: 0,
                        root: {
                            text: '课程管理',
                            expanded:true,
                            children: [
                                {
                                    text: '查询课程', expanded: true, children: [
                                        {text: 'A', leaf: true},
                                        {text: 'B', leaf: true}
                                    ]
                                },
                                {text: '删除课程', leaf: true}
                            ]
                        },
                        // rootVisible: false,
                    }
                ]
            },
            {
                xtype: 'panel',
                title: '日志管理',
                iconCls: 'createFile',
                items: [
                    {
                        xtype: 'treepanel',
                        border: 0,
                        root: {
                            text: '日志管理',
                            expanded:true,
                            children: [
                                {
                                    text: '查询日志', icon: '/Extjs-Study-Coding/assets/img/add.png',expanded: true, children: [
                                        {text: 'A', leaf: true},
                                        {text: 'B', leaf: true}
                                    ]
                                },
                                {text: '删除日志', leaf: true}
                            ]
                        },
                        // rootVisible: false,
                    }
                ]
            }
        ],
        renderTo: Ext.getBody()
    });

});