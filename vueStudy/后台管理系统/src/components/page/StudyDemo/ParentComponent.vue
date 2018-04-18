<template>
    <div>
        <h2>ParentComponent</h2>
        <h4> {{message}}</h4>
        <child-component :parentMessage="parentMessage" ref="profile"
                         @childEvent="parentMethod"
                         @childEvent2="parentMethod2">

        </child-component>
        <h3 class="marginGap">Slot</h3>
        <slot-component :currentSlotList="currentSlotList"
                        type="success">
            <p slot="alertType">success</p>
        </slot-component>
        <slot-component :currentSlotList="currentSlotList"
                        type="error">
            <p slot="alertType">error</p>
        </slot-component>
        <slot-component :currentSlotList="currentSlotList"
                        type="warning">
            <p slot="alertType">warning</p>
        </slot-component>
        <h3 class="marginGap">属性绑定</h3>
        <child-component2 :foo="foo" :boo="boo" :coo="coo" :doo="doo"></child-component2>
    </div>
</template>
<style>
    .marginGap {
        margin:10px 0;
    }
</style>
<script>
    import ChildComponent from './ChildComponent.vue'
    import SlotComponent from './SlotComponent.vue'
    import ChildComponent2 from './ChildComponent2.vue'
    export default{
        components: {
            ChildComponent,
            ChildComponent2,
            SlotComponent
        },
        data(){
            return {
                parentMessage: 'I‘m form ParentComponent‘s message',
                message : '',
                currentSlotList: 1,
                //type: 'success'
                foo: 'Hello World',
                boo: 'Hello JavaScript',
                coo: 'Hello Vue',
                doo: 'Last'
            }
        },
        methods: {
            parentMethod(){
                console.log("111")
            },
            parentMethod2({name,age}){
                console.log(this.parentMessage,name,age)
            }
        },
        mounted(){
        }
    }

</script>
