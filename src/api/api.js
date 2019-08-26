import service from '@/utils/request'

const apis = {
  // 登录
  login: function (data) {
    return service({
      url: '/login',
      method: 'post',
      data
    })
  }
}

export default apis
