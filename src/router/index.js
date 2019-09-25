// 这个页面专门用来导入路由的
import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
<<<<<<< HEAD
<<<<<<< HEAD
import Game from '@/components/Game'
=======
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库
=======
import Game from '@/components/Game'
>>>>>>> 添加游戏界面，创建相应的路由和组件

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
<<<<<<< HEAD
=======
>>>>>>> 添加游戏界面，创建相应的路由和组件
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
<<<<<<< HEAD
=======
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库
=======
>>>>>>> 添加游戏界面，创建相应的路由和组件
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    }
  ]
})
