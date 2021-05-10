// index.js
// 获取应用实例
var API = require('../../utils/api');

var {
  getRequest,
  postRequest
} = require('../../utils/myRequest');

Page({
  data: {
    bannerList: [
      {
        icon: 'https://cartype.image.mucang.cn/cartype-image/2021/0122/04/0677160ae2b7476cbadc1a0de667ebf7.jpg!jpg720'
      },
      {
        icon: 'https://cartype.image.mucang.cn/cartype-image/2021/0122/04/0677160ae2b7476cbadc1a0de667ebf7.jpg!jpg720'
      },
      {
        icon: 'https://cartype.image.mucang.cn/cartype-image/2021/0122/04/0677160ae2b7476cbadc1a0de667ebf7.jpg!jpg720'
      }
    ],
    priceList: [
      {
        min: 0,
        max: 5,
        title: '5万以下'
      },
      {
        min: 5,
        max: 10,
        title: '5-10万'
      },
      {
        min: 10,
        max: 15,
        title: '10-15万'
      },
      {
        min: 15,
        max: null,
        title: '15万以上'
      }
    ],
    brandlist: [
      {
        id: 1,
        image: '',
        name: '宝马'
      },
      {
        id: 2,
        image: '',
        name: '宝马'
      },
      {
        id: 3,
        image: '',
        name: '宝马'
      },
      {
        id: 4,
        image: '',
        name: '宝马'
      },
      {
        id: 5,
        name: '宝马'
      },
      {
        id: 6,
        image: '',
        name: '宝马'
      },
      {
        id: 7,
        image: '',
        name: '宝马'
      },
      {
        id: 8,
        image: '',
        name: '更多'
      }
    ],
    listParams: {
      page: 1,
      pageSize: 10
    },
    carList: [],
    selectCity: wx.getStorageSync('select-city')
  },
  onLoad() {
    this.requestCarList();
  },
  onShow() {
    this.setData({
      selectCity: wx.getStorageSync('select-city')
    })
  },
  requestCarList() {
    let { listParams, carList } = this.data;

    return new Promise((resolve, reject) => {
      carList.push(...Array(10).fill({}))
      this.setData({
        carList: carList
      })
      // getRequest(API.search.searchList, { ...listParams }).then(data => {
      resolve()
      // })

    })

  },
  goSelectCity() {
    wx.navigateTo({
      url: '../selectCity/index'
    })
  },
  goSearch() {
    wx.navigateTo({
      url: '../search/index'
    })
  },
  onReachBottom: function () {
    this.requestCarList()
  },
})
