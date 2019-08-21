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
        html: '<div id="d1"><span id="sp">我是span的内容</span><div id="d2">我的d2的内容</div></div><input id="inp"/>'
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
    var d2 = Ext.get('d2');
    var inp = Ext.get('inp');
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
     *
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
     *
     * 对齐操作系方法：
     * alignTo：将当前元素对齐到另外一个元素。定位的位置选择是基于所对齐的元素的位置（9个定位点：tl,t,tr,l,c,r,bl,b,br）
     * anchorTo：当窗口调整大小时，将当前元素锚到指定元素并重新调整
     * removeAnchor：移除当前元素的任何锚定位
     *
     * 尺寸大小操作系方法：
     * setHeight：设置元素高度
     * setWidth：设置元素宽度
     * setSize：设置元素大小
     * clip：存储元素当前的overflow设置并裁剪溢出
     * unlip：在clip被调用前将裁剪值（溢出）还原为原始值
     * getDocumentWidth：返回文档宽度
     * getDocumentHeight：返回文档高度
     * getFrameWidth：返回合计了padding和border的宽度
     * getHeight：返回offsetHeight值
     * getWidth：返回offsetWidth值
     * getPadding：返回padding的宽度
     * getSize：返回元素大小
     * getTextWidth:返回文本宽度
     * getViewportHeight:返回窗口的可视高度
     * getViewportWidth:返回窗口的可视宽度
     * getViewSize:返回元素可以用来放置内容的区域大小
     * getBorderWidth:返回边界宽度
     * getComputedWidth:返回计算出来的CSs宽度
     * getComputedHeight:返回计算出来的CSS高度
     * isBorderBox:主要用于检测盒子模型，与IE6、7有关
     *
     * 定位系方法
     * clearPositioning:当文档加载完成后，清理定位回到默认值
     * fromPoint:返回在建瓯的自拍呢的顶层元素
     * getBottom:返回右下角的Y坐标
     * getBox:返回一个包含元素位置的对象，对象包括元素左上角的坐标值、右下角的坐标值、宽度和高度。
     * getCenterXY:返回元素的当前坐标
     * getLeft:返回一个包含元素位置的对象
     * getPositioning:返回一个包含CSS位置属性的对象
     * getRegin:返回元素所在区域
     * getRight:返回元素的右边X坐标
     * getTop:返回元素顶部Y坐标
     * getViewRegion:返回元素的内容区域
     * getX:返回元素当前的X坐标
     * getY:返回元素当前的Y坐标
     * getXY:返回元素当前的XY坐标
     * move:移动元素
     * moveTo: 将元素移动到指定的XY坐标上
     * position:初始化元素的位置
     * setBottom:设置元素的bottom样式
     * setBounds:设置元素的位置和大小
     * setBox:设置元素的位置大小
     * setLeft:设置元素坐标的X坐标
     * setRight:设置元素right的样式值
     * setLeftTop:设置元素左上角坐标
     * setLocation:设置元素位置
     * setTop:设置元素的顶部Y坐标
     * setX、setY、setXY:设置元素的X、Y、XY坐标位置
     * translatePoints:转换元素的页面坐标为CSS的left和top值
     *
     * 滚动系方法：
     * getScroll:返回元素当前滚动条的位置
     * isScrollable:如果元素允许滚动，则返回true
     * scroll:滚动到指定位置
     * scrollIntoView:将元素滚动到指定容器的可视区域
     * scrollTo:将元素滚动到指定的位置
     *
     * 常用事件方法：
     *
     * addKepMap:为元素创建一个KeyMap对象
     * addKeyListener:为KeyMap绑定事件
     *
     * 常用事件：
     * on:绑定事件
     * un:移除事件
     * click:单击事件
     * blur:失去焦点事件
     * focus:获得焦点事件
     *
     * 其他方法：
     * center:使元素居中
     * clean:清理空白的文本节点
     * createShim:为元素创建一个iframe垫片保证选择或其他对象跨域时可见
     * getLoader:返回ElementLoader对象
     * highlight高亮显示特效
     * show、hide显示隐藏元素
     * ghost元素移动特效
     * fadeIn、fadeOut淡入淡出
     * slideIn、slideOut向上向下滑动
     * getValue:如果元素有value属性，返回其值
     * normalize:将CSS属性中的连接符号去掉，例如将“font-size”转为fontsize这样。
     * load:直接调用ElementLoader的load方法为元素加载内容
     * mask:遮罩当前元素，屏蔽用户操作。
     * unmask:移除遮罩
     * repaint:强迫浏览器重新绘画元素
     * serializeForm:序列化为URL编码的字符串
     * update:更新元素的innerHTML属性
     * unselectable:禁用文本选择
     *
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

    // 尺寸、定位

    // alert(Ext.encode(d2.getSize()));

    // getXY
    // alert(Ext.encode(d2.getXY()));

    // moveTo
    // sp.moveTo(200, 222);

    // isScrollable -- 查询是否可以滚动
    // alert(sp.isScrollable()); // return false

    // 为元素添加事件
    // addKeyMap：为元素创建一个KeyMap对象
    /*inp.addKeyMap({ // 传入一个对象  Ext.util.KeyMap ===> class
        target: "inp",
        key: 13, // or Ext.EventObject.ENTER
        ctrl:true,
        fn:function(){
          alert("按住了Ctrl+Enter 。。。 ")
        },
        scope: this
    });*/

    // addKeyListener：为KeyMap绑定事件
    /*inp.addKeyListener({
        key:Ext.EventObject.X,
        ctrl:false
    },function (evt,el,o) {
        console.log(evt);
        console.log(el);
        console.log(o);
        alert("按下了按键 X 。。。 ")
    },this)*/

    // 元素绑定常用事件
    /*sp.on('click',function () {
        alert("sp内容被点击了");
    })*/

    // inp.focus() // 初始化就获得焦点

    // 其他重要且常用的方法
    // center
    // sp.center(d1); // 参数可以不填，不填就是以文档窗口居中

    // getLoader
    var loader = inp.getLoader();   // return ElementLoader对象
    loader.load({           // 该类的配置项 -- 注意传给本方法的任何选项 将会覆盖类的默认值。
        url: 'assets/json/students.json',
        renderer:function (loader,response) {
            // 把对象转换成字符串形式：Ext.encode
            // 把一个字符串转换成JavaScript对象：Ext.decode
            console.log(response);
            var obj = Ext.decode(response.responseText);
            console.log(obj);
            Ext.getDom('inp').value = obj.students[0].name;

        }
    })
});