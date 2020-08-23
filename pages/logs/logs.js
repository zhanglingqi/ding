//logs.js
const util = require('../../utils/util.js')

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
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  },
  handleWeek(event) {
    this.setData({
      indexArr:event.currentTarget.dataset.id
    })
  },
  onClose(event) {
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
        });
        break;
    }
  },
  onLoad: function () {
    
  }
})
