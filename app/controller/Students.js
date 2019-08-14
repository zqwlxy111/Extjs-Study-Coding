/**
 * 创建一个Student控制器
 */
Ext.define('Yvan.controller.Students', {
    extend: 'Ext.app.Controller',
    // 定义这个view
    views: [
        'student.List',
        'student.Edit'
    ],
    // 定义这个store
    stores: [
        'Students'
    ],
    models: [
        'Student'
    ],
    init: function () { // 初始化 -- 类创建的时候首先触发这个函数
        // console.log("初始化用户，在application启动前触发该事件！")
        console.log("controller init function triggered");
        this.control({
            'studentlist': {
                // 行双击事件，当行被双击的时候就加载editStudent函数
                itemdblclick: this.editStudent
            },
            // 还可以这样写
            /*'viewport > studentlist' : {
                // 行双击事件，当行被双击的时候就加载editStudent函数
                itemdblclick: this.editStudent
            }*/
            'studentedit button[action=save]': {
                click: this.updateStudent
            }
        });
    },
    editStudent: function (grid, record) { // grid触发的事件源 record是绑定的数据
        /*console.log("click");
        console.log(grid);
        console.log(record);*/
        console.log("record.name = " + record.get('name'));
        // 得到文本框组件的对象 然后向下找寻该组件的子组件
        var view = Ext.widget('studentedit');
        // 将record对象里面对应的字段值与form组件的字段值相匹配
        view.down('form').loadRecord(record);
    },
    updateStudent: function (button) {
        console.log("click this saveButton");
        var win = button.up('window'),  // 向上寻找window窗口对象
            form = win.down('form'),    // 向下寻找window窗口的form对象
            record = form.getRecord(),  // 得到form对象的record对象，用于修改参数值
            values = form.getValues();  // 得到form对象里面的修改后的values
        record.set(values);             // 设置record对象里面的value值
        win.close();                    // 关闭window窗口

        // 获取这个组件所绑定的store，调用sync同步方法，Extjs会自动判断行为自动调用store里面的api
        this.getStudentsStore().sync();
    }
});