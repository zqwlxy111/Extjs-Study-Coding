/**
 * 创建一个Student控制器
 */
Ext.define('Yvan.controller.Students', {
    extend: 'Ext.app.Controller',
    views:[
      'student.List'
    ],
    init: function () { // 初始化 -- 类创建的时候首先触发这个函数
        // console.log("初始化用户，在application启动前触发该事件！")
        console.log("controller init function triggered");
        this.control({
            'studentlist':{
                itemdblclick: this.editStudent
            }
        })
    },
   editStudent:function (grid, record) { // grid触发的事件源 record是绑定的数据
       /*console.log("click");
       console.log(grid);
       console.log(record);*/
       console.log("record.name = " + record.get('name'));
   }
});