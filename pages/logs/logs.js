//logs.js
const util = require('../../utils/util.js')
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  data: {
    active: 0,
    weekDay:[
      {id:1,week:'日',day:'12'},{id:2,week:'一',day:'13'},
      {id:3,week:'二',day:'14'},{id:4,week:'三',day:'15'},
      {id:5,week:'四',day:'16'},{id:6,week:'五',day:'17'},
      {id:7,week:'六',day:'18'}
    ],
    indexArr:0,
    date: '',
    today:new Date().getTime(),
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    console.log(event.detail)
  },
  handleWeek(event) {
    this.setData({
      indexArr:event.currentTarget.dataset.id
    })
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onCloseTable(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？',
        }).then(() => {
          instance.close();
          Toast.success('删除成功');
        }).catch(() => {

        });
        break;
    }
  },
  handleAdd() {
    wx.navigateTo({
      url: '../infoAdd/infoAdd',
    })
  },
  onLoad: function () {
    
  }
})
