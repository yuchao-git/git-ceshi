// pages/buyCar/index.js
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
    selectCity: wx.getStorageSync('select-city'),
    searchVal: '',
    carList: [],
    listParams: {
      page: 1,
      pageSize: 10
    },
    filterParams: {
      brand: ''
    },
    brandList: [
      {
        id: 1,
        name: '测试'
      },
      {
        id: 2,
        name: '测试123'
      },
      {
        id: 3,
        name: '测试213'
      },
      {
        id: 4,
        name: '测试324'
      },
      {
        id: 5,
        name: '测试2123'
      },
      {
        id: 6,
        name: '测试123'
      },
      {
        id: 7,
        name: '测试3245'
      }
    ],
    showFilter: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { searchVal } = options;
    this.setData({
      searchVal
    })

    this.requestCarList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  requestCarList() {
    let { listParams, searchVal, filterParams, carList } = this.data;

    return new Promise((resolve, reject) => {
      carList.push(...Array(10).fill({}))
      this.setData({
        carList: carList
      })
      // getRequest(API.search.searchList, { searchVal, ...listParams,...filterParams }).then(data => {
      resolve()
      // })

    })

  },
  openFilter() {
    this.setData({
      showFilter: true
    })
  },
  closeFilter() {
    this.setData({
      showFilter: false
    })
  },
  search() {
    this.setData({
      listParams: {
        page: 1,
        pageSize: 10,
        carList: []
      }
    })
    this.requestCarList().then(() => {
      this.closeFilter();
    })
  },
  selectBrand(e) {
    let { filterParams } = this.data;
    let dataset = e.target.dataset;
    this.setData({
      filterParams: {
        ...filterParams,
        brand: dataset.id == filterParams.brand ? '' : dataset.id
      }
    })
  },
  searchChange(e) {
    let { filterParams } = this.data;
    let dataset = e.target.dataset;
    let value = e.detail.value;

    this.setData({
      filterParams: {
        ...filterParams,
        [dataset.type]: value
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      selectCity: wx.getStorageSync('select-city')
    })
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
})