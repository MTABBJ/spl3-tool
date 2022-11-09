<template>
  <view class="container">
    <!-- 测试组件用 -->
    <gear-card></gear-card>
    <msg-card></msg-card>
  </view>
</template>


<script>
  import gearCard from '../../components/gear-card/gear-card.vue'
  import msgCard from '../../components/msg-card/msg-card.vue'
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    components: {
      "gear-card": gearCard,
      "msg-card": msgCard
    },
    onLoad() {
      // this.getGear();
    }
  }
</script>

<style lang="less">

</style>
