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
import Game from '@/components/Game'

export default {
  name: 'App',
  components:{
    BlogHead,AddBlog,ShowBlog,Game
  }
}
</script>

<style>
 

</style>
