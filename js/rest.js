var app=new Vue({
    el: '#app,#ordered,.meals',
    data: {
        show: true,
        url:null,
        foodList:[

        ],
        totalPrice:0
    },
    components:{
        'cai':{
            template:`<div class="meal">
                    <img class="mealimage" v-bind:src=\'"image/"+name+".jpg"\' v-bind:alt=name>
                    <div class="name">{{this.name}}</div>
                    <div class="price">{{this.price}}元</div>
                    <button v-on:click="add">选择</button>
                    </div>`,
            props:['name','price'],
            methods:{
                add:function () {
                    app.foodList.push(this.name);
                    app.totalPrice+=parseInt(this.price);
                }
            }
        }
    },
    methods:{
        clearList:function () {
            app.foodList.splice(0,app.foodList.length);
            app.totalPrice=0;
        },
        information:function () {
            var choose=window.confirm('您总共点了'+app.foodList.length+'个菜，消费'+app.totalPrice+'元');
        }
    }
})