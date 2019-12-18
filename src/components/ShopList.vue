<template>
    <div class="shop-list">
        <div class="shop" v-for="(shop, i) in getShopList" :key="i" @click="jumpToUrl(shop.url)">
            <div class="logo">
                <img :src="shop.imgUrl" alt="">
                <span class="tag">免预约</span>
            </div>
            <div class="content">
                <div class="title">{{shop.shopName}}</div>
                <div class="desc">{{shop.desc}}</div>
                <div class="status">
                    <div class="price">
                        <span class="new">¥{{shop.priceCurrent}}</span>
                        <span class="old"> {{shop.priceOld}}</span>
                    </div>
                    <div class="count">{{shop.count}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State } from 'vuex-class';
@Component
export default class ShopList extends Vue {
    @State shops: GlobalVal.Shop[];
    @State searchVal: string;
    jumpToUrl(url: string): void {
        window.location.href = url;
    }
    get getShopList(): GlobalVal.Shop[] {
        return this.shops.filter((el: GlobalVal.Shop) => {
            return el.shopName.indexOf(this.searchVal) > -1
        });
    }
}
</script>
<style lang="scss">
.shop-list {
    .shop {
        display: -webkit-box;
        padding: 0 10px 10px 10px;
    }
    .logo {
        position: relative;
        img {
            width: 90px;
            height: 90px;
        }
        .tag {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 12px;
            -webkit-transform: scale(0.98);
            transform: scale(0.98);
            padding: 3px 7px;
            background-color: #000;
            color: #e0ba81;
        }
    }
    .content {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding-left: 10px;
        .title {
            font-size: 17px;
            font-weight: 700;
            color: #222;
            padding-right: 8px;
            text-align: left;
        }
        .desc {
            font-size: 13px;
            color: #777;
            padding: 10px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
        }
        .status {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .price {
                .new {
                    color: #f63;
                    font-size: 22px;
                    font-weight: 700;
                }
                .old {
                    color: #999;
                    font-size: 12px;
                    padding-left: 10px;
                    text-decoration: line-through;
                }
            }
            .count {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                font-size: 13px;
                color: #777;
                text-align: right;
            }
        }

    }
}
</style>
