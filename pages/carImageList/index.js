// pages/carImageList/index.js
var API = require('../../utils/api');

var {
  getRequest,
  postRequest
} = require('../../utils/myRequest');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        name: '车身外观'
      },
      {
        id: 2,
        name: '车身外观1'
      },
      {
        id: 3,
        name: '车身外观2'
      },
      {
        id: 4,
        name: '车身外观3'
      },
      {
        id: 5,
        name: '车身外观4'
      }
    ],
    imageList: [],
    imageData: {
      1: Array(100).fill('https://cartype.image.mucang.cn/cartype-image/2018/0319/18/37bcdf11a6044cd194463e46f5dff314.jpg!jpg720'),
      2: Array(100).fill('https://cartype.image.mucang.cn/cartype-image/2018/0319/18/eb5fba5dc2854f38911fcf6f92f80814.jpg!jpg720'),
      3: Array(100).fill('https://cartype.image.mucang.cn/cartype-image/2018/0319/18/140536db37134fc7ab36dad227fa7988.jpg!jpg720'),
      4: Array(100).fill('https://cartype.image.mucang.cn/cartype-image/2018/0319/18/b9c5c53e27274753966af0efed38f0e4.jpg!jpg720'),
      5: Array(50).fill('https://cartype.image.mucang.cn/cartype-image/2018/0319/18/d59b4bdc10054cc8b5e77220f5ff56a9.jpg!jpg720'),
    },
    tabId: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestCarList();
  },
  selectTab: function (e) {
    let dataset = e.currentTarget.dataset;
    this.setData({
      tabId: dataset.id
    })

    this.requestCarList();
  },
  requestCarList() {
    let { tabId, imageData } = this.data;
    if (imageData[tabId]){
      this.setData({
        imageList: imageData[tabId]
      })
    }else{
      new Promise((resolve, reject) => {
        this.setData({
          imageList: []
        })
        // getRequest(API.search.searchList, { ...listParams }).then(data => {
        resolve()
        // })

      })
    }
  },
  goDetail(e){
    
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