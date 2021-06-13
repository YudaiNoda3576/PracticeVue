var app = new Vue({
    el: "#app",
    data:{
        newItem:"",
        todos: []
    },
    methods: {
        addItem: function(e){
            if(this.newItem === "" ){
                return;
            }
            let todo = {
                item: this.newItem,
                isDone: false
            };
            this.todos.push(todo);
            // 入力フォームの初期化
            this.newItem = "";
        },
        deleteItem: function(index){
            this.todos.splice(index, 1);
        }
    }
})