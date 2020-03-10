import Vue from 'vue'
import App from './App'
import router from './router'
import {request} from "./network/request"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 一：使用全局的axios和对应的配置在进行网络请求
// 1.axios的基本使用
// axios({})本身会返回Promise
// axios({  //默认情况下使用get请求
//   url:"http://123.207.32.32:8000/home/multidata",
//   // 专门针对get请求的参数拼接
//   // params: {
//   //   type: "",
//   //   page: 1
//   // }
// }).then(res => {
//   console.log(res)
// })

// axios.defaults.baseURL = "http://123.207.32.32:8000"  //设置默认基础url片段
// axios.defaults.timeout = 5000  //设置默认请求时间限制
// axios({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res)
// })

// 2.axios发送并发请求
// axios.all([axios({
//   url: "/home/multidata"
// }),axios({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 3
//   }
// })]).then(res => {  //res返回的是一个数组
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// 二：创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// })

// 下面两个url使用同一个接口
// instance1({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// 此时有一个url需要访问另一个接口
// const instance2 = axios.create({
//   baseURL: "baseURL2",
//   timeout: 6000
// })

// instance2({
//   url: "url2"
// }).then(res => {
//   console.log(res)
// })

// 三：封装request模块，将第三方axios框架引入到一个模块中，千万不要引入到组件中，不好维护，最好放到一个模块中进行封装

//第一种回调方式
// request(
//   {
//   url: "/home/multidata"
//   },
//   res => {
//     console.log(res)
//   },
//   err => {
//     console.log(err)
//   }
// )

//第二种回调方式(将url请求，success和failure回调函数都放到一个对象中传给config)
// request({
//   baseConfig:{
//     url: "/home/multidata"
//     },
//   success: res => {
//       console.log(res)
//     },
//   failure: err => {
//       console.log(err)
//     }
//   })

//最佳回调方式
request({
  url: "/home/multidata"
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
