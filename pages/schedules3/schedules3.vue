<template>
  <view class="cl">s</view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        scheduleList: [] // 日程数据
      }
    },
    onLoad() {
      this.getSchedule();
    },
    methods: {
      //获取日程数据
      async getSchedule() {
        const res = await this.$myRequest({
          url: "https://spla3.yuu26.com/api/schedule",
        })
        console.log("res", res);
        // this.scheduleList
      },
    }

  }
</script>

<style lang="scss">
</style>
