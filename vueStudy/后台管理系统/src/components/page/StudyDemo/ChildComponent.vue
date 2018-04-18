<template>
    <div>
        <h3> I'm ChildComponent</h3>
        <span>{{ parentMessage}}</span>
    </div>
</template>
<style>

</style>
<script>
    export  default {
        //props: 属性
       // props: ['parentMessage']
        props: {
            parentMessage: {
                type: String,
                required: true
            }
        },
        methods: {
           /* childEvent2(parentMessage){
                this.$emit('childEvent',parentMessage)
            }*/

        },
        mounted(){
            this.$emit('childEvent')
            this.$emit('childEvent2',{name:'zhangsan',age: 10})
        }

    }
</script>
