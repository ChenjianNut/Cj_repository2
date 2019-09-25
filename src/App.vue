<template>
  <div id="app">
    <blog-head></blog-head>
    <router-view/>
  </div>
</template>

<script>
import BlogHead from '@/components/BlogHead'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
<<<<<<< HEAD
<<<<<<< HEAD
import Game from '@/components/Game'
=======
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库
=======
import Game from '@/components/Game'
>>>>>>> 添加游戏界面，创建相应的路由和组件

export default {
  name: 'App',
  components:{
<<<<<<< HEAD
<<<<<<< HEAD
    BlogHead,AddBlog,ShowBlog,Game
=======
    BlogHead,AddBlog,ShowBlog
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库
=======
    BlogHead,AddBlog,ShowBlog,Game
>>>>>>> 添加游戏界面，创建相应的路由和组件
  }
}
</script>

<style>
 

</style>
