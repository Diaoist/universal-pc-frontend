<style lang="less" scoped>
.leftnav {
    position: absolute;
    width: 368px;
    left:0;
    height: 100%;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    text-align: left;
    .leftnav-list {
        padding-left: 20px;
        .leftnav-item {
            line-height: 45px;
            font-size: 25px;
            i {
                margin-left: 10px;
                color: #fff;
                width: 45px;
                line-height: 45px;
                height: 45px;
                margin-top: 12px;
            }
            .leftnav-item-text {
                color: #fff;
            }
        }
        .leftnav-text {
            margin-top: 20px;
            font-size: 15px;
        }
    }
}
</style>

<template>
    <div class="leftnav" v-if="showFlag">
        <div class="leftnav-list">
            <div class="leftnav-item">
                <a @click="hideLeftnav($event)" href=""><i class="el-icon-setting"></i></a>
            </div>
            <div class="leftnav-item">
                <a @click="showMenu($event)" href="">
                    <i class="el-icon-message"></i>
                    <span class="leftnav-item-text">浏览页面</span>
                </a>
            </div>
            <div class="leftnav-item">
                <a @click="showMenu($event)" href="">
                    <i class="el-icon-document"></i>
                    <span class="leftnav-item-text">浏览内容</span>
                </a>
            </div>
            <div class="leftnav-item">
                <a @click="showMenu($event)" href="">
                    <i class="el-icon-date"></i>
                    <span class="leftnav-item-text">浏览广告</span>
                </a>
            </div>
            <div class="leftnav-item">
                <a @click="showMenu($event)" href="">
                    <i class="el-icon-star-on"></i>
                    <span class="leftnav-item-text">网站</span>
                </a>
            </div>
            <div class="leftnav-text">设置</div>
            <div class="leftnav-item">
                <a @click="showMenu($event)" href="">
                    <i class="el-icon-date"></i>
                    <span class="leftnav-item-text">语言</span>
                </a>
            </div>
            <div class="leftnav-item">
                <a @click="showMenu($event)" href="">
                    <i class="el-icon-information"></i>
                    <span class="leftnav-item-text">帮助</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    props: {
      navFlag: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        showFlag: false,
      };
    },
    watch: {
      navFlag(val) {
        this.showFlag = val;
      },
    },
    computed: {
    },
    methods: {
      hideLeftnav(e) {
        e.preventDefault();
        this.showFlag = false;
        this.$emit('hideLeftnav', this.showFlag);
      },
      showMenu(e) {
        e.preventDefault();
      },
    },
    mounted() {
    },
  };
</script>
