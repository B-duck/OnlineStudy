Page({
    data: {
        id: undefined
    },
    //options 自带参数
    onLoad(options){
        this.setData({
            id: options.id
        })
    }
})