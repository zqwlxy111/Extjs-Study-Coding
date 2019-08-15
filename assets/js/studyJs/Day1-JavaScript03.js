//  this关键字使用
//  this关键字总是指向调用者，谁调用函数，this就指向谁

/*
var x = 100;
function test() {
    alert(this.x)
}
// test.x = 10;
// alert(test.x)
test();*/

//  call apply的使用 -- 主要应用于框架底层，用于绑定函数的执行环境/作用域
/*
var color = 'red';
var obj = {color: 'blue'};

function showColor(x, y) {
    alert(this.color);
}

//  call apply 绑定一个函数，到你指定的作用域内执行
//  call和apply的区别在于call传递的参数直接传递，apply传递的参数是一个数组形式
var x = null, y = null;
showColor.call(window, x, y);   //  指定到window下的作用域
showColor.call(obj, x, y);      //  指定到obj下的作用域
showColor.apply(obj, [x, y]);      //  指定到obj下的作用域*/

//  块的概念
/*
function test() {
    for (var i = 1; i <= 5; i++) {
        alert(i)
    }
    alert(i);
}
test();     // i == 6
//  解决方案
function test2() {
    //  用小括号包裹起来，形成一个块级作用域
    (function () {
        for (var i = 1; i <= 5; i++) {
            alert(i)
        }
    })();
    alert(i);
}
test2();*/

//  闭包：执行环境，作用域链，js垃圾回收
//  函数碰到return直接返回，如果没有return，返回结果undefined
//  在JavaScript语言里：不提倡使用全局变量（1. 不安全 2. 做变量搜索查找的时候效率比较低）
/*function test() {
    return function () {
        alert("我是闭包体代码")
    }
}
var f = test();
f();
//  经典闭包案例
var inp = (function(){
    var i = 0;
    return {
        getCount:function () {
            alert(++i);
        }
    }
})();
var timeS = setInterval('inp.getCount()',500);*/
