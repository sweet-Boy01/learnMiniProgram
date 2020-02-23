const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  handleShowToast(){
    wx.showToast({
      title: '哈哈哈',
      duration:3000,
      mask:true,
      success:function(e){
        console.log(e)
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelText:"退出",
      cancelColor:"red",
      success:function(e){
        console.log(e)
        if(e.cancel){
          console.log('点击了退出')
        }else if(e.confirm){
          console.log('点击了确定')
        }
      }
    })
  },
  handleShowLoading:function(){
    wx.showLoading({
      title: '正在加载',
      success:function(e){
        console.log(e)
        setInterval(()=>{
          wx.hideLoading();
        },3000)
      }
    })
  },
  handleAction(){
    wx.showActionSheet({
      itemList: ['拍照','相册'],
      success:function(e){
        console.log(e)
        switch(e.tapIndex){
          case 0 :{console.log('点击了拍照')}
          break;
          case 1 :{console.log('点击了相册')}
          break;
        }
      }
    })
  }
})