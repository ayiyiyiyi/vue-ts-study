<template>
    <div class="headline-wrap">
        <div class="logo"></div>
        <swiper class="headline" :options="swiperOption">
            <swiper-slide class="article" v-for="(item, i) in ads" :key="i">
                <div class="title">{{item.title}}</div>
                <div class="img-wrap">
                    <img :src="item.imgUrl" alt="">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from 'vuex-class';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
@Component ({
    components: {
        swiper,
        swiperSlide
    }
})
export default class Advertisement extends Vue {
    @State ads: GlobalVal.Ads[]
    private swiperOption: Object = {
        autoplay: true,
        loop: true,
        direction: 'vertical'
    }
}
</script>

<style lang="scss">
.headline-wrap {
  display: flex;
  align-items: center;
  padding: 10px 0;
  height: 50px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  text-align: left;
  margin-bottom: 20px;
  .logo {
    height: 50px;
    width: 50px;
    background-image: url('//www.dpfile.com/app/app-m-module/static/a41a9b3b0c7b20af96d3cacbfd8692c5.png');
    background-position: -142px 8px;
    background-repeat: no-repeat;
    background-size: 186px;

    &:after {
      background-image: linear-gradient(90deg, #e1e1e1, #e1e1e1 50%, transparent 0);
      background-position: 100% 0;
      background-size: 1px 100%;
      background-repeat: no-repeat;
      content: '';
      display: block;
      height: 30px;
      margin-top: 10px;
    }
  }

  .headline {
    flex: 1;
    height: 50px;

    .article {
      display: flex;
      align-items: center;

      .title {
        font-weight: bold;
        width: 81%;
        padding: 0 10px;
        box-sizing: border-box;
      }

      .img-wrap {
        img {
          height: 45px;
          width: 45px;
        }
      }
    }
  }
}
</style>

