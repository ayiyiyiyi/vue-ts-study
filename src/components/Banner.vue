<template>
    <div class="">
        <swiper class="banner" :options="swiperOption">
          <swiper-slide v-for="(item, i) in banners" :key="i"> 
            <div class="page">
              <div class="icons"  v-for="(page, j) in item" :key="j" @click="jumpToUrl(page.name)">
                <img alt="" :src="page.imgUrl">
                <div class="name">{{page.name}}</div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from 'vuex-class';
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper';
@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Banner extends Vue{
  @State banners: GlobalVal.Banner[]; 
  private swiperOption: Object = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }
  jumpToUrl(name: string): void {
    console.log(name);
  }
}
</script>

<style lang="scss">
.banner {
  padding-bottom: 25px;

  .page {
    .icons {
      display: inline-block;
      width: 20%;
      text-align: center;
      padding-top: 13px;

      img {
        height: 44px;
        width: 44px;
      }

      .name {
        font-size: 12px;
      }
    }
  }

  .swiper-pagination {
    bottom: 3px;

    span {
      background: #f5734b;
    }
  }
}
</style>
