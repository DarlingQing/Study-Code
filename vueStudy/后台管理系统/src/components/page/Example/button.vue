<template>
    <div class="container">
        <button @click="confirm"
                :disabled="state"
                class="confirm"
                :style="{background: btnData.bgColor}">
            {{text}}
        </button>
    </div>

</template>
<style>
    .confirm {
        border: none;
        color: #fff;
        width: 100px;
        padding: 1rem 0;
        border-radius: 4px;
        font-size: 1.6rem;
        background: #5da1fd;
    }
    .confirm:focus {
        outline: none;
    }
</style>
<script>
    export default {
        data(){
            return {
                text: this.btnData.text,
                state: false
            }
        },
        props: {
            btnData: {
                types: Array,
                default(){
                    return {
                        text: '确认'
                    }
                }
            }
        },
        methods: {
            confirm(){
                this.text += '...';
                this.state = true;
                this.$emit('confirm');
            },
            cancel(){
                this.text = this.btnData.text;
                this.state = false;
            }
        }
    }
</script>
