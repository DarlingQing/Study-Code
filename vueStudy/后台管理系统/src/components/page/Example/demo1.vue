<template>
    <div id="main">
        <h3>{{ topic}}</h3>
        <div id="frame"  class="frame">
            <div class="blocks play">
                <div class="block-item"></div>
                <div class="block-item"></div>
                <div class="block-item"></div>
                <div class="block-item"></div>
                <ul class="list-blocks">
                    <li class="list-item">1</li>
                    <li class="list-item">2</li>
                    <li class="list-item">3</li>
                    <li class="list-item">4</li>
                </ul>
            </div>
        </div>
        <div class="tab-block">
            <ul class="linear-tab">
                <li class="tab-list">导航1</li>
                <li class="tab-list">导航2</li>
                <li class="tab-list">导航3</li>
                <li class="tab-list">导航4</li>
                <li class="tab-list">导航5</li>
            </ul>
        </div>
        <el-input  placeholder="请输入内容" v-model="inputText"></el-input>
        <Btn :btnData = "btnData"
              @confirm="confirm"
              ref="btn">
        </Btn>

    </div>
</template>
<style>
    ul,li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .frame {
        width: 300px;
        overflow: hidden;
        height: 150px;
        position: relative;
        margin-bottom: 20px;
    }
    .blocks {
        width:calc(300px * 4);
        position: absolute;
    }
    .blocks .block-item{
        float: left;
        width: 300px;
        height: 150px;
        background: #ff00ff;
        border-radius: 5px;
    }
    .blocks .block-item:nth-child(2){
        background: #ff363a;
    }
    .blocks .block-item:nth-child(3){
        background: #ffb275;
    }
    .blocks .block-item:nth-child(4){
        background: #f1ff93;
    }
    .tab-block {
        position: relative;
        margin: 10px 0;
        height: 100px;
    }
    .list-blocks {
        position: absolute;
        top: 30px;
    }
    .list-blocks .list-item {
        float: left;
        width: 200px;
        margin: 0 50px;
        height: 30px;
        line-height: 30px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background: #000;
        opacity: 0.5;
        color: #fff;
        text-align: center;
    }
    .play {
        animation: loop 16s linear infinite;
    }
    @keyframes loop {
        0%,20% {
            margin-left:0px;
        }
        25%,40% {
            margin-left:-300px;
        }
        50%,70% {
            margin-left:-600px;
        }
        75%,90% {
            margin-left:-900px;
        }
         100% {
             margin-left:0px;
         }
    }
    .linear-tab  {
        display: flex;
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    li.tab-list {
        position: relative;
        padding: 20px;
        font-size: 24px;
        color: #000;
        line-height: 1;
        transition: 0.2s all linear;
        cursor: pointer;
    }
    li.tab-list::before {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #000;
        transition: 0.2s all linear;
    }

    li.tab-list:hover::before {
        width: 100%;
        top: 0;
        left: 0;
        transition-delay: 0.1s;
        border-bottom-color: #000;
    }

    li.tab-list:hover ~ li.tab-list::before {
        left: 0;
    }

    li.tab-list:active {
        background: #000;
        color: #fff;
    }

    .confirm:disabled {
        opacity: 0.5;
    }

</style>
<script>
    import Btn from './button.vue'
    export default {
        components: {
            Btn
        },
        name: 'Demo1',
        data(){
            return {
                topic: 'CHUN CSS实现轮播',
                btnData: {
                    'text': '确认'
                },
                inputText : ''
            }
        },
        created(){

        },
        methods:{
            confirm(){
                if(!this.inputText){
                    this.$message('输入内容不能为空');
                    this.$refs.btn.cancel()
                }
            }
        },
        mounted(){

        }
    }

</script>
