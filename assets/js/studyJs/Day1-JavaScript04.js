/*
使用ison对象( JavaScript object Notation)
S对象的特性
对于s来说son对象非常的重要,我们要学会如何操作json对象
·面向对象的概念
如何定义一个类、如何实例化对象、如何扩展对象(原型 prototype
单体模式:简单单体、闭包单体、惰性单体、分支单体
对象的定义其他方式(工厂模型、稳妥对象、聚合对象)
原型的使用、原型链
原型的继承(多种方式实现:组合继承、借用构造函数继承、混合继
承、掺元类等)
链式编程
javascript契约书:接口(注解法、属性检测法、鸭式辨型法)
·设计模式:如果能够掌握JS的设计模式,我相信在以后的Ext学习中,慢
慢的研读,体会Ext底层代码的设计,是非常有帮助的。*/
Ext.onReady(function () {
    var obj = {name:"libinglin",age:23};
    // var obj = new Object();
    obj.sex = 'male';
    obj.age = 25;
    delete obj.name;        // 删除对象的属性和方法
    console.log(obj);

    //  枚举对象内置属性的循环
    for (var attr in obj){
        alert(attr+':'+obj[attr]);
    }

    var Person = function () {
        this.name = "libinglin";
        this._age = 12;
        this.getAge = function () {
            return this._age;
        };
        this.setAge = function (age) {
            this._age = age;
        }
    };
    //  原型对象的构造器总是指向当前对象的模板
    Person.prototype = {
        id:1
    };

    var li = new Person();
    alert(li.id)
});
