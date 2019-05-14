Page({

  /**
   * 页面的初始数据
   */
  data: {
    WeekMovies:
    [{
      name:"攻壳机动队",
      comment:"在跑去看首映前，我在图书馆和回家的火车上刷完了95年原作剧场版，深切地明白了神作之所以为神作，是不以时间或意志为改变的…… ",
      imagePath:"/images/gongke.jpg",
      recommend: true,
      id: 25818101
    },
    {
      name: "金刚狼",
      comment: "本片根据弗兰克·米勒（Frank Miller）的原著漫画改编…… ",
      imagePath: "/images/Wolverine.png",
      recommend: false,
      id: 25765735
    },
    {
      name: "绿皮书",
      comment: "让人印象最深的片段是他们的车在南部的乡间小路上抛锚，和田里劳作的黑奴对视的那一幕，无声却发出巨响。…… ",
      imagePath: "/images/greenbook.png",
      recommend: false,
      id: 27060077
    }],
    currentIndex: 0,
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex:this.data.WeekMovies.length - 1
    })
  },

  f0:function(event){
    this.setData({
      currentIndex: this.data.WeekMovies.length - 1
    })
  },

  f1:function(event){
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+movieId,
    })
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
      title:"每周推荐"
    }
  }
})