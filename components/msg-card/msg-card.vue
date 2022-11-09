<template>
  <!--  <view class="container about-container">
    <view class="about-wrap card-wrap wave-background">
      <view class="about-title card-title">
        <text class="splatoon">ABOUT</text>
      </view>
      <view class="about-content">
        <view>小程序中的数据来自：
          <text selectable="true">https://spla3.yuu26.com</text>
        </view>
      </view>
    </view>
  </view> -->

  <view class="container about-container">
    <view class="about-wrap card-wrap wave-background">
      <!-- 标题 -->
      <view class="about-title card-title">
        <text class="splatoon">一般比赛</text>
      </view>
      <!-- 内容 -->
      <view class="about-content" v-for="(item,index) in schedules.nodes" :key="index">
        <view>
          <!-- 内标题和时间 -->
          <view class="scheduleRule">
            <image class="img" src="https://splatoon3.ink/assets/regular.dc98f8b8.svg" />
            <text v-if="rule === 'regularSchedules'">{{getLocaleWord(item.regularMatchSetting.vsRule.id)}}</text>
            <view class="scheduleTime">
              <text class="splatoon spltstart_time">{{item.startTime | formatDate}}-</text>
              <text class="splatoon start_time">{{item.endTime| formatDate}}</text>
            </view>
          </view>
          <!-- 地图 -->
          <view class="stages" v-if="rule === 'regularSchedules'" :key='1'>
            <view class="stage" v-for="sitem in schedules.nodes[index].regularMatchSetting.vsStages" :key="sitem.id">
              <image :src="sitem.image.url"></image>
              <text class="stagesName">{{getLocaleWord(sitem.id)}}</text>
            </view>
          </view>

          <view class="stages" v-if=" rule === 'bankaraSchedules'" :key='2'>
            <view class="stage" v-for="sitem in schedules.nodes[index].bankaraMatchSettings.vsStages" :key="sitem.id">
              <image :src="sitem.image.url"></image>
              <text class="stagesName">{{getLocaleWord(sitem.id)}}</text>
            </view>
          </view>

          <view class="stages" v-if="rule === 'xSchedules'" :key='3'>
            <view class="stage" v-for="sitem in schedules.nodes[index].xMatchSetting.vsStages" :key="sitem.id">
              <image :src="sitem.image.url"></image>
              <text class="stagesName">{{getLocaleWord(sitem.id)}}</text>
            </view>
          </view>
          <view class="stages" v-if="rule === 'leagueSchedules'" :key='4'>
            <view class="stage" v-for="sitem in schedules.nodes[index].leagueMatchSetting.vsStages" :key="sitem.id">
              <image :src="sitem.image.url"></image>
              <text class="stagesName">{{getLocaleWord(sitem.id)}}</text>
            </view>
          </view>
          <view class="stages" v-if="rule === 'festSchedules'" :key='5'>
            <view class="stage" v-for="sitem in schedules.nodes[index].festMatchSetting.vsStages" :key="sitem.id">
              <image :src="sitem.image.url"></image>
              <text class="stagesName">{{getLocaleWord(sitem.id)}}</text>
            </view>
          </view>

        </view>
      </view>
    </view>

    <view class="splatoon about-more">到底了</view>
  </view>
  </view>

</template>

<script>
  export default {
    name: "msg-card",
    props: ['schedules', 'rule'],
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
      // 改模式
      getRule() {
        let str = this.str;
        switch (this.rule) {
          case 'regularSchedules':
            str = 'regularMatchSetting';
          case 'bankaraSchedules':
            str = 'bankaraMatchSettings';
          case 'xSchedules':
            str = 'xMatchSetting';
          case 'leagueSchedules':
            str = 'leagueMatchSetting';
          case 'festSchedules':
            str = 'festMatchSetting';
          default:
            break;
        }
        this.str = str;
      }
    },
    filters: {
      formatDate(date) {
        const ndate = new Date(date);
        return ndate.getHours() + ':00';
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

<style lang="less">
  .about-container {
    margin-top: 40rpx;
    margin-bottom: 40rpx;
  }

  .about-wrap {
    background-color: #f8dc47;
    color: #ffffff;
  }

  .about-title {
    margin-top: 20rpx;
    margin-bottom: 20rpx;

    text {
      font-size: 56rpx;
      line-height: 1em;
    }
  }

  .about-content {
    margin-top: 15rpx;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 30rpx;
    font-size: 32rpx;
    padding: 20rpx;

    text {
      line-height: 1.5em;
    }

    view {
      margin-bottom: 20rpx;

      &:last-child {
        margin-bottom: 0rpx;
      }
    }

    .about-word {
      margin-left: 2rpx;
      margin-right: 12rpx;
    }

  }

  .scheduleRule {
    display: flex;
    position: relative;
  }

  .scheduleRule .img {
    width: 40rpx;
  }

  .scheduleRule .scheduleTime {
    position: absolute;
    right: 0;
  }

  // 地图
  .stages {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .stages .stage {
    display: flex;
    flex-direction: column;
  }

  .stages .stage image {
    border-radius: 20rpx;
    width: 250rpx;
    height: 120rpx;
  }

  .stages .stage .stagesName {
    top: 40rpx;
    margin: 20rpx 0rpx;
    font-size: 8rpx;
    text-align: center;
  }
</style>
