// components/my_sel/my_sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:10
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrementCounter(num){
      this.setData({
        counter:this.data.counter + num
      })
    }
  },
  observers:{
    counter:function(newValue){
      console.log('counter发生了改变',newValue)
    }
  },
  pageLifetimes:{
    //监听组件所在页面的生命周期
    show(){
      console.log('页面显示了')
    }
  },
  lifetimes:{
    created(){
      console.log('组件被创建了')
    }
  }
})
