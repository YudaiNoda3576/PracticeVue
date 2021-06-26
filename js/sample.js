Vue.filter('numberFormat', function(v){
  return v.toLocaleString()
})

Vue.filter('jpyToUsd', function(jpyPrice){
  return jpyPrice / 100
})

Vue.filter('readMore', function(longText, length, suffix){
  return longText.substring(0, length) + suffix
})
// ローカル登録に変更↓
// Vue.component('hello-world-component', {
//     template:'<p>Hello Worldのコンポーネントです</p>'
// });
let helloComponent = {
  template: '<p>Hello Worldのコンポーネントです</p>'
}

let countComponent = {
  // conmponetのdataオプションはfunctionであることに注意
  data: function(){
    return {
      count: 0
    }
  },
  // templateのルート要素は単一であること
  // これはできない
  //template:'<span>count:</span><button @click="count++">{{ count }}</button>'
  // 一つの要素で囲う必要がある
  template:'<div><span>count:</span><button @click="count++">{{ count }}</button></div>'
}

let app = new Vue({
    el: '#app',
    data: {
      age: 0,
      selected:'',
      dateTime:'',
      counter: 0,
      toggle: true,
      message: 'Hello Vue!',
      message2: '',
      html: '<span style="color: red;">Hello Vue!</span>',
      count: 0,
      user:{
        lastName: "野田",
        firstName: "雄大",
        prefecture: "滋賀",
        age: 28,
      },
      colors:[],
      now: "",
      number: 100,
      isOk: false,
      jpyPrice: 2980000,
      longText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      url:"https://en.wikipedia.org/wiki/Lorem_ipsum",
      basePrice: 100,
      km: 0,
      m: 0,
      mm: 0,
      lastName:'',
      firstName:'',
      // fullName:''
      isLarge: true,
      hasError: false,
      largeClass: 'large',
      dabgerClass: 'text-danger',
      classObject:{
        large: false,
        'text-danger': true
      },
      largeClass:{
        large: true,
        'bg-gray': true
      },
      color: '',
      fontSize: 36,
      checked: false
    },
    methods: {
      onclick: function(){
       this.now = new Date().toLocaleDateString();
      },
      clickHandler: function(e){
        this.message = this.message.split('').reverse().join('')
      },
      incrementCount: function($event, message){
        this.counter++
        this.message2 = message
        console.log($event)
      },
      showDateTime: function(){
        let date = new Date().toLocaleDateString()
        let time = new Date().toLocaleTimeString()
        this.dateTime = date + time
      },
      clearText: function(){
        this.message2 = ''
      },
      showAlertToClearText: function(){
        alert('何みてんねん。しばくぞ')
      }
    },
    computed: {
      reversedText: function(){
        return  this.message.split('').reverse().join('')
      },
      taxIncludedPrice: {
        get: function(){
          return parseInt(this.basePrice * 1.08)
        },
        set: function(taxIncludedPrice) {
          this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
        }
      },
      // watch式を書き換え
      fullName: function(){
        return `${this.lastName} ${this.firstName}`
      }
    },
    watch: {
      message: function(newVal, oldVal){
        console.log('new: %s, old: %s', newVal, oldVal)
      },
      km: function(val) {
        this.km = val;
        this.m = val * 100;
        this.mm = val * 10000;
      },
      m: function(val) {
        this.km = val / 100;
        this.m = val;
        this.mm = val * 100;
      },
      mm: function(val) {
        this.km = val / 10000;
        this.m = val / 100;
        this.mm = val;
      },
      colors:{
        // 深い階層のwatchにはhandlerとdeepが必須
        handler: function(newVal, oldVal){
          console.log("Changed")
          // deepオプションのnewValとoldValが同じ値になることの検証
          console.log('new: %s, old: $s',
          JSON.stringify(newVal, null, '\t'),
          JSON.stringify(oldVal, null, '\t'))
        },
        // デフォルトでfalse
        deep: true, 
        immediate: true
      }
      // 算出プロパティに書き換える
      // lastName: function(val){
      //   this.fullName = `${val}  ${this.firstName}`
      // },
      // firstName: function(val){
      //   this.fullName = `${this.lastName}  ${val}`
      // }
    },
    components: {
      'hello-world-component' : helloComponent,
      'count-component' : countComponent
    }
})
