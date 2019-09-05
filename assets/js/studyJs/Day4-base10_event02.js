/** @MethodName: 高级事件
 * @Description: JavaScript观察者模式
 * @Return: 自定义事件
 * @Author: Yvan
 * @Date: 2019/9/5/0005  14:32
 *
 */

// 1. 由于浏览器他自己能定义内置的事件（click / blur），我们也应该有一个类似浏览器这样的类，这个类自己去内部定义一些事件（自定义事件）
var Observable = function () {
    // 盛放自己所定义的事件类型
    this.events = ['start', 'stop'];
    // 我们应该设计一种数据类型，这种数据类型就可以维护自定义事件类型和相关绑定函数的关系
    // 'start': [fn1, fn2],
    // 'stop': [fn1, fn2]
    this.listeners = {}
};

// 2. 添加新的自定义的事件类型
Observable.prototype.addEvents = function (eventName) {
    this.events.push(eventName);
};

// 3. 为自己的事件类型绑定相应的函数（添加事件监听）
Observable.prototype.addListener = function (eventName,fn) {
    // 做一个容错的处理
    if (this.events.indexOf(eventName) == -1){
        this.addEvents(eventName);
    }
    // 到这一步，必然存在这个事件类型
    var arr = this.listeners[eventName];
    // 如果当前这个函数的数组不存在，那么就要为这个事件类型绑定新添加的函数
    if (!arr) {
        arr = [fn];
    }else {     // 如果存在，当前这个事件类型所对应的函数数组不为空
        if (arr.indexOf(fn) == -1){
            arr.push(fn);
        }
    }
    // 重新维护一下事件类型和所绑定的函数数组的关联关系
    this.listeners[eventName] = arr;

};

// 4. 移除事件监听
Observable.prototype.removeListener = function (eventName, fn) {
    // 判断传入的事件类型在类里面是否被定义
    if (this.events.indexOf(eventName) == -1) {
        return;
    }
    // 到这一步，说明移除的事件类型存在于当前对象
    var arr = this.listeners[eventName];
    if (!arr) {
        return;
    }
    // 到这一步，说明当前事件类型存在这个数组
    // 判断如果当前fn函数在我的函数数组里存在着 就移除
    if (arr.indexOf(fn) != -1){
        arr.splice(arr.indexOf(fn), 1);
    }
};

// 5. 如何让事件触发：就是调用这个事件类型所对应的所有的函数执行即可
Observable.prototype.fireEvent = function (eventName) {
    // 如果当前没有传递事件类型名称或者当前传递的事件类型不存在我的对象里，直接返回
    if (!eventName || this.events.indexOf(eventName) == -1) {
        return;
    }
    // 到这一步，一定存在这个事件
    var arr = this.listeners[eventName];
    if (!arr) {
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        var fn = arr[i];
        fn.call(fn, this);
    }
};

// 6. 起别名，方便使用
Observable.prototype.on = Observable.prototype.addListener;
Observable.prototype.un = Observable.prototype.removeListener;
Observable.prototype.fr = Observable.prototype.fireEvent;

// Observable
var ob = new Observable();      // 被观察者 / 观察者
var fn1 = function () {
    alert("fn1...");
};
ob.on('start', fn1);
var fn2 = function () {
    alert("fn2...");
};
ob.on('stop', fn2);
// 移除监听
ob.un('stop', fn2);
ob.fr('start');
ob.fr('stop');
