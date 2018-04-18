<template>
    <section class="main">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-upload2"></i> 拖拽排序</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
      <!--  <draggable v-model="tableData" :options="{group:'people'}" @start="drag=true" @end="drag=false">
            <div v-for="element in tableData" :key="element.id">{{element.date}}、{{element.name}}、{{element.address}}</div>
        </draggable>-->
        <el-button @click="addTableColumn">ADD</el-button>
        <table class="table table-condensed">
          <!--  <caption>编排工序</caption>-->
            <thead>
            <tr>
                <th>date</th>
                <th>name</th>
                <th>address</th>
              <!--  <th>名称4</th>
                <th>名称5</th>
                <th>名称6</th>-->
            </tr>
            </thead>
           <!-- <tbody>-->
            <draggable  class="list-group" v-model="tableData"  element="tbody" @start="drag=true" @end="drag=false">
                <tr  v-for="(item,index) in tableData" :key=index>
                    <td>{{item.date}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                </tr>
            </draggable>
            <!--</tbody>-->
        </table>
    </section>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        components: {
            draggable,
        },
        data() {
            return {
                tableData: [{
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            addTableColumn(){
                let num = 5;
                let tableColumn = {
                    id: num++,
                    date: '2016-05-03',
                    name: 'mmm',
                    address: '上海市普陀区金沙江路'
                }
                this.tableData.push(tableColumn);
            }
        }
    }
</script>

<style scoped>
    .table {
        border: 1px solid #000;
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
    }
    thead {
    }
    thead tr{

    }
    thead tr th {
        width: 33%;
        border: 1px solid #000;
    }
    .list-group {
        weidth: 100% !important;
    }
    tbody tr td {
        width: 33%;
        text-align: center;
        border: 1px solid #000;
    }
</style>
