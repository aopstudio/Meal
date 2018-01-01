var app=new Vue({
    el: '#app,#ordered',
    data: {
        show: true,
        url:null,
        foodList:[

        ]
    },
    methods:{
        add:function () {
            this.foodList.push('锅包肉');
        }
    }
})