import Cookie from 'js-cookie'
export const state = () => ({
  token: null,
  status:null
})

export const mutations = {
  setToken(state, value) {
    state.token = value
    Cookie.set('token', value);
  },
  setStatus (state, value) {
    state.status = value
    Cookie.set('status', value)
  }
}

export const actions = {
  nuxtServerInit({commit, state}, {req}) {
    let token = null
    if (req.headers.cookie) {
      const cookies = req.headers.cookie
      try {
        token = getCookies(cookies,'token')
      } catch (err) {
        // No valid cookie found
      }
      commit('setToken', token)
    }
  }
}

// 获取cookie的值
function getCookies(cookies,name){
  var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = cookies.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
