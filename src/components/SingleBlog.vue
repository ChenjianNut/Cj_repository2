<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <span style="font-size: 20px">作者:{{blog.author}}</span>
        <span style="font-size: 20px">分类：{{getCategories}}</span>
        <article>{{blog.body}}</article>
    </div>
</template>
<script>
export default {
    name:'SingleBlog',
    data(){
        return {
            id:this.$route.params.id,
            blog:{},
        }
    },
    created(){
        this.$axios.get("http://localhost:3000/blog/"+this.id)
            .then(res=>{
                this.blog=res.data;
            })
    },
    computed:{
        getCategories:function(){
            let a=this.blog.categories;
            if(a){
                return a.join(","); 
            }           
        }
    }
}
</script>
<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa; 
}
h1{
    text-align: center;
}
span{
    display: block;
    margin: 10px auto;
    padding: 10px 10px;
    font-weight: bold;
    line-height: 20px;
}
article{
    line-height: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
}
</style>