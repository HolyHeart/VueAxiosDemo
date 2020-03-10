import axios from "axios"
// import { resolve } from "dns"
// import { reject } from "q"
// import { timeout } from "q"

//第一种回调方式
// export function request(config,success,failure) {
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 4000
//   })

//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

//第二种回调方式
// export function request(config) {
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 4000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

// 次最佳回调方式
// export function request(config) {
//   return new Promise((resolve,reject) => {
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 4000
//   })

//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   }) 
// }

//最佳回调方式
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: "http://106.54.54.237:8000/api/v1",
      timeout: 4000
    })

    //2.axios的拦截器(此处只是对axios的实例进行拦截，也可以对axios的全局进行拦截)
    // 2.1请求拦截
    instance.interceptors.request.use(  
      config => {
      // console.log(config)
      // 拦截的目的是修改config:
      // 1.比如config中的一些信息不符合服务器的要求
      // 2.比如每次发送网络请求时，都希望在界面中显示一个请求图标
      // 3.某些网络请求(比如登录(token)),必须携带一些特殊信息
      return config  //如果进行拦截，此处也必须进行返回
      },err => {
      // console.log(err)
      }
    )

    // 2.2响应拦截
    instance.interceptors.response.use(  
      res => { // 响应成功
        console.log(res)
        return res.data  //此处拦截响应之后必须返回res，否则main.js中回调不到，此处只需要res中的data，所以只返回了data
      },
      err => {// 响应失败(当用户传入的url错误)
        console.log(err)
      }
    )
  
    // 3.发送真正的网络请求
    return instance(config)  //instance本身就会返回Promise，因此没有必要再新建一个
  }
