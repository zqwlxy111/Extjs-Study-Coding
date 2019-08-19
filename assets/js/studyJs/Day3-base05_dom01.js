/*
Ext中使用了三个核心的工具类对我们掌握的DOM进行了完美的封装,
oK,请记住他们的名字:
Ext.Element(几乎对DOM的一切进行了彻底封装)
Ext.DomHelper(嗯,他是一个强大的操控U界面的工具类)
Ext.DomQuery(用来进行DM节点查询)
 */

Ext.onReady(function () {

    // Ext.dom.Element

    /**
     * 获取元素的总结
     Ext.get比较消耗内存,尽量避免使用
     Ext.fly虽然比较省内存,但是只能被使用一次
     Ext.getDom非常适合直接获取页面元素,并返回的就是DOM元素,如果你想操作
     DoM元素的属性,那这个方法是最好不过的咯
     */


    /**
     * Ext.get
     * 使用了缓存机制来提升获取DOM节点的效率 返回的是Ext.Element (操作element元素使用dom对象)
     * get方法描述： 首先去Ext.cache缓存里去查找，如果缓存没有，那再去页面查找
     */
    /*var d1 = Ext.get('d1');
    console.log(d1);
    alert(d1.dom.innerHTML);*/

    /**
     * Ext.fly
     * 使用享元模式来提升效率
     * 返回的也是fly对象可以理解成为返回的就是Ext封装好的Ext.Element对象
     * 注意点：由于内部使用了享元模式，所以只适合一次操作，意思就是拿到一次就开始操作，不要统一拿到统一操作
     */
    /*var d2 = Ext.fly('d2');
    d2.dom.innerHTML = 'QQQ';
    var d3 = Ext.fly('d3');
    d3.dom.innerHTML = 'WWW';*/

    /**
     * Ext.getDom
     * 返回的就是一个原生的html Dom
     */
    /*var d3 = Ext.getDom('d3');
    d3.innerHTML = "原生Html Dom";*/

});