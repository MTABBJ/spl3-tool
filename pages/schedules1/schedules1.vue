<template>
  <view class="content">
    <msg-card :schedules="regularSchedules" :rule="rule"></msg-card>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        rule: 'regularSchedules', // 规则
        schedules: [], // 日程数据
        regularSchedules: [], //涂地
        bankaraSchedules: [], // 真格
        xSchedules: [], //x
        leagueSchedules: [], //组队
        festSchedules: [], //fes
      }
    },
    onLoad() {
      this.getSchedule();
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

      },

      //获取规则
      getRule() {

      },
    }

  }
</script>

<style lang="scss">
</style>
