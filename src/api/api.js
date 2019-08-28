import service from '@/utils/request'

const apis = {
  // 登录
  login: function () {
    return service({
      url: '',
      method: 'get'
    })
  },
  getMes: function () {
    return service({
      url: '/user',
      method: 'get'
    })
  }
}

export default apis
