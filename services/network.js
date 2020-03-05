import {
  baseURL
} from './config.js'
export default function(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + option.url,
      method: option.method || 'get',
      data: option.data || {},
      success: function(res) {
        resolve(res)
      },
      fail: function(err) {
        reject(err)
      }
    })
  })
}