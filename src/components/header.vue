<style lang="less" scoped>
.headerWrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 70px;
    .header {
        height: 70px;
        background-color: #1a2d4b;
        .container-left {
            float: left;
            font-size: 25px;
            i {
                margin-left: 10px;
                color: #fff;
                width: 45px;
                line-height: 45px;
                height: 45px;
                margin-top: 12px;
            }
            .header-txt {
                color: #fff;
                font-weight: bold;
            }
        }
        .container-right {
            font-size: 25px;
            float: right;
            i {
                margin-right: 10px;
                color: #fff;
                width: 45px;
                line-height: 45px;
                height: 45px;
                margin-top: 12px;
            }
        }
    }
}
.footerWrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    .footer {
        height: 70px;
        background-color: #1a2d4b;
        .container-left {
            float: left;
            font-size: 25px;
            i {
                margin-left: 10px;
                color: #fff;
                width: 45px;
                line-height: 45px;
                height: 45px;
                margin-top: 12px;
            }
            .header-txt {
                color: #fff;
                font-weight: bold;
            }
        }
        .footer-txt {
            color: #fff;
            // float: left;
            font-size: 20px;
            line-height: 70px;
            height: 45px;
        }
        .container-right {
            font-size: 25px;
            float: right;
            i {
                margin-right: 10px;
                color: #fff;
                width: 45px;
                line-height: 45px;
                height: 45px;
                margin-top: 12px;
            }
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>

<template>
<div>
  <div class="headerWrapper" @mouseenter="showHeader($event)" @mouseleave="showHeader($event)">
    <transition name="fade">
    <div class="header" v-show="showFlag">
      <div class="container-left">
        <a @click="showMenu($event)" href=""><i class="el-icon-setting"></i></a>
        <span class="header-txt">九月 2017</span>
      </div>
      <div class="container-right">
        <a @click="showMenu($event)" href=""><i class="el-icon-edit"></i></a>
        <a @click="showMenu($event)" href=""><i class="el-icon-menu"></i></a>
        <a @click="showMenu($event)" href=""><i class="el-icon-caret-bottom"></i></a>
      </div>
    </div>
    </transition>
  </div>

  <div class="footerWrapper" >
    <transition name="fade">
      <div class="footer" v-show="showFlag">
        <div class="container-left">
          <a @click="showMenu($event)" href=""><i class="el-icon-d-arrow-right"></i></a>
        </div>
        <div class="container-right">
          <a @click="showMenu($event)" href=""><i class="el-icon-upload2"></i></a>
          <a @click="showMenu($event)" href=""><i class="el-icon-search"></i></a>
          <a @click="showMenu($event)" href=""><i class="el-icon-more"></i></a>
        </div>
        <div class="footer-txt">第一页</div>
      </div>
    </transition>
  </div>
  <left-nav :navFlag="navFlag" @hideLeftnav="changeNavFlag"></left-nav>
</div>
</template>

<script>

  export default {
    data() {
      return {
        showFlag: false,
        navFlag: false,
      };
    },
    computed: {
    },
    methods: {
      showHeader(e) {
        e.preventDefault();
        if (!this.navFlag) this.showFlag = !this.showFlag;
      },
      changeNavFlag(flag) {
        this.navFlag = flag;
      },
      showMenu(e) {
        e.preventDefault();
        this.showFlag = false;
        this.navFlag = true;
      },
    },
    mounted() {
    },
  };
</script>
