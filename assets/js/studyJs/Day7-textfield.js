/** @MethodName: Ext.textField
 * @Description: 表单控件
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/16/0016  15:22
 *
 */

Ext.onReady(function () {

    var login = Ext.create('Ext.form.FormPanel', {
        title: '用户登录',
        id: 'userLogin',
        width: 500,
        height: 270,
        renderTo: Ext.get('login'),
        items:[
            {
                xtype: 'textfield',
                fieldLabel: '用户名',
                name: 'userName',
                id:'userName',
                allowBlank: false,
                blankText:'用户名不能为空',
                emptyText:'请输入用户名',
                msgTarget:'under',
                regex:/^\d{3,5}$/,
                regexText:'用户名长度必须是3-5位的数字！！！'
            },
            {
                xtype: 'textfield',
                fieldLabel: '密码',
                name: 'password',
                id:'password',
                allowBlank: false,
                blankText:'密码不能为空',
                emptyText:'请输入密码',
                msgTarget:'under',
                inputType:'password'
            }
        ],
        buttons:[
            {
                text:'登录'
            },
            {
                text:'取消'
            }
        ]
    });
});