<template>
  <div id="main">
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<shop-item 
							v-for="(e,i) in list" 
							:key="e.id"
							:shopItem="e"
						></shop-item>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import {getShopListMethod} from '../../getData/method';
	import shopItem from './component/shopItem.vue';
	let list = [];

	export default {
		data(){
			return {
				list
			}
		},
		components:{
			shopItem
		},
		created(){
			let _this = this;
			
			getShopListMethod().then(function(data){
				_this.list = data.data.data.list;
			})
		},
		computed:{
			// shopList(){
			// 	return 
			// }
		}
	}

</script>