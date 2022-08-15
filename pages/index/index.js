// 获取应用实例
// const app = getApp()
Page({
  data: {
    showIcon: true,
    // 轮播
    swiperList: [],
    // 课程
    courses: [],
    // 页面从推荐页面开始
    type: 'recommend',
    // 推荐，路径，实战，活动
    tabs:[{
        name: "推荐",
        type: "recommend"
    },{
        name: "路径",
        type: "path"
    },{
        name: "实战",
        type: "project"
    },{
        name: "活动",
        type: "activity"
    }],
    // 活动页面
    activity: []
  },
//  页面刚加载时执行
  onLoad(){
      wx.request({
        url: 'https://www.fastmock.site/mock/2d1217c45f08998d7ffdb571042a5885/weixin_xiaoyu/api/getData',
        // 执行一个回调函数
        success:(res) =>{
            // es6语法 = const data = res.data.data
            const {data: {data}} = res
            const {swiperList,courses,activity} = data
            this.setData({
                swiperList,
                courses,
                activity
            })
        }
      })
  },
  handleInputChange(e){
    // 参数中有 value 这个值
    // value 有值，点击搜索框放大镜就消失
    // value 没有值，搜索框放大镜恢复
    const value = e.detail.value
    this.setData({
        showIcon: value? false: true
     })
  },
  changeType(e){
      const type = e.currentTarget.dataset.type
      this.setData({
          type
      })
  },
  handleCoures(e){
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        // es6，课程的id也会传到 detail 页面
        url: `/pages/detail/detail?id=${id}`,
      })
  }
})

