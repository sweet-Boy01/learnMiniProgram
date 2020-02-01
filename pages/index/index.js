Page({
  data:{
    name:"张保安",
    students:[
      {id:110,name:"张三",age:18},
      {id:111,name:"里斯",age:19}
    ],
    counter:0
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
  }
})