//Page Object
import { request } from "../../request/index.js";
Page({
  data: {
      // 轮播图数组
      swiperList: [], 
  },
  //options(Object)
  onLoad: function(options) {
    this.getSwiperList();
    this.getCateList();
  },
    // 获取轮播图数据
    getSwiperList(){
      request({ url: "/home/swiperdata" })
      .then(result => {
        this.setData({
          swiperList: result
        })
      })
    },
      // 获取 分类导航数据
  getCateList(){
    request({ url: "/home/catitems" })
    .then(result => {
      this.setData({
        catesList: result
      })
    })
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  