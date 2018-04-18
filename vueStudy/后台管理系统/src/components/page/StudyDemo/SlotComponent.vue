<template>
    <div>
        <hr class="hr-line">
        <h2>ChildComponent Slot</h2>
        <slot>default content</slot>
        <div :class="alertClasses" v-show="show">
            <slot>Alert Message~</slot>
            <span class="Alert_close" @click="show=false">x</span>
        </div>
        <div :class="[alertClasses,{isWeight: isWeight}]" @click="ToggleFont">
            <slot name="alertType">Default</slot>
        </div>
    </div>
</template>
<style>
    .hr-line {
        margin: 10px 0;
    }
    .Alert_close {
        font-weight: bold;
        cursor: pointer;
    }
    .Alert--Success {
        color: green;
    }
    .Alert--Warning {
        color: #aa0;
    }
    .Alert--Error {
        color: #f00;
    }
    .isWeight {
        font-weight: bold;
    }

</style>
<script>
    export default {
        name: 'slot-component',
        data(){
            return{
                show: true,
                isWeight: true
            }
        },
        props:{
            slotmessage : String,
            type: String
        },
        methods: {
            ToggleFont: function () {
                this.isWeight = this.isWeight? false :true;
            }
        },
        computed: {
            alertClasses: function () {
                return {
                    'Alert--Success': this.type === 'success',
                    'Alert--Warning': this.type === 'warning',
                    'Alert--Error': this.type === 'error'
                }
            }
        },
        mounted() {

        }
    }
</script>
