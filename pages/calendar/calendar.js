// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    date: '',
    minDate:new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime(),
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getTime(),
    formatter:function(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      if (month === 9) {
        if (date === 1) {
          day.topInfo = '劳动节';
        } else if (date === 4) {
          day.topInfo = '五四青年节';
        }
      }
      return day;
    },
    selectDay:""
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  calenderSelect(event) {
    console.log(event.detail.getTime())
    this.setData({
      'selectDay':new Date(event.detail.getTime()).getDay()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        formatter : function(day) {
          const month = day.date.getMonth() + 1;
          const date = day.date.getDate();
          if (month === 9) {
            if (date === 1) {
              day.topInfo = '请假';
            } else if (date === 4) {
              day.topInfo = '出差';
            }
            //  else if (date === 25) {
            //   day.text = '今天';
            // }
          }
          return day;
        },
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})