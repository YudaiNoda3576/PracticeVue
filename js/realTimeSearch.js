let app = new Vue({
    el: "#app",
    data: {
        items: null,
        keyWord: '',
        message: ''
    },
    watch: {
        keyWord: function(newVal, oldVal){
            console.log(newVal)
            this.message = "入力中｡｡｡"
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        //this.keyWord = "入力してください",
        //this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function(){
            if(this.keyWord === ''){
                this.items = null
                this.message = ''
                return
            }
            this.message = "Loading..."
            let vm = this
            let params = {page: 1, per_page:20, query:this.keyWord} 
            axios.get("https://qiita.com/api/v2/items", { params })
                .then(function(response){
                    console.log(response)
                    vm.items = response.data
                })
                .catch(function(error){
                    vm.message = "エラーです:" + error
                })
                .finally(function(){
                    vm.message = ""
                })
        }
    }
});