/** @MethodName: Ext.number
 * @Description: 数字组件
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/16/0016  17:37
 *
 */

Ext.onReady(function () {

    var number = Ext.create('Ext.form.field.Number', {
        fieldLabel: '年龄',
        step: 1,

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
                hideTrigger:true,   // 隐藏微调
                allowDecimals:false,    // 是否允许小数
                maxValue:120,
                maxText: '年龄不能超过120',
                minValue:0,
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
                handler:function (obj) {
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
                columns:2,
                fieldLabel: '性别',
                items:[
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
                columns:3,
                fieldLabel: '爱好',
                items:[
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
            }
        ],
        buttons: [
            {
                text: '保存'
            },
            {
                text: '取消'
            }
        ]
    });
});