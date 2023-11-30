import { createRouter, createWebHashHistory } from 'vue-router'

import Ben from './views/Ben.vue'
import LastDesires from './views/LastDesires.vue'
import ThumbsUp from './views/ThumbsUp.vue'
import Elijah from './views/Elijah2.vue'
import Kolleen from './views/Kolleen2.vue'
import Ivan from './views/Ivan2.vue'
import Abram from './views/Abram2.vue'
import Main from './views/Main.vue'
// Vue.use(Router)

const router = createRouter({
  history: createWebHashHistory(),
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
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router;
