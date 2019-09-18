/** @MethodName: Auto
 * @Description: Ext Auto布局
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/18/0018  11:00
 *
 */

Ext.onReady(function () {

    var autoPanel = Ext.create('Ext.panel.Panel', {
        title: 'auto面板布局',
        width:400,
        height:300,
        layout: 'auto',
        items:[
            {
                title: '面板1',
                html: '面板1',
            },
            {
                title: '面板2',
                html: '面板2'
            },
            {
                title: '面板3',
                html: '面板3'
            },
            {
                title: '面板4',
                html: '面板4'
            }
        ],
        renderTo:Ext.getBody()
    });

});