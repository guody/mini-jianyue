//index.js
var comp = {
  comp_name:"简约互动科技（北京）有限公司",
  comp_desc:"社交 - 视频交友",
  logo_url:"../../imgs/jianyue_logo.png"
}

var icons = {
  address_icon:"../../imgs/location.png",
  more:"../../imgs/more.png",
  time_icon:"../../imgs/time.png",
  tel_icon:"../../imgs/telphone.png",
  qq_icon:"../../imgs/qq.png",
  pic_icon:"../../imgs/picture.png"

}

//获取应用实例
var app = getApp();
Page({
  data: {
    comp:comp,
    icons: icons,
    Images:[
      "http://dev-share.17jianyue.cn/images/show_pic/1.jpg",
      "http://dev-share.17jianyue.cn/images/show_pic/2.jpg",
      "http://dev-share.17jianyue.cn/images/show_pic/3.jpg",
      "http://dev-share.17jianyue.cn/images/show_pic/4.jpg",
      "http://dev-share.17jianyue.cn/images/show_pic/5.jpg",
      "http://dev-share.17jianyue.cn/images/show_pic/6.png"
    ]    
  },
  onShareAppMessage: function () {
    return {
      title: '简约互动',
      path: '/page/user?id=123'
    }
  },
  ontap: function () {
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        wx.openLocation({
          latitude: 39.9152, // 纬度，范围为-90~90，负数表示南纬
          longitude: 116.4953, // 经度，范围为-180~180，负数表示西经
          scale: 14, // 缩放比例  
          name: "简约互动",
          address: "北京市朝阳区朝阳路住邦2000商务楼2号楼-东配楼618室",
        })
      }
    })
  },  
  clickImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.Images,//内部的地址为绝对路径
      fail: function () {
        console.log('fail')
      },
      complete: function () {
        console.info("点击图片了");
      },
    })
  },  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
