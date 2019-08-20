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

    /*var d2 = Ext.fly('d1');
    alert(d2.isFly); // 判断是否为享元模式*/

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

    // query -- 是Ext.query 不是Ext.dom.Element.query
    /*var arr = Ext.query('span', 'd1');
    Ext.Array.each(arr, function (item) {
        alert(item.innerHTML);
    });*/

    // select -- Ext.select 返回的都是对象，它的属性elements是元素集合(！！！不要使用id选择器)
    // Ext.dom.CompositeElementLite(HTMLElement) / Ext.dom.CompositeElement(Ext.dom.Element)
    // 参数说明：1 selector 选择器 2 返回的集合对象（false Ext.dom.CompositeElementLite | true Ext.dom.CompositeElement） 3 指定的根节点开始查找
    /*var list = Ext.select('span', false, 'd1');
    console.log(list);
    Ext.Array.each(list.elements,function (el) {
        alert(el.innerHTML);
    })*/

    /** @MethodName: Ext.dom.Element get fly getDom
     * @Description: 操作系最常用的三个方法
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/19/0019  14:17
     * 操作系方法：
     * appendTo：将当前元素追加到指定元素中
     * appendChild: 在当前元素中追加元素
     * createChild: 在元素中插入由DomHelper对象创建的元素
     * insertAfter： 将元素插入到指定元素之
     * insertBefore：将元素插入到指定元素之前
     * insertSibling：在当前元素前或后插入（或创建）元素（同层）
     * insertHtml: 在当前元素内插入html代码
     * remove：移除当前元素
     * replace：使用当前元素替换指定元素
     * replaceWith：使用创建的元素替换指定元素
     * wrap：创建一个元素，并被创建的元素包裹起来
     */

    // appendTo -- 这2个元素必须存在document里
    // sp.appendTo('d2');

    // appendChild
    // sp.appendChild('d2');

    // createChild
    /*sp.createChild({
        tag: 'ol',
        id: 'item1',
        children:[
            {tag:'li',html:'item1'},
            {tag:'li',html:'item2'}
        ]
    })*/

    // insertAfter
    // sp.insertAfter(Ext.get('d2'));

    // insertBefore
    // sp.insertBefore(Ext.get('d2'));

    // insertSibling -- 在当前元素前或后插入（或创建）元素（同层）
    /*sp.insertSibling([
        {
            tag: 'ol',
            id: 'item1',
            children:[
                {tag:'li',html:'item1'},
                {tag:'li',html:'item2'}
            ]
        },
        {
            tag: 'ol',
            id: 'item2',
            children:[
                {tag:'li',html:'item2'},
                {tag:'li',html:'item3'}
            ]
        }
    ])*/

    // insertHtml
    // 参数说明：1 插入的位置，与当前元素的位置关系 - beforeBegin, afterBegin, beforeEnd, afterEnd
    // 2 HTML片断
    // sp.insertHtml('afterEnd','<div>我是被插入的内容</div>')

    // remove
    // sp.remove();

    // replace -- 使用当前元素替换传递进来的元素，被替换的元素被删除
    // sp.replace('d2');

    // replaceWith -- 使用传递进来的元素替换当前的元素，当前的元素将被删除
    // sp.replaceWith('d2');

    // wrap
    // sp.wrap('<h1>我是被包裹的内容</h1>')

    /** @MethodName: Ext.dom.Element get fly getDom
     * @Description: 操作样式系最常用的三个方法
     * @Return:
     * @Author: Yvan
     * @Date: 2019/8/19/0019  14:17
     * 操作样式系方法：
     * addCls:增加css样式到元素,重复的样式会自动过滤
     * applyStyles:设置元素的style属性
     * setStyle:为元素设置样式
     * getStyle:返回元素的当前样式和计算样式
     * getStyleSize:返回元素的样式尺寸
     * setOpacity:设置不透明度
     * clearOpacity:;清理不透明度设置
     * getColor:返回css颜色属性的值,返回值为6位数组的16进制颜色值
     * boxWrap:使用 box. Markup定义的HTML代码包装元素
     * addClsOnClick：当点击该元素的时候添加样式
     * addClsOnOver：当鼠标移动到该元素的时候添加样式
     * getMargin:返回值具有top、left、 right、 bottom属性的对象,属性值为响应的元素margin值。
     * removedCls:删除元素的样式
     * replaceClS:替换元素的样式
     * set:设置元素属性
     * radioCls:为当前元素添加样式,并删除其兄弟节点的元素
     * unituzeBox:将表示margin大小的对象转换为字符串
     */

    // addCls
    // sp.addCls('red');

    // applyStyles
    // sp.applyStyles('color:blue');

    // setStyle
    sp.setStyle('backgroundColor', 'yellow');

    // getStyle
    // alert(sp.getStyle('fontSize'));

    // getStyleSize
    // alert(Ext.encode(sp.getStyleSize()));

    // setOpacity
    // sp.setOpacity('0.8');

    // addClsOnClick
    // sp.addClsOnClick('red')

    // addClsOnOver
    // sp.addClsOnOver('red')

    // getMargin
    // alert(Ext.encode(sp.getMargin()));
    // alert(sp.getMargin('b')) -- r l t b

    // removedCls
    /*sp.addCls('sp222');
    sp.removeCls('sp222');*/

    // replaceClS
    /*sp.addCls('red');
    sp.replaceCls('red','yellow')*/

    //


});