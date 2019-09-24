<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="请搜素">
        <!-- 变历下面的计算属性，实现过滤的功能 -->
        <div v-for="blog in filrterBlogs" :key="blog.id" class="single-blog">
            <!-- 给博客的标题添加一个路由跳转 -->
            <!-- <h2 v-rainbow>{{blog.title |to-uppercase}}</h2> -->
            <!-- 这里需要给to添加一个v-bind -->
            <router-link :to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title |to-uppercase}}</h2></router-link>
            <article>{{blog.body|snippet}}</article>
        </div>
       
        
    </div>
</template>
<script> 
export default {
    name:'show-blogs',
    data(){  
        return {
            blogs:[],
            search:'', 
        }
    },
    created(){
        // 使用vue-resourcede 的get()方法请求数据
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        // this.$http.get('./../static/posts.json')
            .then(function(data){
                // console.log(data);
                this.blogs = data.body.slice(0, 10);
      	        // console.log(this.blogs);
            })
    },
    computed:{
        // 实现查找功能
        filrterBlogs(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    },
    // 定义局部的过滤器，之前定义的两个过滤器都是全局的，我们也可以定义局部的过滤器
    // filters:{
    //     // 定义方法1
    //     'to-uppercase':function(value){
    //         return value.toUpperCase();
    //     },
    //     toUppercase(value){
    //         return value.toUpperCase();
    //     }
    // },

    // 定义局部的指令也是一样
    // directives:{ 
    //     'rainbow':{
    //     bind(el,binding,vnode){
    //             el.style.color="#"+Math.random().toString(16).slice(2,8);
    //         }
    //     }
    // }

}
</script>
<style  scoped>
#show-blogs{
    max-width: 70%;
    margin:0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee; 
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type='text']{ 
    padding: 8px;
    width:100%;
    box-sizing: border-box;
}
h1{
    text-align: center;
}


</style> 