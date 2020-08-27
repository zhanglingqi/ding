var unit = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show:false,
    columns: ['事假', '调休', '病假', '年假', '产假','陪产假','婚假','例假','丧假','哺乳假'],
    pickerVal:'',
    userName:'',
    userConent:'',
    startTime:'',
    showStart:false,
    currentStart:new Date().getTime(),
    currentEnd:new Date().getTime(),
    showEnd:false,
    endTime:'',
  },
  showPopup() {
    this.setData({ show: true });
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    console.log( value, index);
    this.setData({
      pickerVal:value
    })
  },
  showStarttime() {
    this.setData({
      showStart:true
    })
  },
  showEndtime() {
    this.setData({
      showEnd:true
    })
  },
  startChange(event) {
    this.setData({
      startTime:unit.formatTime(new Date(event.detail)),
      showStart:false,
    })
  },
  endChange(event) {
    this.setData({
      endTime:unit.formatTime(new Date(event.detail)),
      showEnd:false,
    })
  },
  endStart() {
    this.setData({
      showEnd:false
    })
  },
  closeStart() {
    this.setData({
      showStart:false,
    })
  },
  onCloseEnd() {

  },
  onClose() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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