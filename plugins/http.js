export default function ({$axios, req, redirect, route, store})  {
  // request拦截器
  $axios.onRequest(config => {
    config.headers.accesstoken = store.state.token
  })
  $axios.onError(error => {

  })
  // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  $axios.onResponse(response => {

  })
  /**
   * 错误拦截
   */
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      // 404错误处理
    }
  })
}
