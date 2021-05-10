var util = require('./util');
var { deBug } = require('./COSTANT')
var requestList = [];
var requestNum = 0;
var systemObj = null;
var authToken = null;


var systemFn = function () {
    systemObj = wx.getSystemInfoSync();
}

var authTokenFn = function () {
    authToken = (wx.getStorageSync('MUCANGINFO') || {}).authToken;
    return authToken
}

var request = (url, method = 'GET', params = {}, header, showErrType = 'toast') => {
 
    params.authToken = authTokenFn();

    var promise = new Promise((resovle, reject) => {
        wx.request({
            url,
            method,
            data: params,
            header: {
                'content-type': 'application/json',
                ...header
            },
            success: (data) => {
                // 正式环境不弹出url
                if (!deBug) {
                    url = ''
                }

                if (data.data.success) {
                    resovle(data.data.data);
                } else {
                    var errMsg = data.message;
                    // 传报错方式，默认为toast，如果传其他值就在reject里面去处理
                    if (showErrType == 'modal') {
                        wx.showModal({
                            title: errMsg || `${url}服务器异常`,
                        })
                    } else if (showErrType == 'toast') {
                        wx.showToast({
                            icon: 'none',
                            title: errMsg || `${url}服务器异常`,
                        })
                    }
                    reject(data.data.data);
                }
            },
            fail: (error) => {
                var errMsg = error.message;
                if (showErrType == 'modal') {
                    wx.showModal({
                        title: errMsg || `服务器出现异常`,
                    })
                } else if (showErrType == 'toast') {
                    wx.showToast({
                        icon: 'none',
                        title: errMsg || `服务器出现异常`,
                    })
                }

                reject(error);
                // console.log(err) 
            },
            complete: () => {
                // requestNum++;
                // if (requestList.length == requestNum) {
                //   requestList = [];
                //   requestNum = 0;
                //   wx.hideLoading();
                // }
                // console.log(requestNum)


            }
        })
    })

    return promise
}


var getRequest = (url, params, header = {}, showErrType) => {
    return request(url, 'GET', params, header, showErrType);
}

var postRequest = (url, params, header = {}, showErrType) => {
    return request(url, 'POST', params, header, showErrType);
}

module.exports = {
    getRequest,
    postRequest
}