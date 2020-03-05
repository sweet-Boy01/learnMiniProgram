// pages/home/home.js
// import request from '../../services/network.js'
import {
  getMultiData,
  getGoodsData
} from '../../services/home.js'
Page({

  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    //数据模型
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType: 'pop',
    backTop_isShow: false,
    top_distance: 1000,
    isFixed: false,
    tab_scrollTop:0
  },
  imgLoad() {
    wx.createSelectorQuery().select('#tabControl').boundingClientRect((rect)=>{
      console.log(rect)
      this.data.tab_scrollTop = rect.top;
    }).exec()
  },
  onLoad: function(options) {
    //------------------网络请求函数---------------
    //请求轮播图以及推荐数据
    this._getMultiData()
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  _getGoodsData(type) {
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      //取出数据
      const list = res.data.data.list
      //取出对应类型的list
      const oldList = this.data.goods[type].list
      //将数据放入对应类型的list中
      oldList.push(...list)
      //将数据设回data中
      const listKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [listKey]: oldList,
        [pageKey]: page
      })
    })
  },
  _getMultiData() {
    getMultiData().then(res => {
      //取出轮播图及推荐数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },

  //-----------事件处理函数-------------
  handleTabbarClick(e) {
    const index = e.detail.index
    console.log(index)
    switch (index) {
      case 0:
        this.setData({
          currentType: "pop"
        })
        break;
      case 1:
        this.setData({
          currentType: 'new'
        })
        break;
      case 2:
        this.setData({
          currentType: 'sell'
        })
    }
  },
  onReachBottom() {
    //上拉加载更多
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll(option) {
    const scrollTop = option.scrollTop;
    const flag = scrollTop >= this.data.top_distance
    if (this.data.backTop_isShow != flag) {
      this.setData({
        backTop_isShow: flag
      })
    }

    //tabar停留
    const flag2 = scrollTop >= this.data.tab_scrollTop
    if(flag2!= this.data.isFixed){}
    this.setData({
      isFixed:flag2
    })
  }

})