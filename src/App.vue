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
import Game from '@/components/Game'
=======
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库

export default {
  name: 'App',
  components:{
<<<<<<< HEAD
    BlogHead,AddBlog,ShowBlog,Game
=======
    BlogHead,AddBlog,ShowBlog
>>>>>>> 添加，展示功能路由跳转都已经实现，数据未上传到自己的数据库
  }
}
</script>

<style>
 

</style>
