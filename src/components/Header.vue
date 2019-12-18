<template>
    <header>
        <div class="city">{{city}}</div>
        <div class="search-wrap" ref="search" :class="{'expand':expanded}">
            <span v-if="!searchValue" :class="{'move-left': foucused}">输入商户名、地点</span>
            <input type="text" ref="input" @input="onInputChange" v-model="searchValue" @focus="onFocus" @blur="onBlur">
        </div>
        <div class="user">
            <div class="icon"></div>
        </div>
    </header>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Action } from 'vuex-class';
@Component
export default class Header extends Vue {
    @Prop() private city!: string;
    @Action setSearchVal: (val:string) => void;
    searchValue: string = '';
    foucused: boolean = false;
    expanded: boolean = false;
    mounted() {
        this.onChangeSize();
    }
    onFocus(): void {
        this.foucused = true;
    }
    onBlur(): void {
        this.foucused = false;
    }
    onInputChange(): void {
        this.setSearchVal(this.searchValue);
    }
    onChangeSize(): void {
        const search: any = this.$refs.search;
        if (!search) {
            return;
        }
        window.addEventListener('scroll',(event: any) => {
            const scrollY: number = window.scrollY;
            const input: any = this.$refs.input;
            if (input) {
                input.blur();
            }
            this.expanded = scrollY >50 ? true : false;
        });
    }
}
</script>
<style lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 50px;
    line-height: 50px;
    background-color: #f63;
    color: #fff;
    text-align: center;
    z-index: 9;
}
.city{
    position: relative;
    width: 20%;
}
.user {
    position: absolute;
    right: 0;
    width: 20%;
    z-index: 99;
    height: 50px;
    .icon {
        background-image: url('//www.dpfile.com/app/app-m-module/static/d53930bbff0bf22cb8cea72503da44d9.png');
        background-repeat: no-repeat;
        background-position: left -67px;
        background-size: 250px;
        width: 28px;
        height: 100%;
        margin: 0 auto;
    }
}

.search-wrap {
    position: absolute;
    width: 60%;
    left: 0;
    right: 0;
    top: 10px;
    margin: auto;
    height: 30px;
    line-height: 30px;
    color: #b8b8b8;
    border-radius: 25px;
    background-color: #fff;
    -webkit-transition: width 0.15s ease;
    transition: width 0.15s ease;
    span {
        position: absolute;
        width: 120px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        &.move-left {
            left: 0;
            -webkit-transform: translateX(15px);
            transform: translateX(15px);
        }
    }
    input {
        position: absolute;
        left: 0;
        padding: 0 15px;
        margin: 0;
        width: 100%;
        box-sizing: border-box;
        color: #999;
        background: none;
        border: none;
        height: 30px;
        outline: none;
        caret-color: #f63;
      
    }
    &.expand {
        width: 90%;
    }
}
</style>

