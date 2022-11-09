<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="less">
  /*每个页面公共css */
  @import url('static/fonts/iconfont.css');
  @import 'static/less/global.less';

  page {
    background-color: #19232C;
    font-weight: bolder;
    color: white;
  }

  .hr {
    margin-top: 20rpx;
    margin-bottom: 20rpx;
    height: 0;
    border-bottom: 2rpx dashed #ffffff;
  }

  .img {
    height: auto;
  }
</style>
