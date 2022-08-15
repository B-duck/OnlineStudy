// pages/hot/hot.js
Page({
    data:{
        rankPeriod: 'undefined',
        rankPeriods:[{
            text: "周",
            value: "week"
        },{
            text: "月",
            value: "month"
        }],
        itemList: []
    },
    onLoad(){
        wx.request({
          url: 'https://www.fastmock.site/mock/2d1217c45f08998d7ffdb571042a5885/weixin_xiaoyu/api/getData',
          // 执行一个回调函数
          success:(res) =>{
            // es6语法 = const data = res.data.data
            const {data: {data}} = res
            // 本地存储
            const rankPeriod = wx.getStorageSync('rankPeriod') || 'week'
            const {itemList} = data
            this.setData({
                itemList,
                rankPeriod
            })
          }
        })
    },
    handlePeriod(e){
        // 这里rankPeriod 名字与 data 中命名需要相同
        const rankPeriod = e.currentTarget.dataset.type
        this.setData({rankPeriod})
        // 本地存储
        wx.setStorage({
            key: 'rankPeriod',
            data: rankPeriod
        })
    }
})