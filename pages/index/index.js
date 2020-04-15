//Page Object
import { request } from "../../request/index.js";
Page({
  data: {
      // 轮播图数组
      swiperList: [], 
  },
  //options(Object)
  onLoad: function(options) {
      // wx.request({
      //   url:  'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      //   data: {},
      //   header: {'content-type':'application/json'},
      //   method: 'GET',
      //   dataType: 'json',
      //   responseType: 'text',
      //   success: (result) => { 
      //    this.setData({
      //     swiperList: result.data.message
      //   })
      //   },
      //   fail: () => {},
      //   complete: () => {}
      // });
      request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}).then((result)=>{
        console.log(result);
        
              this.setData({
          swiperList: result.data.message
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
  