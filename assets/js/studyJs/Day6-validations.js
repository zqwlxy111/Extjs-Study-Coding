/** @MethodName: validations
 * @Description: 数据验证
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/11/0011  10:36
 *
 */

Ext.onReady(function () {
    // 扩展自定义新的验证方法
    Ext.apply(Ext.data.validations, {
        age:function (config, value) {
            if (config.min >= value && config.max <= value) {
                return true;
            } else {
                return false;
            }
        },
        ageMessage:"age's length is too low"
    });
    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'name', type: 'auto'},
            {name: 'age', type: 'int'},
            {name: 'email', type: 'auto'}
        ],
        validations: [
            {type: 'length', field: 'name', min: 2},
            {type: 'age', field: 'age', min: 2,max:20},
        ]
    });
    var p = Ext.create('Person', {
        name: 'y',
        age: 26,
        email: 'yvan.libinglin@gmail.com'
    });
    var errors = p.validate();
    errors.each(function (e) {
        alert(e.field+' '+e.message);
    })
});