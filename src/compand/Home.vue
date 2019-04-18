<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item, index) in lunbo" :key="item.id">
        <img class="banner-img" :src="item.img" alt="">
      </mt-swipe-item>
  
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
        this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(response => {
          if (response.body.status === 0) {
             this.lunbo = response.body.message 
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

  .banner-img {
    width: 100%;
    height: 100%;
  }
</style>