<template>
  <view class="container gear-container">
    <view class="gearCard card-wrap" v-for="(item,index) in gesotownInfo" :key="index">
      <!-- 左边商品图片 -->
      <view class="gear-left">
        <image class="img" :src="item.gear.image.url" mode="" />
      </view>
      <!-- 右边商品信息 -->
      <view class="gear-right">
        <text class="geartime">还剩{{item.saleEndTime | formatEndTime}}小时</text>
        <view class="gearDetails">
          <image class="img" :src="item.gear.brand.image.url" title="" />
          <text class="gearName">{{getLocaleWord(item.gear.__splatoon3ink_id)}}</text>
        </view>
        <view class="gearPower">
          <!-- 大技能 -->
          <view class="primaryGearPower gearCss">
            <image class="img" :src="item.gear.primaryGearPower.image.url" alt=""></image>
          </view>
          <!-- 小技能 -->
          <view class="additionalGearPowers gearCss" v-for="sitem in gesotownInfo[index].gear.additionalGearPowers"
            :key="sitem.id">
            <image class="img" :src="sitem.image.url" alt="" />
          </view>

        </view>
      </view>

      <!-- 右下角价格 -->
      <view class="gearPrice">
        <image class="img" src="https://splatoon3.ink/assets/gesotown-coin.a645556e.svg" alt="coin" />
        <text class="splatoon">{{item.price}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "gear-card",
    props: ['gesotownInfo'],
    data() {
      return {
        localeMap: [], //国际化键值对
      };
    },
    methods: {
      //获取对应语言数据 [待优化]
      async getLocalejson() {
        const localeJson = await this.$myRequest({
          url: "/data/locale/zh-CN.json",
        })
        const localeMap = new Map(); //国际化键值对
        let localeIds = []; //key
        let nlocaleIds = []; //value
        // 筛选数据
        for (let x in localeJson) {
          for (let y in localeJson[x]) { //id层
            localeIds.push(y);
            nlocaleIds.push(localeJson[x][y].name);
            for (let z in localeIds) {
              localeMap.set(localeIds[z], nlocaleIds[z]);
            }
          }
        }
        this.localeMap = localeMap;
        // console.log('localeMap', localeMap);
      },
      // 根据id改语言
      getLocaleWord(id) {
        let localeMap = this.localeMap;
        return localeMap.get(id);
      },
    },
    filters: {
      formatDate(date) {
        const ndate = new Date(date);
        return ndate.toLocaleString();
      },
      formatEndTime(date) {
        const endTime = (new Date(date).getTime() - new Date().getTime()) / 60 / 60 / 1000;
        return endTime.toFixed(2);
      },

    },

    created() {
      this.getLocalejson();
      /*      setInterval(() => {
              console.log("执行定时器");
            }, 1000) */
    },
    destroyed() {
      console.log('销毁定时器');
    }
  }
</script>

<style lang="scss">
  .gearCard {
    width: 90%;
    display: flex;
    position: relative;
    height: 220rpx;
    background-color: $page-color2;
    border-radius: 20rpx;
    margin: 14rpx 0;
    padding: 5rpx;
  }

  .gear-left {
    flex: 1;
    height: 180rpx;
    margin: 10rpx;
  }

  .gear-left .img {
    width: 160rpx;
    height: 100%;
  }

  .gear-right {
    margin: 10rpx;
    width: 540rpx;
    /*    display: flex;
    align-items: center;
    flex-direction: column; */
  }

  .gear-right .geartime {
    font-size: 22rpx;
    border-radius: 10rpx;
    background-color: #6E8192;
    padding: 6rpx;
  }

  .gear-right .gearDetails {
    display: flex;
    margin: 20rpx 0;
  }

  // logo
  .gear-right .gearDetails .img {
    width: 40rpx;
    height: 40rpx;
    background-color: white;
    border-radius: 10rpx;
  }

  .gear-right .gearDetails .gearName {
    margin-left: 10rpx;
    font-size: 20rpx;
  }

  // 装备技能
  .gearCss .img {
    background-color: black;
    border-radius: 50%;
  }

  .gearPower {
    display: flex;
  }

  .gearPower .primaryGearPower {
    width: 70rpx;
    height: 70rpx;
  }

  .gearPower .primaryGearPower .img {
    width: 70rpx;
    height: 100%;
  }


  .gearPower .additionalGearPowers {
    display: flex;
    margin: 8rpx 4rpx;
  }

  .gearPower .additionalGearPowers .img {
    margin: 3rpx 0rpx 0rpx 4rpx;
    width: 50rpx;
    height: 50rpx;
  }

  // 右下角价格
  .gearPrice {
    position: absolute;
    right: -20rpx;
    bottom: 20rpx;
    width: 240rpx;
    transform: rotate(-2deg);
    background: #1B1B1B;
    padding: 0rpx 5rpx;
  }

  .gearPrice .img {
    margin: 0px 20rpx -10rpx 10rpx;
    width: 45rpx;
    height: 45rpx;
  }
</style>
