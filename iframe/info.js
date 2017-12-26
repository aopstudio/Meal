new Vue({
    el:'#info',
    data:{
        username:'zhedong',
        show:false,
        password:'hello',
        check:null,
        newpassword:null,
        address:'东北大学浑南校区',
        newaddress:null
    },
    methods:{
        yanzheng: function () {
            if(this.check!==this.password){
                window.alert('密码错误');
                this.show=false;
            }
            else{
                this.show=true;
            }
        },
        change: function () {
            this.password=this.newpassword;
            window.alert('修改成功');
            this.check=null;
            this.newpassword=null;
            this.show=false;
        }
    }
})