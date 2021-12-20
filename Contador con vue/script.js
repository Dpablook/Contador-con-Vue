// console.log("hola");

// const app = new Vue({
//     el: '#app',
//     data:{
//         mensaje: "Hola nuevamente"
//     }
// })
// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'La pagina fue cargada el: ' + new Date().toLocaleString()
//   }
// })
// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen:true
//   }
// })

const app = Vue.createApp({
  data(){
    return {
      title: "Contador App - Vue",
      count: 0,
    };
  },
  // el metodo para el contador
  methods:{
      modCount(instruction = "add", limit = 1){
        if(instruction == 'dis')
            this.count -= limit
        else
            this.count += limit
      },
      addCount(){
    },
    },
});
