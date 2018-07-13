<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <mt-swipe :auto="4000" style="height: 150px;width: 100%;">
        <mt-swipe-item><img style="height: 100px;width: 100%;" src="http://static.ydcss.com/uploads/ydui/1.jpg"></mt-swipe-item>
        <mt-swipe-item> <img style="height: 100px;width: 100%;" src="http://static.ydcss.com/uploads/ydui/2.jpg"></mt-swipe-item>
        <mt-swipe-item> <img style="height: 100px;width: 100%;" src="http://static.ydcss.com/uploads/ydui/3.jpg"></mt-swipe-item>
      </mt-swipe>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <no-ssr>
          <yd-button size="large" type="primary">
            <nuxt-link :to="{path: 'home', query: {newsId: '12',poes:36}}">路由带参跳转</nuxt-link>
          </yd-button>
        </no-ssr>
      </div>
      <no-ssr>
        <yd-button size="large" type="primary">
          <nuxt-link to="/home"  target="_blank">路由跳转</nuxt-link>
        </yd-button>
      </no-ssr>
      <no-ssr>
       <yd-button size="large" type="primary">
            <nuxt-link to="/login">跳转login</nuxt-link>
         </yd-button>
        </no-ssr>  
      <mt-button type="default" @click="clicks()">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
      <mt-swipe>
  <mt-swipe-item>1111</mt-swipe-item>
  <mt-swipe-item>2222</mt-swipe-item>
  <mt-swipe-item>3333</mt-swipe-item>
</mt-swipe>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import { Toast } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import AppLogo from '~/components/AppLogo.vue'

if (process.BROWSER_BUILD) {
  require('~/assets/static/mui.min.js');
}
// this.$router.push({path: '/company_detail', query: {conpanyId: id}});
export default {
  components: {
    AppLogo
  },
  head: {
    script: [
      { src: 'js/ydui.flexible.js' },
//    { src: 'js/mui.min.js' },
    ],
    link: [
//  	{ rel: 'stylesheet', href: 'css/mui/css/mui.min.css' }
      // { rel: 'stylesheet', href: 'css/zzsc.css' }
    ]
  },
  mounted() {
//  axios.get('help/header').then(({status, data})=> {
//    console.log(data)
//  })

  },
  created(){
//		console.log($('div'));

  },
  methods: {
  	clicks(){
  		Toast({
message: '提示',
position: 'bottom',
duration: 5000
});
  	}
  }
  	
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
