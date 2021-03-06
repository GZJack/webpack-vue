﻿import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      meta:{title:'主页',level:1}
    },
    {
      path:'/*',
      redirect:'/home',
    }
  ]
})
