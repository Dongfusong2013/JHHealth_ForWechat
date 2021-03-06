// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {    
    userName:'',
    password:''
  },

  bindKeyInput: function (e) {
    let type = e.currentTarget.dataset.type;  
    console.log(type);
    if (type == "user"){
      this.setData({
        userName: e.detail.value
      })
    }else{
      this.setData({
        password: e.detail.value
      })
    } 
  },
  
  onSubmit:function(){
     if (this.data.userName !== '' && this.data.password !== ''){       
       wx.navigateTo({
         url: '/pages/result/result?userName='+this.data.userName,        
       })
       this.data.userName = '';
       this.data.password = '';
     }
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