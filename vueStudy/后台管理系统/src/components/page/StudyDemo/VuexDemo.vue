<template>
   <div>
       <p @click="countNumber"> number:{{ number}}</p>
       <p>count:{{ this.count}}</p>
       <p>count1:{{ this.totalCount}}</p>
   </div>
</template>
<style>

</style>
<script>

    export default {
        name: 'VuexDemo',
        data(){
          return {
              number: this.$store.state.count
          }
        },
        getters: {
            count(state){
                return state.count
            },
            totalCount(state){
                return state.totalCount
            }
        },
        computed: {
            count(){
                return this.$store.state.count
            },
            totalCount(){
                return this.$store.state.totalCount
            }
        },
        methods:{
            countNumber(){
                if(this.$store.state.count <10){
                    this.$store.commit('incremnet')
                    this.number++;
                    console.log(this.$store.state.count);
                }
            }
        },
        watch:{

        }
    }
</script>
