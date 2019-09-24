<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>

    </div>
</template>
<script>
export default {
    name:'SingleBlog',
    data(){
        return {
            id:this.$route.params.id,
            // id:1,           
            blog:{}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
            .then(function(data){
                this.blog=data.body;
            })
    }
}
</script>
// lang="stylus" 会报错
<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa; 
}

</style>