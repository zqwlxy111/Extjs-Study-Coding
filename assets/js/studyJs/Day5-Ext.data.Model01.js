/** @MethodName: Ext.data.Model
 * @Description: 数据模型分为三个大部分：model proxy store
 * @Return:
 * @Author: Yvan
 * @Date: 2019/9/10/0010  17:26
 *
 */

Ext.onReady(function () {
    // 1. 利用define创建模型类
    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'name', type: 'auto'},
            {name: 'age', type: 'int'},
            {name: 'email', type: 'auto'}
        ]
    });
    // MVC模式中model一定是M层
    // 2. 利用regModel创建模型类
    Ext.regModel('User', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'name', type: 'auto'},
            {name: 'age', type: 'int'},
            {name: 'email', type: 'auto'}
        ]
    })
    // 实例化Person类
    // 1. new 关键字
    var p = new Person({
        name: 'yvan',
        age: 26,
        email: 'yvan.libinglin@gmail.com'
    });
    alert(p.get('name'));
    // 2.
    // 3.
});