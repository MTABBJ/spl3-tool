<template>
  <view class="goods_list">
    <!-- 今日精选 -->
    <view class="pickupBrand">
      <text class="pickupBrandTitle">今日精选：{{getLocaleWord(pickupBrand.brand.id)}}
      </text>
      <text class="timeout">到{{pickupBrand.saleEndTime | formatDate}}为止</text>
      <view class="gearShop">
        <gear-card :gesotownInfo="brandGears"></gear-card>
      </view>
    </view>
    <hr />
    <!-- 目前贩卖 -->
    <view class="limitedGears">
      <text class="pickupBrandTitle">目前贩卖的装备</text>
      <gear-card :gesotownInfo="limitedGears"></gear-card>
    </view>
  </view>
</template>

<script>
  import gearCard from '../../components/gear-card/gear-card.vue'
  export default {
    data() {
      return {
        pickupBrand: '',
        brandGears: '',
        limitedGears: '',
        localeMap: [], //国际化键值对
      }
    },
    components: {
      "gear-card": gearCard
    },
    onLoad() {
      this.getGear();
      this.getLocalejson();
    },
    methods: {
      //获取装备数据
      async getGear() {
        const res = await this.$myRequest({
          url: "/data/gear.json?id=zh-CN"
        })
        console.log('gearres', res.data);
        this.pickupBrand = res.data.gesotown.pickupBrand;
        this.brandGears = res.data.gesotown.pickupBrand.brandGears;
        this.limitedGears = res.data.gesotown.limitedGears;

      },
      //获取对应语言数据
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
  }
</script>

<style lang="scss">
  .pickupBrand,
  .limitedGears {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .pickupBrandTitle {
    text-align: center;
    margin: 20rpx;
    font-size: 36rpx;
  }

  .timeout {
    color: #EB4633;
    margin: 10rpx;
  }

  .pickupBrand .gearShop {
    display: flex;
    align-items: center;
    flex-direction: column;
  }


  //之后都是组件样式
  .pickupBrand .gearShop .gearCard {
    position: relative;
    width: 90%;
    height: 220rpx;
    display: flex;
    background-color: $page-color2;
    border-radius: 20rpx;
    padding: 5rpx;
  }

  .gear-left {
    flex: 1;
    margin: 10rpx;
  }

  .gear-left img {
    width: 160rpx;
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
    // margin: 20rpx 0;
    padding: 6rpx;
  }

  .gear-right .gearDetails {
    display: flex;
    margin: 20rpx 0;
  }

  // logo
  .gear-right .gearDetails img {
    width: 50rpx;
    background-color: white;
    border-radius: 10rpx;
  }

  .gear-right .gearDetails .gearName {
    margin-left: 20rpx;
  }

  // 装备技能
  .gearCss img {
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

  .gearPower .primaryGearPower img {
    width: 70rpx;
  }


  .gearPower .additionalGearPowers {
    display: flex;
    width: 48rpx;
    height: 48rpx;
    margin: 8rpx 4rpx;
  }

  .gearPower .additionalGearPowers img {
    width: 48rpx;
  }

  // 右下角价格
  .gearPrice {
    position: absolute;
    right: -20rpx;
    bottom: 40rpx;
    width: 240rpx;
    transform: rotate(-4deg);
    background: black;
    padding: 10rpx;
  }

  .gearPrice img {
    margin: 0 20rpx;
  }
</style>
