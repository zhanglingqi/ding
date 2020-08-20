//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  login() {
    wx.reLaunch({  
      url:'/pages/logs/logs'
  
    })
  },
  onLoad: function () {
    
  },
  
})
