# first_Wachat_item
> 制作的第一个小程序：简单的电影推荐小程序

### 目标实现

1. 初始化项目文件
2. 输出两个页面 关于和电影推荐
3. tabBar的实现
4. 页面跳转的了解
5. 页面基本布局
6. swiper轮播的实现
7. 点击卡片进入详情页面
8. 调用豆瓣API对详情页面进行渲染
9. 头部的内容设置及加载图标

### 1.初始化项目文件

```
//初始化配置
pages：存放页面使用
	--about 主页页面文件夹
		--about.js			==	.js
		--about.json		==	.json
		--about.wxml		==	.html
		--about.wxss		==	.css
app.js
app.json
app.wxss
```

about.json

```javascript
{
  "pages":["pages/home/home"]
}
```

App.json

```javascript
{
  "pages": [
    "pages/about/about",
    "pages/weekly/weekly",
    "pages/detail/detail"
  ]
}
```

About.js

```
page({
	....
})
```

初始化就到这就结束。。。。

### 2.输出两个页面 关于和电影推荐

在pages目录下创建两个存放页面的文件夹在文件夹下生成四个和初始化同样的配置

### 3.tabBar的实现

在app.json中我们添加相关代码更多请看[文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html?search-key=tabBar)

```javascript
"tabBar": {
    "list": [
      {
        "text": "每周推荐",
        "pagePath": "pages/weekly/weekly",
        "iconPath": "images/icon/week1.png",
        "selectedIconPath": "images/icon/week.png"
      },
      {
        "text": "About",
        "pagePath": "pages/about/about",
        "iconPath": "images/icon/about1.png",
        "selectedIconPath": "images/icon/about.png"
      }
    ]
  },
```

[点击在开发者工具预览](https://developers.weixin.qq.com/s/jiSARvmF7i55)

### 4.页面路径了解

通过 `app.json` 的 `pages` 字段就可以知道你当前小程序的所有页面路径:

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"]
}
```

### wx.navigateTo(Object object)

###### 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。

[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html)

### 5.页面基本布局

主要使用flex布局来进行动态布局 [参考](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

### 6.swiper轮播的实现

使用小程序自带组件进行调试 [参考](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)

```javascript
<swiper>
	<swiper-item>
		....
	</swiper-item>
</swiper>
```

### 7.点击卡片进入详情页面

创建对应页面文件，在app.json中配置路由地址在swiper-item上绑定点击事件

跳转到详情页上头部显示加载动画以及渲染出对应名称

### 8.调用豆瓣API对详情页面进行渲染

```javascript
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
      //动态查找影片地址
      //豆瓣屏蔽了小程序的请求
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id,
      method: "GET",
      header:{	//转换数据类型
        "content-type":"json"
      },
      success:(res)=> {
        if(res.statusCode==200){
            this.setData({
            movie:res.data	//将请求成功的数据存放在定义好的内容中
          })
         wx.setNavigationBarTitle({ //设置头部名称
           title: res.data.title + "评分：" + res.data.rating.average + "分",
         })
         wx.hideNavigationBarLoading() //隐藏动画
        }
      }  
    })
    wx.showNavigationBarLoading() //加载动画
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
```

