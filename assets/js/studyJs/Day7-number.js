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
        height: 270,
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
                regex: /^\d{3,5}$/,
                regexText: '用户名长度必须是3-5位的数字！！！'
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
                allowBlank: false,
                blankText: '年龄不能为空',
                emptyText: '请输入年龄',
                msgTarget: 'under',
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