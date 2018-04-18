import Vue from 'vue';
import Router from 'vue-router';

import Readme from '../components/page/Readme.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            /* vue路由的懒加载 */
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    /*非按需加载*/
                    path: '/',
                    name: 'Readme',
                    component: Readme
                    //component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    name: 'basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    name: 'baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/baserouter',
                    component: resolve => require(['../components/page/StudyDemo/BaseRouter.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/lifecycle',
                    component: resolve => require(['../components/page/StudyDemo/LifeCycle.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/parentcomponent',
                    component: resolve => require(['../components/page/StudyDemo/ParentComponent.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/slotcomponent',
                    component: resolve => require(['../components/page/StudyDemo/SlotComponent.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/VuexDemo',
                    component: resolve => require(['../components/page/StudyDemo/VuexDemo.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/Demo1',
                    component: resolve => require(['../components/page/Example/Demo1.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
