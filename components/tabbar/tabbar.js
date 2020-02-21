// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties:{
    tabbarList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem(e){
      console.log(e)
      this.setData({
        currentIndex:e.target.dataset.index
      })
      this.triggerEvent('handelPage',{title:e.target.dataset.title})
    }
  }
})
