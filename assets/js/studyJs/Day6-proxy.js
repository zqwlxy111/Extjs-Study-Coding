/** @MethodName: proxy
 * @Description: 数据代理
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/11/0011  11:32
 *
 */

Ext.onReady(function () {

    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'name', type: 'auto'},
            {name: 'age', type: 'int'},
            {name: 'email', type: 'auto'}
        ],
        validations: [      // 数据验证
            {type: 'length', field: 'name', min: 2},
            {type: 'age', field: 'age', min: 2,max:20},
        ],
        proxy:{
            type: 'ajax',
            url: 'assets/json/person.json',

        }
    });
    var p = Ext.ModelMgr.getModel('Person');
    p.load(10, {
        scope: this,
        failure: function(record, operation) {
            //do something if the load failed
        },
        success: function(record, operation) {
            //do something if the load succeeded
            console.log(record);
        },
        callback: function(record, operation) {
            //do something whether the load succeeded or failed
        }
    })
});