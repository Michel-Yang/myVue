import service from '@/utils/request'

export default {
  // 登录
  login (data) {
    return service({
      url: '/login',
      method: 'post',
      data
    })
  }
}
