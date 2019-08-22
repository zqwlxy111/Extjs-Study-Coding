/** @MethodName: DomHelper
 * @Description: 元素生成器
 * @Return:
 * @Author: Yvan
 * @Date: 2019/8/22/0022  14:14
 * 在创建元素时用到的规范对象. 此对象的属性被认为是元素属性， 除了以下4种特殊属性:
 tag - 元素的标签名.
 children or cn - 被创建和可链接的同种元素的定义对象的数组. 其可以随你愿意嵌套多深的级次.
 cls - 元素的class属性. 根据DomHepler使用的是fragments还是DOM， 决定该属性是以HTML片段中的"class"属性为结束，还是一个DOM节点的类名为结束.
 html - 元素的innerHTML.
 */
Ext.onReady(function () {

    Ext.create('Ext.panel.Panel', {
        title: 'DomHelper - 元素生成器的使用',
        width: '100%',
        height: 400,
        renderTo: Ext.getBody(),
        html: '<div id="d1">我是d1</div>'
    });

    //createHtml或markup方法
    /***
     * return String
     * 配置项说明：
     * 1. tag 元素的名称
     * children/cn 表示子元素
     * cls 表示样式
     * html 文本内容
     */
    /*var chtml1 = Ext.DomHelper.createHtml({
        tag: 'ol',
        cn:[
            {tag:'li', html: 'item1'},
            {tag:'li', html: 'item2'}
        ],
        cls: 'yvan',
        // html:'这是被helper生成的html'
    });
    var chtml2 = Ext.DomHelper.createHtml({
        tag: 'div',
        children:[
            {tag:'a', html: 'yvan1',href:'http://www.zqwlxy.cn'},
            {tag:'input', value:'点击',type:'button'}
        ],
        cls: 'yvan',
        // html:'这是被helper生成的html'
    });
    Ext.DomHelper.append('d1', chtml2);*/

    //createDom方法(生成原生的dom节点，不推荐使用)
    /*var dom = Ext.DomHelper.createDom({
        tag: 'div',
        html: '我是普通的div'
    })
    console.log(dom.nodeName);*/

    //append方法
    /*Ext.DomHelper.append('d1',{
        tag: 'ul',
        cn: [
            {tag: 'li', html: '111'},
            {tag:'li', html: '222'}
        ]
    });*/

    //insertHtml方法 -- 这个方法就是为了操作原生节点的
    /***
     * 参数说明：
     * 1. where -- 插入到哪
     * 2. el -- 要插入的元素
     * 3. html -- html代码
     * 使用不同的where值插入到元素的如下位置：
     beforeBegin: <HERE><div>Contents</div>
     afterBegin: <div><HERE>Contents</div>
     beforeEnd: <div>Contents<HERE></div>
     afterEnd: <div>Contents</div><HERE>
     */
    // Ext.DomHelper.insertHtml('beforeBegin', Ext.getDom('d1'), '<h1>我是标题</h1>');

    //overwrite方法
    /*Ext.DomHelper.overwrite('d1', {
        tag: 'span',
        cls: 'olcls',
        html:'我是覆盖的span的内容'
    }, true);*/

    //createTemplate方法
    /*var tp = Ext.DomHelper.createTemplate('<h1>{text}</h1><h2>{text2}</h2>');
    tp.overwrite('d1',{
        text: '我是第一个被替换的内容',
        text2:'我是第二个被替换的内容'
    })*/

    //applyStyles方法
    Ext.DomHelper.applyStyles(Ext.getDom('d1'),{
        color: 'yellow',
        backgroundColor: 'red'
    })

});