import Vue from 'vue'
import Router from 'vue-router'
import Ben from './views/Ben.vue'
import LastDesires from './views/LastDesires.vue'
import ThumbsUp from './views/ThumbsUp.vue'
import Elijah from './views/Elijah.vue'
import Kolleen from './views/Kolleen.vue'
import Ivan from './views/Ivan.vue'
import Abram from './views/Abram.vue'
import Main from './views/Main.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/abram',
      name: 'abram',
      component: Abram
    },
    {
      path: '/ben',
      name: 'ben',
      component: Ben
    },
    {
      path: '/ivan',
      name: 'ivan',
      component: Ivan
    },
    {
      path: '/elijah',
      name: 'elijah',
      component: Elijah
    },
    {
      path: '/kolleen',
      name: 'kolleen',
      component: Kolleen
    },
    {
      path: '/thumbs-up',
      name: 'thumbsup',
      component: ThumbsUp
    },
    {
      path: '/last-desires',
      name: 'last-desires',
      component: LastDesires
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})