<template>
    <div>
        <p> foo: {{foo}}</p>
        <p> attrs: {{$attrs}}</p>
        <child-component3 v-bind="$attrs"></child-component3>

    </div>
</template>
<style>

</style>
<script>
    import ChildComponent3 from './ChildComponent3.vue'
    export  default {
         components: {
            ChildComponent3
        },
        props: ['foo'],
        inheriAttrs: false,
        methods: {
          

        },
        created(){
            console.log(this.$attrs)
        },
        mounted(){
        }

    }
</script>
