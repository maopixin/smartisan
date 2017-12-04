let base = 'http://localhost:5000/api';
let Axios = require('axios')

let urlMap = {
    'shop_list':'/shop_list',
    'count':'/count'

}
//获取商品列表页
export function getShopListMethod(){
    return Axios.get( base + urlMap.shop_list );
};

//发送商品id和数量，用来记录购买的商品的id和数量
export function addCarShops(id,num){
    return Axios.get( base + urlMap.count,{
        params:{
            skuId:id,
            count:num
        }
    });
}