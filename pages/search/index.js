// pages/search/index.js
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
    historyList: ['奔驰1', '宝马', '奔驰', '宝马', '奔驰', '宝马', '奔驰', '宝马', '奔驰', '宝马', '奔驰', '宝马', '奔驰', '宝马'],
    liveList: ['17-31万 奔驰c级', '17-31万 奔驰c级', '17-31万 奔驰c级', '17-31万 奔驰c级', '17-31万 奔驰c级', '17-31万 奔驰c级', '17-31万 奔驰c级'],
    lookList: ['【 奔驰C级】挑选全国最超值的奔驰C级！', '【 奔驰C级】挑选全国最超值的奔驰C级！', '【 奔驰C级】挑选全国最超值的奔驰C级！', '【 奔驰C级】挑选全国最超值的奔驰C级！', '【 奔驰C级】挑选全国最超值的奔驰C级！']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      this.requestSearchList(value).then(data => {
        resolve(data || [])
      })
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  requestSearchList(value) {
    return getRequest(API.search.searchList,{value})
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