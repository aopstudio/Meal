
new Vue({
    el:'.meals',
    components:{
        'cai':{
            template:'<div class="meal">\n' +
            '        <img class="mealimage" v-bind:src=\'"../image/"+name+".jpg"\' v-bind:alt=name>\n' +
            '        <div class="name">{{this.name}}</div>\n' +
            '        <div class="price">{{this.price}}元</div>\n' +
            '    </div>',
            props:['name','price']
        }
    }
});