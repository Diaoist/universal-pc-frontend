<style lang="less" scoped>
.footerWrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    .footer {
        height: 70px;
        background-color: #1a2d4b;
        .container-left {
            float: left;
            font-size: 20px;
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
            
            float: right;
            i {
                margin-right: 10px;
                color: #fff;
                width: 45px;
                font-size: 20px;
                line-height: 45px;
                height: 45px;
                margin-top: 12px;
            }
        }
    }
}
</style>

<template>
<div class="footerWrapper">
    <div class="footer">
      <div class="container-left">
        <i class="el-icon-d-arrow-right"></i>
      </div>
      <div class="container-right">
        <i class="el-icon-upload2"></i>
        <i class="el-icon-search"></i>
        <i class="el-icon-more"></i>
      </div>
      <div class="footer-txt">第一页</div>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    },
  };
</script>
