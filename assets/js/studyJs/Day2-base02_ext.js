/**
 * 这个js主要写的是Ext单体实例对象
 * Ext.js方法详解：
 -Ext.apply&Ext.applyIf
 -Ext.extend
 -typeOf
 -isEmpty、isIterable、isFunction、isArray..…
 -Iterate

 Ext-more.js方法详解
 -getBody
 -getHead
 -getDoc
 -getScrollBarWidth
 -destroy
 */
Ext.onReady(function () {

    // Ext.js
    // Ext.apply() :就是为对象扩展属性或者方法的
    /*var src = {name: 'libinglin', age: 20};             // 源对象
    var config = {name:'zhuqiuwen', sex: 'female'};     // 配置对象
    Ext.apply(src, config);
    // 如果当前对象存在这个属性就不copy，如果不存在就copy
    Ext.applyIf(src, config);
    for (var attr in src) {
        alert(attr + " === " + src[attr]);
    }*/

    // Ext.extend
    // SupClass
    /*Ext.define('Supcls',{
        config:{
            name:'libinglin',
            age:20
        }
    })
    // SubClass
    Ext.define('Subcls',{
        extend: 'Supcls',
        config:{
            sex: 'male'
        }
    })
    var chirld = Ext.create('Subcls');
    alert(chirld.getName());*/

    // Ext.typeOf
    /*var str = 'libinglin';
    var num = 20;
    alert(Ext.typeOf(str));
    alert(Ext.typeOf(num));*/

    // Ext.isArray
    /*var num = 20;
    var arr = [1, 2];
    alert(Ext.isArray(num));
    alert(Ext.isArray(arr));*/

    // Ext.iterate -- 遍历
   /* var arr = [1, 2, 3];
    var objArr = [
        {name: 'libinglin', age: 20},
        {name:'zhuqiuwen',age:24}
    ];
    // 遍历数组
    Ext.iterate(arr, function (item) {
        alert(item);
    });
    // 遍历对象
    Ext.iterate(objArr, function (item) {
        Ext.iterate(item, function (cItemName,cItemVal) {
            alert(cItemName);
            alert(cItemVal);
        });
    });*/

    // Ext.override -- 实例对象类的覆盖
    Ext.define('User',{
        say:function () {
            alert("say ...")
        }
    });
    var user = Ext.create('User');
    user.say();
    Ext.override(user,{
        say:function () {
            alert("say func has change");
        }
    })
    user.say();

});