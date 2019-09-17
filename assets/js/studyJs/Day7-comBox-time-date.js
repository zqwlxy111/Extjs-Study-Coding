/** @MethodName: Ext.comBox-time-date
 * @Description: 下拉组件 -- 时间选择 -- time选择
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/16/0016  17:37
 *
 */

Ext.onReady(function () {

    // 注册一个数据模型
    Ext.define('birthplaceModel', {
        extend: 'Ext.data.Model',
        fields: [
            {
                name: 'birthplaceName'
            },
            {
                name: 'birthplaceValue'
            }
        ]
    });
    // 定义combo的数据源
    var birthplaceStore = Ext.create('Ext.data.Store', {
        model: 'birthplaceModel',
        data: [
            {
                birthplaceName: '云南省',
                birthplaceValue: '1'
            },
            {
                birthplaceName: '广西省',
                birthplaceValue: '2'
            },
            {
                birthplaceName: '广东省',
                birthplaceValue: '3'
            }
        ]
    });
    var login = Ext.create('Ext.form.FormPanel', {
        title: '用户注册',
        id: 'userRegister',
        width: 500,
        height: 570,
        renderTo: Ext.get('login'),
        items: [
            {
                xtype: 'textfield',
                fieldLabel: '用户名',
                name: 'userName',
                id: 'userName',
                allowBlank: false,
                blankText: '用户名不能为空',
                emptyText: '请输入用户名',
                msgTarget: 'under',
                // regex: /^\d{3,5}$/,
                // regexText: '用户名长度必须是3-5位的数字！！！'
            },
            {
                xtype: 'textfield',
                fieldLabel: '密码',
                name: 'password',
                id: 'password',
                allowBlank: false,
                blankText: '密码不能为空',
                emptyText: '请输入密码',
                msgTarget: 'under',
                inputType: 'password'
            },
            {
                xtype: 'numberfield',
                fieldLabel: '年龄',
                name: 'userAge',
                id: 'userAge',
                hideTrigger: true,   // 隐藏微调
                allowDecimals: false,    // 是否允许小数
                maxValue: 120,
                maxText: '年龄不能超过120',
                minValue: 0,
                minText: '年龄不能小于0',
                allowBlank: false,
                blankText: '年龄不能为空',
                emptyText: '请输入年龄',
                msgTarget: 'under',
            },
            {
                xtype: 'radio',
                boxLabel: '男',
                inputValue: 'male',

            },
            {
                xtype: 'radio',
                boxLabel: '女',
                inputValue: 'female',
                handler: function (obj) {
                    console.log(obj.getValue());
                }
            },
            {
                xtype: 'checkboxfield',
                boxLabel: '足球',
                inputValue: 'football',

            },
            {
                xtype: 'checkboxfield',
                boxLabel: '篮球',
                inputValue: 'basketball',

            },
            {
                xtype: 'radiogroup',
                columns: 2,
                fieldLabel: '性别',
                items: [
                    {
                        boxLabel: '男',
                        name: 'sex',
                        inputValue: 'male'
                    },
                    {
                        boxLabel: '女',
                        name: 'sex',
                        inputValue: 'female'
                    }
                ]
            },
            {
                xtype: 'checkboxgroup',
                columns: 3,
                fieldLabel: '爱好',
                items: [
                    {
                        boxLabel: '足球',
                        name: 'ball',
                        inputValue: 'football'
                    },
                    {
                        boxLabel: '篮球',
                        name: 'ball',
                        inputValue: 'basketball'
                    },
                    {
                        boxLabel: '乒乓球',
                        name: 'ball',
                        inputValue: 'pongBall'
                    }
                ]
            },
            {
                xtype: 'combo',
                id: 'Birthplace',
                store: birthplaceStore,
                fieldLabel: '选择籍贯',
                queryMode: 'local', // 指定是从哪里获取的数据，local为本地，remote为远程读取数据
                triggerAction: 'all',
                displayField: 'birthplaceName',      // 显示下拉框的字段名
                valueField: 'birthplaceValue',        // 组合框的值字段
                forceSelection:false,                  // 是否允许用户自行输入  false -- 允许  true -- 不允许
                listeners:{
                    click:{
                        element: 'el',
                        fn:function (res) {
                            console.log(res);
                        }
                    }
                }
            }
        ],
        buttons: [
            {
                text: '保存',
                handler:function () {
                    console.log(Ext.getCmp('Birthplace').getValue());
                }
            },
            {
                text: '取消'
            }
        ]
    });

});