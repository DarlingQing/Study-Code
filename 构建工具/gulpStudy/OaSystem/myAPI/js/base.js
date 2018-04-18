// 切换样式
jQuery.fn.toggleActive= function (param) {
    //$(this).addClass('btn-group-active').siblings('.btn-group-active').removeClass('btn-group-active');
    $(this).addClass(param).siblings('.'+param).removeClass(param);
};
$('.btn-group').on('click','.btn',function(){
    $(this).toggleActive('btn-group-active');
});
// 模态框
jQuery.fn.showModal=function(){
    var target1=$(this).attr('data-target');
    console.log(target1);
   // var target=$(this).next();
    //console.log(target);
    $('#'+target1).addClass('show');
    $('#'+target1 + '  .close').click(function(){
        var _this = $(this);
       // console.log(_this)
        _this.parents('.modal').eq(0).removeClass('show');
    })
}

$('#clickme').click(function () {
    $(this).showModal();
});
$('#clickme1').click(function () {
    $(this).showModal();
});
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
    // console.log(this);  //this 指代当前的button
    $(this).dropdown();
});
// todo 二级菜单
$('a[data-menu=menu-sub]').click(function(e){
    e.preventDefault();
    var target=$(this).next();  //target指代 menu-sub
    $(target).toggleClass('menu-sub-show');
    if($(target).hasClass('menu-sub-show')){
       // $($(target).parent()).css('background','#d5e2ef');
        $(target).parent().siblings('.second-level-menu')
            //.css('background','#f0f6f6')
            .children('.menu-sub-show').removeClass('menu-sub-show');
    }else{
       // $($(target).parent()).css('background','#f0f6f6');
    }
})
// todo 标签页
jQuery.fn.tabLayout= function () {
    //console.log("111");
    //console.log(this);
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

jQuery.fn.isHide=true;
jQuery.fn.toggleTab=function(){
   // console.log(this);
    $(this).click(function () {
       // console.log($(this).attr('data-hide'));
        var hideTarget=$(this).attr('data-hide');
        //console.log(hideTarget);
        if(jQuery.fn.isHide){
            $(this).addClass('react');
            $('#'+hideTarget).css('margin-left','-200px');
            $('#'+hideTarget).next().css('margin-left','20px');
            $("#right-panel").css('margin-left','20px');
            jQuery.fn.isHide=false;
        }else{
            $(this).removeClass('react');
            $('#'+hideTarget).css('margin-left','0');
            $('#'+hideTarget).next().css('margin-left','200px');
            $("#right-panel").css('margin-left','200px');
            jQuery.fn.isHide=true;
        }
    })
}
$('.fold-menu').toggleTab();

// todo 工具提示框
$('.tips-title').mouseover(function () {
    $(this).next().css('display','block');
})
$('.tips-title').mouseout(function (e) {
    var _this=this;
    var div=$('.tips-content');
    var x=event.clientX;
    var y=event.clientY;
    var divx1 = div.offsetLeft;
    var divy1 = div.offsetTop;
    var divx2 = div.offsetLeft + div.offsetWidth;
    var divy2 = div.offsetTop + div.offsetHeight;
    console.log(divx2);
    if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
        $(_this).next().css('display','none');
    }else{
        $(_this).next().css('display','block');
    }
})
$('.tips-content').mouseout(function(){
    console.log(this);
    $(this).css('display','none');
})
//加载进度条
$('[data-alert=top-alert]').click(function () {
    console.log($(this).attr('data-alert')); //this指代当前的btn
    var target=$(this).attr('data-alert');
    $('.'+target).css('display','block');
    setTimeout(function(){
        $('.'+target).css('display','none');
    },1000);
});
