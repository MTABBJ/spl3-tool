<template>
  <view class="content">
    <!-- <msgShort-card :schedules="regularSchedules" :rule="rule"></msgShort-card> -->

    <!-- testarea    -->
    <view class="container about-container">
      <view class="about-wrap card-wrap wave-background">
        <!-- 标题 -->
        <view class="about-title card-title">
          <text class="splatoon">一般比赛</text>
        </view>
        <!-- 内容 -->
        <!-- <view class="about-content" v-for="(item,index) in schedules.nodes.splice(0,2)" :key="index"> -->
        <view class="about-content" v-for="(item,index) in regularSchedules.nodes.splice(0,2)" :key="index">
          <!-- 内标题和时间 -->
          <view class="scheduleRule">
            <image class="img" src="https://splatoon3.ink/assets/regular.dc98f8b8.svg" />
            <text v-if="true">{{getLocaleWord(item.regularMatchSetting.vsRule.id)}}</text>
            <view class="scheduleTime">
              <text class="splatoon spltstart_time">{{item.startTime | formatDate}}-</text>
              <text class="splatoon start_time">{{item.endTime| formatDate}}</text>
            </view>
          </view>
          <!-- 地图 -->
          <view class="stages">
            <view class="stage" v-for="sitem in regularSchedules.nodes[index].regularMatchSetting.vsStages"
              :key="sitem.id">
              <image :src="sitem.image.url"></image>
              <text class="stagesName">{{getLocaleWord(sitem.id)}}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="splatoon about-more">更多</view>
    </view>
    <!-- testarea  end   -->
    <!-- <msgShort-card :schedules="regularSchedules"></msgShort-card> -->

  </view>
</template>

<script>
  import msgShortCard from '../../components/msgShort-card/msgShort-card.vue'
  export default {
    data() {
      return {
        schedulesInfo: { // 公用日程数据
          rule: 'regularSchedules', // 规则
          nSchedules: [], //当前选择数据
          nSchedulesMatchSetting: '', // 当前的内部MatchSetting字符
          nMatchSetting: [], // 全部node里的MatchSetting数据
        },
        regularSchedules: [], //涂地
        bankaraSchedules: [], // 真格
        xSchedules: [], //x
        leagueSchedules: [], //组队
        festSchedules: [], //fes
        localeMap: [], //国际化键值对
      }
    },
    components: {
      "msgShort-card": msgShortCard
    },
    onLoad() {
      this.getSchedule();

      this.getLocalejson();
    },
    methods: {
      //获取日程数据
      async getSchedule() {
        const res = await this.$myRequest({
          // url: "/api/schedule",
          url: "/data/schedules.json?id=zh-CN",
        })
        console.log("res", res.data);

        this.regularSchedules = res.data.regularSchedules;
        this.bankaraSchedules = res.data.bankaraSchedules;
        this.xSchedules = res.data.xSchedules;
        this.leagueSchedules = res.data.leagueSchedules;
        this.festSchedules = res.data.festSchedules;

        //分析日程组件数据
        /*        let [nschedules, nSchedulesMatchSetting, nMatchSetting] = this.schedulesInfo;
                nschedules = res.data.regularSchedules;
                console.log('testschedules', nschedules); */


      },
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
      //判断模式
      isSchedules(schedules) {
        //需要判断regularMatchSetting的标志
        for (let x in schedules) {
          if (x == 'regularMatchSetting') {
            return true;
          }
        }
      },

    },
    filters: {
      formatDate(date) {
        const ndate = new Date(date);
        return ndate.getHours() + ':00';
      },

    },

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
