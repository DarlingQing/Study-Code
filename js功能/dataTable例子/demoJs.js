$(document).ready( function () {
    //var currentPage;  //当前页数
    //var numPerPage;     //每页条数
    var table = $('#table_id_example').dataTable({
        autoWidth: false,
        searching: false,
        lengthChange: false,
        ordering: false,
        language: {
            emptyTable: "暂无数据",
            infoEmpty:"共计0条",
            info: "当前第_START_-_END_条  共计_TOTAL_条",
            paginate: {
                first: "首页",
                previous: "上一页",
                next: "下一页",
                last: "莫页"
            },
            processing: '正在加载中'
        },
        processing: true
       /* serverSide: true,
        ajax: function(data,callback,settings){
            //分页操作
            currentPage = data.start / data.length;
            numPerPage = data.length;
            var param = {};
            param.currentpage = currentPage+1;
            param.numPerPage = data.length;
            $.ajax({
                url: contextPath + "sys/org/queryOrgChildren",
                type: "POST",
                dataType: "json",
                async: false,
                data: param,
                success: function(result){
                    var returnData = {};
                    returnData.draw = data.draw;
                    returnData.data = result.rows.result;
                    callback(returnData);
                }
            })*/
       // },
        /*columns: [
            {"data":"name"},
            //...操作
        ]*/

    }).api();
    $('#table_id_example tbody').on( 'click', 'td', function () {
        var d = table.column( this ).data();
        console.log( d);
        d.counter++;

        table
            .row( this )
            .data( d )
            .draw();
    } );
    $('#changeSelect').change(function () {
        var val = $(this).val();
        if(val ==1){
            table.column( 2 ).visible( false, false );
        }else if(val ==2){
            table.column( 2 ).visible( true, false );
        }
    })

} );