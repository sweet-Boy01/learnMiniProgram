export default function request(option){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: option.url,
      data:option.data || {},
      method:option.method || 'get',
      success:function(res){
        resolve(res)
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}