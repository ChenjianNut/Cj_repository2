// 这个页面专门用来导入路由的
import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
import Game from '@/components/Game'

Vue.use(Router)
// 加上mode:"history"之后可以去掉URL里面的锚点
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBlog
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    }
  ]
})
