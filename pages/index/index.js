App({
  globaData: {
    token: ""
  },
  onLaunch: function() {
    //获取token
    const token = wx.getStorageSync('token')
    if (token && token.length !== 0) { //判断有token
      this.check_token(token)
    } else { //判断没有token
      this.login()
    }

  },
  check_token(token){//验证token是否过期
    console.log('执行验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:"post",
      header:{token},
      success:(res)=>{
        if (!res.data.errCode) {//token没有过期
          this.globalData.token = token
        }else{//token过期
          this.login()
        }
      }
    })
  },
  login() {
    console.log('执行登录操作')
    //获取code
    wx.login({
      success: (res) => {
        console.log(res)
        const code = res.code //code只有5分钟有效期
        //将code发送给服务器，返回token
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "post",
          data: {
            code
          },
          success: (res) => { //获取到token
            const token = res.data.token;
            //将token保存在本地
            wx.setStorageSync('token', token)
            //将token保存在全局
            this.globalData.token = token
          }
        })
      }
    })
  }
})