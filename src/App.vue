<template>
  <div id="app" class="page-group">
    <transition :name="transitionName">
            <keep-alive>
                  <router-view class="child-view"></router-view>
            </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
        transitionName:'slide-left',
    }
  },
  mounted() {


  },
  created() {

  },
  computed: {

  },
  methods: {
     
  },
   watch: {
      '$route' (to, from) {
            // 页面等级越大 就是前进 旧的页面往左边滑动 ,反之就会回退 旧的页面往右边滑动
            if(to.meta.level > from.meta.level){
               this.transitionName = 'slide-left';
            }else{
               this.transitionName = 'slide-right';
            }
      }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html{
  font-size: 40px;
}
.page-group,.page{
  position: absolute;
  top:0;
  left:0;
  bottom: 0;
  right: 0;
}
.child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
