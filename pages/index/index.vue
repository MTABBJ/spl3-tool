<template>

  <view class="content">
    <!-- 公告区域 -->
    <view class="news">
      <text class="title">公告栏</text>
      <text class="newstext splatoon">
        2022.10.25公告
      </text>
    </view>

    <!-- icon导航 -->
    <view class="modeles">
      <view class="nav-tabs" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
        <image :src="item.icon"></image>
        <text class="title">{{item.title}}</text>
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    data() {
      return {
        navs: [{
            icon: '/../../static/ika.png',
            title: '商城',
            path: "/pages/shop/shop"
          },
          {
            icon: '/../../static/ika.png',
            title: '穿搭',
            path: "/pages/wear/wear"
          },
          {
            icon: '/../../static/ika.png',
            title: '日程',
            path: "/pages/schedules/schedules"
          }, {
            icon: '/../../static/battle-regular.png',
            title: '涂地',
            path: "/pages/schedules1/schedules1"
          }, {
            icon: '/../../static/battle-ranked.png',
            title: '蛮颓挑战',
            path: "/pages/schedules2/schedules2"
          }, {
            icon: '/../../static/battle-ranked.png',
            title: '蛮颓开放',
            path: "/pages/schedules3/schedules3"
          }, {
            icon: 'https://splatoon3.ink/assets/coop.183e21d9.svg',
            title: '鲑鱼跑',
            path: "/pages/schedules4/schedules4"
          }, {
            icon: '/../../static/fes.png',
            title: '祭典',
            path: "/pages/fes/fes"
          },
        ]
      }
    },
    onLoad() {},
    methods: {
      // 导航点击功能函数
      navItemClick(url) {
        uni.navigateTo({
          url
        })
      }


    }
  }
</script>

<style lang="scss">
  .iconfont {
    color: $main-color;
    font-size: 100rpx
  }

  .content {
    /*    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }

  .news {
    margin: 40rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .news text {
    color: white;
  }

  .news .newstext {
    width: 100%;
    height: 100%;
    margin: 20rpx;
    padding: 20rpx;
    border-radius: 20rpx;
    color: white;
    background-color: $page-color2;
    text-align: center;
  }

  // 导航
  .modeles {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 20rpx;
  }

  .modeles .nav-tabs {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 18rpx;
  }

  image,
  .mainIcon {
    width: 160rpx;
    height: 160rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    font-weight: bolder;
    color: white;
  }
</style>
