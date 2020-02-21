Page({
  
  data:{
    name:"张保安",
    students:[
      {id:110,name:"张三",age:18},
      {id:111,name:"里斯",age:19}
    ],
    counter:0,
    pageContent:"精选"
  },
  handlebtnAdd(){
    console.log('haha ')
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handlebtnSubtract(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleInput(e){
    console.log('输入框输入',e)
  },
  hadleFocus(e){
    console.log('获取了焦点',e)
  },
  handleEvent(e){
    this.setData({
      counter: this.data.counter +1
    })
    console.log(e.detail)
  },
  pageControl(e){
    this.setData({
      pageContent:e.detail.title
    })
  },
  handleCpn(){
    //获取到组件对象
    // const my_sel = this.selectComponent('.sel_class')
    //调用组件对象的setData方法
    // my_sel.setData({
    //   counter:my_sel.data.counter + 1
    // })
    
    //通过组件内的方法修改数据
    const my_sel = this.selectComponent('.sel_class')
    my_sel.incrementCounter(11)
  }
})