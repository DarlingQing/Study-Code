<template>
    <div class="router-content">
        <h1>{{ title }}</h1>
        基础href链接: <a :href =url>Mozilla社区</a>
        <p><b>使用 router-link 组件来导航, `to`属性指定链接,默认会被渲染成一个`a`标签</b></p>
        <p>
            router-link: <router-link :to="{path: 'basetable'}">Go to basetable</router-link>
            router-link: <router-link :to="{name: 'basetable'}">Go to basetable</router-link>
        </p>
        <p @click="skipform" class="a-hover">Click Me</p>
    </div>
</template>
<style scoped>
    a {
        color: #318ce1;
    }
    .a-hover {
        cursor: pointer;
    }
</style>
<script>
    export default {
        data(){
            return {
                title: 'vue-router',
                url: 'https://developer.mozilla.org/zh-CN/'
            }
        },
        methods: {
            skipform: function () {
                this.$router.push({path:'/baseform'})
            }
        }
    }
</script>
