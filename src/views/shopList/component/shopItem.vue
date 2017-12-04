<template>
    <div class="item">
        <div>
            <div class="item-img">
                <img :alt="shopItem.name" :src="list.ali_image" style="opacity: 1;">
            </div>
            <h6>{{list.title}}</h6>
            <h3 >{{list.sub_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list">
                    <li 
                        v-for="(e,i) in skuList" 
                        :key="e.sku_id"
                        @mouseover='changeItem(i)'
                    >
                        <a href="javascript:;" :class="{active:i===index}">
                            <img :src="e.image">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn">
                    <a href="javascript:;" target="_blank">查看详情</a> 
                </span>
                <span v-show="list.direct_to_cart" @click='addCar' class="item-blue-btn">加入购物车 </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{list.price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <a href="javascript:;" target="_blank"></a>
            </div>
        </div>
    </div>
</template>

<script>
import {addCarShops} from './../../../getData/method'
export default {
    data(){
        return {
            index:0
        }
    },
    props:{
        shopItem:{
            type:Object
        }
    },
    computed:{
        list(){
            return this.shopItem.sku_list[this.index]
        },
        skuList(){
            return this.shopItem.sku_list
            addCarShops().then
        }
    },
    methods:{
        changeItem(i){
            this.index=i
        },
        addCar(){
            let id = this.list.sku_id;
            addCarShops(id,1).then((data)=>{
                console.log(data.data)
            })
        }
    }
};
</script>

<style>

</style>
