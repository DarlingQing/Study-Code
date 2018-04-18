<template>
    <div>
       <p> boo: {{boo}}</p>
       <p> attrs: {{$attrs}}</p>
       <p @click='changeMessage()'>Original message: {{message}}</p>
       <p>Computed reversed message: {{reversedMessage}}</p>
    </div>
</template>
<style>

</style>
<script>

    export  default {
        data() {
            return {
                message: 'aaabbbccc'
            }
        },
        props: ['boo'],
        inheriAttrs: false,
        computed: {
            reversedMessage: function(){
                return this.message.split('').reverse().join('')
            }
        },
        methods:{
            changeMessage(){
                this.message = 'dddeeefff';
            }
        },
        created(){
            console.log(this.$attrs)
        }

    }
</script>
