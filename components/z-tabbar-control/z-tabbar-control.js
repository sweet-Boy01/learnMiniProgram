// components/z-tabbar-control/z-tabbar-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabbarCtrl(e){
      this.setData({
        currentIndex:e.target.dataset.index
      })
      this.triggerEvent('handleTabbarClick',{index:this.data.currentIndex})
    }
  }
})
