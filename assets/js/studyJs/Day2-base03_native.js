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
    /*var obj = {
        name: 'libinglin',
        age: 20
    };
    var result = Ext.Object.chain(obj);
    // 验证result的属性是否为自身的属性
    alert(result.hasOwnProperty(name));*/

    // Ext.Object.each() -- 迭代一个对象，返回false可以停止迭代
    /*var obj = {
        name: 'libinglin',
        age: 20,
        sex: 'male'
    };
    Ext.Object.each(obj,function (key, value, self) {
        alert(key + ' : ' + value);
        if (key == 'name') {
            return false;   // 停止迭代
        }
    })*/

    // fromQueryString -- 将字符串转换为对象，添加true配置为以递归的形式进行转换
    /*var str = "name = libinglin & age = 20";
    var obj = Ext.Object.fromQueryString(str);
    alert(Ext.encode(obj)); // Ext把对象转换为字符串*/

    // toQueryString -- 将对象转换为查询字符串
    /*    var obj = {
            name: 'libinglin',
            age:20
        };
        alert(Ext.Object.toQueryString(obj));*/

    // Ext.Object.getKey -- 根据value值查找key值，如果有返回key值，如果没有返回null
    /*var Person = {
        name: 'libinglin',
        age:20
    };
    alert(Ext.Object.getKey(Person, 20));*/

    // toQueryObjects -- 将一个name - value对转换为一个对象数组，支持内部结构的转换，对构造查询字符串非常有用。
    /*var obj = {
        name: 'libinglin',
        age: 20,
        fav: {
            fav1: 'sleep',
            fav2: 'play',
            fav3: 'coding'
        }
    };
    var arr1 = Ext.Object.toQueryObjects('user', obj);
    console.log(arr1);
    alert(Ext.encode(arr1));
    // return
    /!*[ {"name": "user", "value": "libinglin"},
        {"name": "user", "value": 20},
        {"name": "user", "value": {"fav1": "sleep", "fav2": "play", "fav3": "coding"}}
       ]*!/
    // 使用递归
    var arr2 = Ext.Object.toQueryObjects('user', obj,true);
    console.log(arr2);
    alert(Ext.encode(arr2));
    // return
    /!*[     {"name":"user[name]","value":"libinglin"},
            {"name":"user[age]","value":20},
            {"name":"user[fav][fav1]","value":"sleep"},
            {"name":"user[fav][fav2]","value":"play"},
            {"name":"user[fav][fav3]","value":"coding"}]*!/*/


    // Ext.Number

    // constrain -- 给定一个范围，如果这个数字在范围内，则返回这个数字，如果这个数字小于范围最小值，则return范围最小值，反之
    // alert(Ext.Number.constrain(5,1,20));

    // randomInt -- 随机产生一个数字
    /*for (let i = 0; i < 5; i++) {
        alert(Ext.Number.randomInt(1, 100));
    }*/

    // toFixed -- 保留小数点后几位
    // alert(Ext.Number.toFixed(3.14454, 2));


    // Ext.String

    // capitalize -- 首字母大写
    // alert(Ext.String.capitalize('asd'));

    // ellipsis -- 字符串截取8个，后三个用...代替
    // alert(Ext.String.ellipsis('www.zqwlxy.cn',8))

    // trim -- 去掉字符串两边的空白字符
    // alert(Ext.String.trim(' asd asd '));

    // Ext.Array

    // Ext.Array.clean() -- 返回一个新数组，去掉空值和null值
    /*var arr = [1, 2, null, ''];
    alert(Ext.Array.clean(arr))*/

    // Ext.Array.difference -- 以第一个数组为目标，第二个数组为条件，过滤掉第一个数组在第二个数组之间的相同项
    /*var arr1 = [1, 2, 3, 4, 5, 6];
    var arr2 = [2, 3, 4];
    alert(Ext.Array.difference(arr1, arr2)); // [1,5,6]*/

    // each -- 迭代循环
    /*var arr = [1, 2, 3, 4, 5];
    Ext.Array.each(arr,function (item) {
        if (item > 3) {
            return false; // 如果返回false，则停止迭代
        }
        alert(item);
    })*/

    // forEach -- 迭代循环，和each不同的是如果返回的是false不会停止这个迭代过程

    // erase -- 移除数组元素
    /*var arr = [1, 2, 3, 43, 5, 6];
    alert(Ext.Array.erase(arr, 2, 3)); // [1,2,6]*/

    // every -- 循环整个数组，数组的每个元素都会执行一次定义的方法，如果都通过，返回true，只要有一个符合定义函数的false，整体返回false
    /*var arr = [1, 2, 3, 4, 5];
    var flag = Ext.Array.every(arr,function (item) {
        if (item == 5) {
            return false;
        }else{
            return true;
        }
    })
    console.log(flag); // false*/

    // filter -- 数组条件过滤（返回的是一个新的数组）
    /*var arr = [1, 2, 3, 5, 3, 2, 123, 2];
    var newArr = Ext.Array.filter(arr,function (item) {
        if (item > 10) {
            return false;
        }else {
            return true;
        }
    })
    alert(newArr);*/

    // include -- 把一个元素插入到数组中，如果这个数组存在则不插入
    /*var arr = [1, 2, 3, 4, 5];
    Ext.Array.include(arr, 20);
    alert(arr);*/

    // unique -- 去除数组的重复项
    /*var arr = [1, 2, 2, 2, 3, 4, 5, 6, 23, 3, 1];
    alert(Ext.Array.unique(arr));*/

    // 利用js对象的特性去掉数组的重复项 -- obj的key是不能重复的
    /*var arr = [1, 2, 2, 2, 3, 4, 5, 6, 23, 3, 1];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true; // 去掉数组的重复项
    }
    var newArr = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            newArr.push(i);
        }
    }
    alert(newArr);*/


    // Ext.Function

    // Ext.Function.alias -- 起别名
    /*var obj = {
        name: 'libinglin',
        say:function () {
            alert(this.name);
        }
    };
    var objSay = Ext.Function.alias(obj, 'say');
    objSay();*/

    // Ext.Function.bind -- 绑定作用域的，相当于call和apply
    /*var name = 'zhuqiuwen';
    var obj = {
        name: 'libinglin',
        age: 20
    }
    Ext.Function.bind(function () {
        alert(this.name);
    },obj)();*/

    // defer -- 延迟执行
    /*function task() {
        alert("执行");
    }
    Ext.Function.defer(task, 3000);*/

    // Ext.Date

    // between -- 返回一个boolean值，如果时间在范围内返回true
    // alert(Ext.Date.between(new Date(2019, 8, 9), new Date(2019, 8, 8), new Date(2039, 8, 9)));

    // format
    // alert(Ext.Date.format(new Date(),'Y-m-d H:i:s'))

    // parse
    // alert(Ext.Date.parse('2019-08-19 21:22:22','Y-m-d H:i:s').toLocaleString());

    // Ext.Error

    // Ext.Error.raise('You are warring')
});