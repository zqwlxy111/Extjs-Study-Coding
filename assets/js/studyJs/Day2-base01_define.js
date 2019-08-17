/**
 * 对于Ext定义一个新的类,那么我们可以想象到,既然是利用 Ext define去
 创建类,那么创建的类一定是Ex所将有的类,不同于传统的 JavaScript创
 建一个类,也就是说我们要对于 define方法的第二个参数 properties配置
 项进行配置,需要找到Ext对于类支持的API并进行配置
 */
/**
 * configs
 extend:用于继承
 - alias:类的别名
 - alternateClassName:备用名,与aas差不多
 - requires:需要使用到的类名数组,在动态加载时会根据该属性去下载
 类,注意需要的类是在当前类之前被加载
 - uses:与 requires类似但是被引用的类可以在该类之后才加载
 - constructor:构造器属性,一般用来初始化类的配置和调用其父类的
 方法
 - mIXIns:混入属性,多继承
 - config:定义类的配置项,会把config里的每个属性加上get和set方法
 - statics:定义静态方法,属性不能被子类继承
 - inheritableStatics:与 statics类似,但是其属性可被子类继承
 - singleton:设置该类为单件模式
 */
Ext.onReady(function () {

    // 在Ext中，如何去定义一个类： Ext.define(className.properties,callback)
    /*Ext.define('Person', {
        // 这里是对于这个类的一些配置信息
        // config属性就是配置当前类的属性内容，并且会加上get和set方法
        config: {
            name: '张三'
        },
        // 自己定义的方法
        say:function () {
            alert("我是方法")
        },
        // 给当前定义的类加一个构造器 -- 意思就是说在通过这个类创建对象的时候可以添加一个对象进去修改这个类创建的对象的原本属性，目的就是初始化信息
        constructor:function (config) {
            var me = this; // this指的是当前的这个对象
            me.initConfig(config)   // 真正的初始化参数
        }

    });*/
    // 实例化这个对象
    /*var yvan = new Person({
        name:'lisi',
        age:'23'
    });
    alert(yvan.getName());
    yvan.say();*/

    /*var p = Ext.create('Person',{
        name:'libinglin',
        age:233
    });
    alert(p.getName())*/

    // extend
    // Sup class
    /*Ext.define('Person', {
        // 这里是对于这个类的一些配置信息
        // config属性就是配置当前类的属性内容，并且会加上get和set方法
        config: {
            name: '张三'
        },
        // 自己定义的方法
        say: function () {
            alert("我是方法")
        },
        // 给当前定义的类加一个构造器 -- 意思就是说在通过这个类创建对象的时候可以添加一个对象进去修改这个类创建的对象的原本属性，目的就是初始化信息
        constructor: function (config) {
            var me = this; // this指的是当前的这个对象
            me.initConfig(config)   // 真正的初始化参数
        }
    });
    // Sub class
    Ext.define('Boy', {
        // 使用Ext的继承
        extend: 'Person',
        config: {
            sex: 'male',
            age: 20
        }
    });
    var b = Ext.create('Boy', {
        name: 'libinglin',
        age: 24
    });
    alert(b.getName() + " --- " + b.getSex())*/

    // javascript: prototype(原型):实现继承
    //Subclass
    /*var Person = function (name) {
        this.name = name
    };
    //alert(Person, prototype constructor);
    //原型象的构造器,默认是当前的类的摸饭
    //Supclass prototype object
    Person.prototype = {
        constructor: Person,
        id: 100
    };
    //Subclass
    var Boy = function (sex, age) {
        this.sex = sex;
        this.age = age;
    };
    //实现原型继承: 继承了父类的模板和父类的原型对象
    Boy.prototype = new Person('李四');
    var b = new Boy('男', 25);
    alert(b.name);
    alert(b.sex)*/

    // define的其他配置项 -- 别名和备用名
    /*Ext.define('User',{
        config:{
            name:'libinglin',
            age:23
        },
        // 起一个别名
        alias:'UU',
        // 起一个备用名字
        alternateClassName:'UUU',
        constructor:function (config) {
            var me = this;
            me.initConfig(config);
        }
    });

    var u = Ext.create('UU');
    alert(u.getName())*/

    // statics 和 inheritableStatics -- 给当前类定义静态方法或属性 statics的子类不可被继承，inheritableStatics的子类可被继承
    /*Ext.define('Person',{
       config:{
           name:'我是父类'
       },
        statics:{
           statics_id:'我是Person的statics的ID，不能被子类继承'
        },
        inheritableStatics:{
           inheritableStatics_id:'我是Person的inheritableStatics的ID，我可以被继承'
        },
        constructor:function (config) {
            var me = this;
            me.initConfig(config);
        }
    });

    // 一定注意！！！实例对象是无法使用静态属性或方法的！
    var p = Ext.create('Person')
    alert(Person.statics_id)
    Ext.define('User',{
        extend:'Person',
        config:{
            age:20
        }
    })*/

    // mixins 混合的配置项，可以多继承的配置
    /*Ext.define('Sing', {
        canSing: function () {
            alert("canSing ...")
        }
    })
    Ext.define('Say', {
        canSay: function () {
            alert("canSay ...")
        }
    })
    Ext.define('Person', {
        mixins: {
            sing: 'Sing',
            say: 'Say'
        },
        constructor: function (config) {
            var me = this;
            me.initConfig(config);
        }
    })
    var girl = Ext.create('Person');
    girl.canSay();
    girl.canSing();*/

    // requires 和 uses 以及 singleton
    /*Ext.define('MyComponent', {
        // 可能需要EXT或者是其他类的支持
        // requires加载需要的类时机是：当前类初始化之前加载
        // requires: ['Ext.window.Window','Ext.button.Button']
        // uses加载需要的类时机是：当前类初始化后加载
        // uses:['Ext.form.Panel','Ext.grid.Panel']
        // singleton:true // 当前的类就被当做为一个单例对象
    });*/
});