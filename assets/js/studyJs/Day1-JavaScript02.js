Ext.onReady(function () {

    // Function 函数

    // 1. function 语句形式
    /*function fun1() {
        alert("fun1...")
    }*/

    // 2. 函数直接量的形式
    /*var  fun2 = function () {
        alert("fun2...")
    };*/

    //  前两种创建函数的主要区别：function语句形式，JavaScript解释器直接会去找，其他的代码就从上往下顺序执行，意思就是function语句作用域提高
    //  第三种构造函数的形式，它具有的作用域与前两种不同，它具有顶级作用域

    // 3. 构造函数形式
    /*var fun3 = new Function(
        'x','y','return x+y;'
    );
    alert(fun3(1,2));*/

    //  arguments对象：每一个函数内部都有一个arguments对象
        //  第一个作用：接收函数的实际参数
    /*function text(x, y) {
        console.log(arguments);
        console.log(arguments.length);
    }
    text(1, 2);*/

        //  第二个作用：通常用于递归操作
        //  arguments.callee -- 表示引用当前函数本身
    /*function fact(number) {
        if (number <= 1) {
            return 1;
        } else {
            return number * arguments.callee(number - 1)
        }
    };
    // alert(fact(3))
    var fact2 = fact;
    fact = null;
    alert(fact2(3))*/

});