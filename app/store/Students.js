Ext.define('Yvan.store.Students', {
    extend: 'Ext.data.Store',
    // fields: ['id','name','age','sex'],
    model: 'Yvan.model.Student',
    autoLoad: true,
    // 以ajax的方式向服务器请求读取数据
    proxy: {
        type: 'ajax',
        // url: '/Extjs-Study-Coding/assets/json/students.json',
        api: {
            read: 'assets/json/students.json',
            update: 'assets/json/updateStudent.json',
            /*create: '',  //新增
            Destory: ''  //删除*/
        },
        reader: {
            type: 'json',
            root: 'students', // 设置服务器返回来的数据哪一块作为真正的数据源
            successProperty: 'success' // 设置成功或者失败的标志，该值为一个name值，不是value值
        }
    }
});