<template>
  <div id="app">
    <Headers city="南京" />
    <div class="content-wrapper">
      <Banner />
      <Ads />
      <ShopList />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from "vuex-class";
import Headers from './components/Header.vue';
import Banner from './components/Banner.vue';
import Ads from './components/Ads.vue';

import ShopList from './components/ShopList.vue';

@Component({
  components: {
    Headers,
    ShopList,
    Ads,
    Banner
  },
})
export default class App extends Vue {
  @Action initAjax: () => void;
  mounted() {
    this.initAjax();
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  color: #2c3e50;
  background: #fefefe;
}
.content-wrapper {
  padding-top: 50px;
}
</style>
