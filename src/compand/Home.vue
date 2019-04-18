<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

  import { Toast } from 'mint-ui'

  export default {
    data() {
      return {
        lunbo : []
      }
    },
    methods: {
      getLunboInfo() {
        this.$http.get('').then(response => {
          if (response.body.status === 0) {
            Toast('成功')
          } else {
            Toast('失败')
          }
        }, response => {
          Toast('失败')
        })
      }
    },
    created() {
      this.getLunboInfo()
    },
  }
</script>


<style scoped lang="scss">
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red
      }

      &:nth-child(2) {
        background-color: blue
      }

      &:nth-child(3) {
        background-color: green
      }
    }
  }
</style>