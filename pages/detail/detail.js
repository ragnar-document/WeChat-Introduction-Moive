Page({

  /**
   * 页面的初始数据
   */
  data: {
    mid:0,
    movie:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mid:options.id
    }),
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id,
      method: "GET",
      header:{
        "content-type":"json"
      },
      success:(res)=> {
        if(res.statusCode==200){
            this.setData({
            movie:res.data
          })
         wx.setNavigationBarTitle({
           title: res.data.title + "评分：" + res.data.rating.average + "分",
         })
         wx.hideNavigationBarLoading()
        }
      }  
    })
    wx.showNavigationBarLoading()
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
    return{
      title: '向你推荐' + this.data.movie.title
    }
  }
})