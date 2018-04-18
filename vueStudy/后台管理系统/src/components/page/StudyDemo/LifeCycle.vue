<template>
    <div>
        <div>
            {{ somebody }} 说: 我 {{ age }} 了。
        </div>
        <v-girl-group
            :girls="aGirls"
            :noticeGirl="noticeGirl"
            @introduce="introduceSelf">
        </v-girl-group>
    </div>
</template>
<style scoped>

</style>
<script>
    import vGirlGroup from './GirlGroup'
    export default {
        name: 'girl',
        components: {
            vGirlGroup
        },
        data(){
            return {
                aGirls:[{
                    name:'小丽',
                    age:22
                },{
                    name:'小美',
                    age:21
                },{
                    name:'小荷',
                    age:24
                }],
                somebody:'',
                age:'',
                noticeGirl:''
            }
        },
        methods: {
            introduceSelf (opt) {
                this.somebody = opt.name;
                this.age = opt.age;

                // 通知girl收到消息
                this.noticeGirl = opt.name + ',已收到消息';
            }
        },
        beforeCreate: function () {
            console.group('beforeCreate创建创建前状态===============');
            console.log("%c%s","color:red","data:"+this.message);
        },
        created: function () {
            console.group('beforeCreate创建完毕状态===============');
            console.log("%c%s","color:red","data:"+this.message);
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s","color:red","data:"+this.message);
        },
        mounted: function () {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s","color:red","data:"+this.message);
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s","color:red","data:"+this.message);
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s","color:red","data:"+this.message);
        },
        beforeDestory: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s","color:red","data:"+this.message);
        },
        destoryed: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s","color:red","data:"+this.message);
        }
    }
</script>
