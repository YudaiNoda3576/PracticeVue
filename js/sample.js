var app = new Vue({
    el: '#app',
    data: {
      toggle: false,
      message: 'Hello Vue!',
      count: 0,
      user:{
        lastName: "野田",
        firstName: "雄大",
        prefecture: "滋賀",
        age: 28,
      },
      colors:["赤","緑","青"]
    }
  })