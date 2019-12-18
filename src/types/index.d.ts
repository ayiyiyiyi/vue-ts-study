// namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。

declare namespace GlobalVal {
    interface Shop {
        url: string,
        imgUrl: string,
        shopName: string,
        distance: string,
        desc: string,
        priceCurrent: number,
        priceOld: number,
        count: string
    }
    interface AjaxResponse {
        result: any,
        code: number,
        msg?: string
    }
}
