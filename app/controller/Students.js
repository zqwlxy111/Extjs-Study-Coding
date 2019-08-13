/**
 * 创建一个Student控制器
 */
Ext.define('Yvan.controller.Students', {
    extend: 'Ext.app.Controller',
    views:[
      'student.List',
        'student.Edit'
    ],
    init: function () { // 初始化 -- 类创建的时候首先触发这个函数
        // console.log("初始化用户，在application启动前触发该事件！")
        console.log("controller init function triggered");
        this.control({
            'studentlist':{
                // 行双击事件，当行被双击的时候就加载editStudent函数
                itemdblclick: this.editStudent
            }
        })
    },
   editStudent:function (grid, record) { // grid触发的事件源 record是绑定的数据
       /*console.log("click");
       console.log(grid);
       console.log(record);*/
       console.log("record.name = " + record.get('name'));
       // 得到文本框组件的对象 然后向下找寻该组件的子组件
       var view = Ext.widget('studentedit');
       // 将record对象里面对应的字段值与form组件的字段值相匹配
       view.down('form').loadRecord(record);
   }
});