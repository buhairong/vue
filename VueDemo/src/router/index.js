import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../Views/About.vue'
import Home from '../Views/Home.vue'
import News from '../Views/News.vue'
import Message from '../Views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/',
      redirect:'./about'
    }
  ]
})
