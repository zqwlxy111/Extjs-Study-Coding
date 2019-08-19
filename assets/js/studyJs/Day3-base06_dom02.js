/** @MethodName: Ext.Element
 * @Description: TODO
 * @Return: null
 * @Author: Yvan
 * @Date: 2019/8/19/0019  14:12
 * Ext.Element提供了181个方法,嗯,还没完,只是在41版本中是这样,最
 新的42版本貌似又增加了新方法,可谓是相当丰富给力。那么根据操作类
 型基本可以分为查询系、DoM操作系、样式操作系、对齐、尺寸、定位
 拖放、滚动、键盘、动画系等方法供开发人员使用。
 * 注意！！！！！必须是Ext封装好的dom对象，不是JavaScript原生的dom对象
 */
Ext.onReady(function () {

    Ext.create('Ext.panel.Panel', {
        title: '我的面板',
        width: '100%',
        height: 400,
        renderTo: Ext.getBody(),
        html: '<div id="d1"><span id="sp">我是span的内容</span><div id="d2">我的d2的内容</div></div>'
    });


    /** @MethodName: Ext.dom.Element get fly getDom
     * @Description: 查询系最常用的三个方法
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/19/0019  14:17
     * 查询系方法：
     * contains：判断元素是否包含另一个元素
     * child: 从元素的直接子元素中选择与选择符匹配的元素
     * down: 选择与选择符匹配的元素的子元素
     * first： 选择元素的第一个子元素
     * findParent：查找与简单选择符匹配的元素的父元素
     * findParentNode || up：查找与简单选择符匹配的元素的父元素
     * is：判断元素是否匹配选择符
     * last：选择元素的最后一个子元素
     * next：选择元素同层的下一个子元素
     * prew：选择元素同层的上一个子元素
     * parent：返回元素的父元素
     * query：根据选择符获取元素
     * select：根据选择符获取元素集合
     *
     */

    var d1 = Ext.get('d1');
    var sp = Ext.get('sp');

    // contains
    // alert(d1.contains(sp));

    // child -- 返回的知识第一个元素，如果添加true属性，那么返回的就是JavaScript原生的dom对象
    // console.log(d1.child('span')); // return Ext.dom.Element
    // alert(d1.child('span').dom.innerHTML);

    // down
    /*var ch1 = d1.down('#d2');
    alert(ch1.dom.innerHTML);*/

    // first
    /*var ch1 = d1.first();
    alert(ch1.dom.innerHTML);*/

    // findParent -- 返回的是原生的htmlElement
    /*var pa1 = sp.findParent('div');
    alert(pa1.innerHTML);*/

    // is
    // alert(d1.is('div'));

    // next
    /*var next = sp.next();
    alert(next.dom.innerHTML);*/

    // parent
    /*var parent = sp.parent();
    alert(parent.dom.innerHTML);*/

    // query


});