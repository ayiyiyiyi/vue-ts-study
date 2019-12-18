<template>
  <div id="app">
    <Headers city="南京" />
    <div class="content-wrapper">
      <ShopList />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from "vuex-class";
import Headers from './components/Header.vue';
import ShopList from './components/ShopList.vue';

@Component({
  components: {
    Headers,
    ShopList
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  color: #2c3e50;
}
.content-wrapper {
  padding-top: 50px;
}
</style>
