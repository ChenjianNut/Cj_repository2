// 这个页面专门用来导入路由的
import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
<<<<<<< HEAD
import Game from '@/components/Game'
=======
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库

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
<<<<<<< HEAD
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
=======
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    }
  ]
})
