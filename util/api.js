// const BASE_URL = 'https://spla3.yuu26.com'
const BASE_URL = 'https://splatoon3.ink'

export const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res) => {
        if (res.statusCode !== 200) {
          return uni.showToast({
            title: '获取数据失败',
            icon: exception
          })
        }
        // console.log("res", res);
        resolve(res.data)
      },
      fail: (err) => {
        uni.showToast({
          title: '请求接口失败',
          icon: exception
        })
        reject(err)
      }
    })
  })
}
