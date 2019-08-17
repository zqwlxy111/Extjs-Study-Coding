/**
 * ExtJS扩展原生Javascript
     -Ext.Object
     -Ext.Number
     -Ext.String
     -Ext.Array
     -Ext.Function
     -Ext.Date
     -Ext.Error
 */
Ext.onReady(function () {

    // Ext对于原生JavaScript对象的扩展
    // Ext.Object
    // Ext.Object.chain() -- 返回一个原型对象,把当前传入的对象作为新创建的对象的原型
    var obj = {
        name: 'libinglin',
        age: 20
    };
    var result = Ext.Object.chain(obj);
    // 验证result的属性是否为自身的属性
    alert(result.hasOwnProperty(name));
});