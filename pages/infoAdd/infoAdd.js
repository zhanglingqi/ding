var unit = require('../../utils/util');
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
    fileList: [
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' },
    ],
    leaveDay:'',
    address:'',
    areaNmae:'',
    areaList:'',
    region:[],
    showArea:false,
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
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
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
  submitForm() {
    wx.reLaunch({
      url: '../logs/logs'
      })
  },
  showArea() {
    this.setData({
      showArea:true,
    })
  },
  startArea(event) {
    console.log(event)
    this.setData({
      showArea:false,
    })
  },
  closeArea() {
    this.setData({
      showArea:false,
    })
  },
  bindRegionChange(evevt) {
    console.log('picker发送选择改变，携带值为', evevt.detail.value)
    this.setData({
      region: evevt.detail.value,
      areaList:evevt.detail.value.join(' ')
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