// 模态框
jQuery.fn.showModal=function(){
    var target1=$(this).attr('data-target');
    $('#'+target1).addClass('show');
    $('#'+target1 + '  .close').click(function(){
        var _this = $(this);
        _this.parents('.modal').eq(0).removeClass('show');
    })
}
$('button[data-target]').click(function(){
    $(this).showModal();
})
// todo 下拉组件
jQuery.fn.isShown=true;
jQuery.fn.dropdown= function () {
   // console.log(this);  //this指代当前的button
    var target=$(this).attr('data-toggle');
  // console.log(target); //this知道当前的class
    $('.'+target).children('.dropdown-toggle').toggleClass('dropdown-active');
    $('.'+target).children('.dropdown-menu').toggleClass('show');
    //console.log( $('.'+target).children());
    if(jQuery.fn.isShown){
        $('.caret').css('background-position','-121px -152px');
        jQuery.fn.isShown=false;
    }else{
        $('.caret').css('background-position','-139px -152px');
        jQuery.fn.isShown=true;
    }
    $('.'+target).children('.dropdown-menu').find('li').each(function (i,li) {
        //console.log($(li));
        $(li).children('a').click(function (e) {
            e.preventDefault();
            $('.'+target).children('.dropdown-toggle').children('a').html($(this).html()+"");
            $('.'+target).children('.dropdown-toggle').removeClass('dropdown-active');
            $('.'+target).children('.dropdown-menu').removeClass('show');
            $('.caret').css('background-position','-139px -152px');
            console.log($(this).parent())
            $(this).parent().addClass('active').siblings('.active').removeClass('active');
        })
    })
}
$('.dropdown>.dropdown-toggle').click(function(e) {
    e.preventDefault();
    $(this).dropdown();
});
// todo 二级菜单
$('a[data-menu=menu-sub]').click(function(e){
    e.preventDefault();  //阻止默认事件
    var target=$(this).next();  //target指代 menu-sub
    $(target).toggleClass('menu-sub-show');
    if($(target).hasClass('menu-sub-show')){
        $(target).parent().siblings('.second-level-menu').children('.menu-sub-show').removeClass('menu-sub-show');
    }
})
// todo 标签页
jQuery.fn.tabLayout= function () {
    this.find('ul.tab-choice li a').click(function (e) {
        e.preventDefault();
        //1修改附加导航中li的active
      //  console.log(this);
        $(this).parent().addClass('tab-active').siblings('.tab-active').removeClass('tab-active');
        //2修改.main中div的active
        $($(this).attr('href')).addClass('tab-active').siblings('.tab-active').removeClass('tab-active');
    })
}
$('.nav-tabs').tabLayout();

// todo 左右切换
jQuery.fn.isHide=true;
jQuery.fn.toggleTab=function(){
    $(this).click(function () {
        var width=parseInt($('#left-panel').width()+1);
        var hideTarget=$(this).attr('data-hide');
        if(jQuery.fn.isHide){
            $(this).addClass('react');
            $('#'+hideTarget).css('margin-left',-width+'px');
            $("#right-panel").css('margin-left','0');
            jQuery.fn.isHide=false;
        }else{
            $(this).removeClass('react');
            $('#'+hideTarget).css('margin-left','0');
            $("#right-panel").css('margin-left',width+'px');
            jQuery.fn.isHide=true;
        }
    })
}
$('.fold-menu').toggleTab();
// 公共函数

/* todo 输出错误信息*/
var errMsg=null;
function errPop(msg,elem){
    errMsg=msg;
    $(elem).css('border-color','#f00');
    $(elem).parent().append(`<div class="err-popup">
                       <h3 class="errMsg">${errMsg}</h3>
                       </div>`);
    $(elem).focus(function () {
        $(elem).css('border-color','#d1d2d3');
        $(elem).parent().children('.err-popup').remove();
    })
    return false;
}
/* todo 全选操作 */
function allSel(param1,param2){
    if($(param1).prop('checked')) {
        $(param2).prop("checked", true);
    }else{
        $(param2).prop("checked", false);
    }
}
function allchk(param1,param2){
    var chknum = $("").size();//选项总个数
    var chk = 0;
    $(param1).each(function () {
        if($(this).prop("checked")==true){
            chk++;
        }
    });
    if(chknum==chk){//全选
        $(param2).attr("checked",true);
    }else{//不全选
        $(param2).attr("checked",false);
    }
}