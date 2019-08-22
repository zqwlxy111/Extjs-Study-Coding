/** @MethodName: Ext.dom.Query
 * @Description:
 * @Return:
 * @Author: Yvan
 * @Date: 2019/8/22/0022  15:55
 * 注意问题：这个类下的所有方法全部使用的是原生的HTMLElement对象，不是Ext封装好的Dom对象
 * E[foo] 拥有一个属性"foo"
 E[foo=bar] 有一个属性"foo"等价于"bar"
 E[foo^=bar] 有一个属性"foo"是由"bar"开头的
 E[foo$=bar] 有一个属性"foo"是以"bar"结尾的
 E[foo*=bar] 有一个属性"foo"包含子字符串"bar"
 E[foo%=2] 有一个属性"foo"能被2整除
 E[foo!=bar] 有一个属性"foo"不等价于"bar"

 * 任意元素
 E 带一个E标签的元素
 E F E派生的元素中所有带F标签的
 E > F or E/F E直接子元素中所有带F标签的
 E + F 带有E标签的元素后跟着的带F标签的所有元素
 E ~ F 带有E标签的兄弟元素后跟着的带F标签的所有元素
 */
Ext.onReady(function () {

    // Ext.dom.Query.select 就是 Ext.Query的方法
    Ext.create('Ext.panel.Panel', {
        title: 'Ext.dom.Query示例',
        width: '100%',
        height: 400,
        renderTo: Ext.getBody(),
        html: '<div id="d1"><span id="sp">我是第一个span的内容</span><span class="red">我是第二个span的内容</span><div id="d2">我的d2的内容</div></div>'
    });

    // Ext.DomQuery.select  -- 选择器
    // 简单选择符
    // Ext.DomQuery 返回的是一个原生的htmlElement数组！！！！！
    // var arr = Ext.query('span','d1'); // 后面的参数是指定的查找范围
    // var arr = Ext.query('#d1');
    // var arr = Ext.query('.red');
    // 以上三个选择器可以传递第二个参数root指定查找范围

    // 复杂选择符
    // var arr = Ext.query('div[id=d1] span');
    // var arr = Ext.query('*');
    // var arr = Ext.query('div[id*=d1]'); // *= 代表包含
    // var arr = Ext.query('div[id=d1]>span'); // or E/F
    // var arr = Ext.query('span[id=sp]:first-child');
    /*Ext.Array.each(arr, function (item) {
        console.log(item);
        alert(item.innerHTML);
    })*/

    // Ext.DomQuery其他方法
    // Ext.DomQuery.compile -- 将选择符或xpath编译成一个可重复使用的函数
    /**
     * compile方法返回的函数调用后指的是在调用后的htmlElement对象下查找compile的节点
     */
    /*var fn = Ext.DomQuery.compile('span');
    alert(fn);
    var arr = fn(Ext.getDom('d1'));
    Ext.Array.each(arr,function (item) {
        console.log(item);
    })*/

    // Ext.DomQuery.filter  -- 使用简单选择符过滤元素数组
    /**
     * 从一个简单选择器数组里面过滤需要的数组
     * 参数说明：三个必须传递
     * 1. el : HTMLElement[] 一个需要过滤的元素数组
     * 2. selector : String 需要测试的简单选择器
     * 3. nonMatches : Boolean 设为真, 则返回没有匹配的元素代替匹配的元素，false返回条件查询的元素
     * return -> HTMLElement[] 匹配选择器的一个DOM元素数组. 若没有匹配的，则返回一个空数组.
     */
        // var arr = document.getElementsByTagName('div');
    /*var arr = Ext.DomQuery.select('div');
    var arr1 = Ext.DomQuery.filter(arr, 'div[id=d2]', true);
    Ext.Array.each(arr1, function (item) {
        console.log(item);
    })*/

    // Ext.DomQuery.is -- 判断元素是否匹配简单选择符,返回一个boolean
    alert(Ext.DomQuery.is(Ext.getDom('d1'), 'div[id=d1]'));

    // Ext.DomQuery.jsSelect -- 根据选择符选择元素 (和Ext.DomQuery.select方法差不多)

});